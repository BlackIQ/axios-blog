import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const BlogPage = () => {
    const [data, setData] = useState('');

    const {id} = useParams();

    const deleteBlog = id => {
        axios.delete('http://localhost:8000/blogs/' + id).then(response => {
            console.log(response);
        });
    }

    useEffect(() => {
        axios.get('http://localhost:8000/blogs/' + id).then((response) => {
            setData(response.data)
        });
    }, []);

    if (!data) return null;

    return (
        <div>
            <h1>{data.title}</h1>
            <br/>
            <p>{data.text}</p>
            <hr />
            <p>
                <span onClick={(id) => {deleteBlog(data.id)}} className={'text-danger pointer'}>Delete</span>
                <span onClick={(id) => {deleteBlog(data.id)}} className={'text-primary pointer float-end'}>Edit</span>
            </p>
        </div>
    );
}

export default BlogPage;
