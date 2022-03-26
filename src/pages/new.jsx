import {useState} from "react";
import axios from "axios";

const New = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const [loading, setLoading] = useState(false);

    const submit = e => {
        e.preventDefault();

        const data = {title, text};

        setLoading(true);

        axios.post('http://localhost:8000/blogs', data).then(response => {
            console.log(response);
        });

        setLoading(false);

        setTitle('');
        setText('');
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label className='form-label' htmlFor='title'>Blog title</label>
                <input id='title' className='form-control' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <label className='form-label' htmlFor='text'>Blog text</label>
                <textarea id='text' className='form-control' placeholder='Text' value={text} rows='10' onChange={(e) => setText(e.target.value)}/>
                <br/>
                {
                    loading ? <button className='btn btn-dark' type='submit' disabled>Posting</button> : <button className='btn btn-dark' type='submit'>Post it</button>
                }
            </form>
        </div>
    );
}

export default New;
