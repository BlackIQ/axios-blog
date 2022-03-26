import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const EditPage = () => {

    const {id} = useParams();

    const [data, setData] = useState('');

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/blogs/' + id).then((response) => {
            setData(response.data);
        });
    });

    const update = e => {
        e.preventDefault();

        const data = {title, text};

        setLoading(true);

        axios.put('http://localhost:8000/blogs/' + id, data).then(response => {
            console.log(response);
        });

        setLoading(false);

        setTitle('');
        setText('');
    }

    return (
        <div>
            {
                data ? <form onSubmit={update}>
                    <label className='form-label' htmlFor='title'>Blog title</label>
                    <input id='title' className='form-control' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <br/>
                    <label className='form-label' htmlFor='text'>Blog text</label>
                    <textarea id='text' className='form-control' placeholder='Text' value={text} rows='10' onChange={(e) => setText(e.target.value)}/>
                    <br/>
                    {
                        loading ? <button className='btn btn-dark' type='submit' disabled>Updating</button> : <button className='btn btn-dark' type='submit'>Update it</button>
                    }
                </form> : <p>Loading . . .</p>
            }
        </div>
    );
}

export default EditPage;
