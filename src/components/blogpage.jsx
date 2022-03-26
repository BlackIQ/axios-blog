import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const BlogPage = () => {
    const {id} = useParams();

    const [data, setData] = useState('');

    const deleteBlog = id => {
        axios.delete('http://localhost:8000/blogs/' + id).then(response => {
            console.log(response);
        });
    }

    useEffect(() => {
        axios.get('http://localhost:8000/blogs/' + id).then((response) => {
            setData(response.data)
        });
    });

    return (
        <div>
            {
                data ? <div>
                    <h1>{data.title}</h1>
                    <br/>
                    <p>{data.text}</p>
                    <hr />
                    <p>
                        <span onClick={(id) => {deleteBlog(data.id)}} className={'text-danger pointer'}>Delete</span>
                        <Link to={'/edit/' + data.id} className={'text-primary pointer float-end'}>Edit</Link>
                    </p>
                </div> : <p>Loading . . .</p>
            }
        </div>
    );
}

export default BlogPage;
