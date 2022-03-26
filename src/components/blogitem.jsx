import {Link} from "react-router-dom";

const BlogItem = (props) => {
    const blog = props.blog;
    return (
        <div>
            <div className='border p-3 rounded-3'>
                <h2><Link to={'/blog/' + blog.id}>{blog.title}</Link></h2>
                <p>{blog.text}</p>
            </div>
            <br />
        </div>
    );
}

export default BlogItem;
