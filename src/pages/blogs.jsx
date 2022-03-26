import React, {useEffect, useState} from "react";
import axios from "axios";
import BlogItem from "../components/blogitem";

const Blogs = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/blogs').then((response) => {setData(response.data)});
    }, []);

    return (
        <div>
            {
                data.map((d) => {
                    return (
                        <BlogItem key={d.id} blog={d} />
                    );
                })
            }
        </div>
    );
}

export default Blogs;
