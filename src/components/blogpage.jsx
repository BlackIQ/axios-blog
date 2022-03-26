import React, {useEffect, useState} from "react";
import axios from "axios";
import BlogItem from "../components/blogitem";
import {useParams} from "react-router-dom";

const BlogPage = () => {
    const [data, setData] = useState('');

    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/blogs/' + id).then((response) => {setData(response.data)});
    }, []);

    return (
        <div>
            {
                data.name
            }
        </div>
    );
}

export default BlogPage;
