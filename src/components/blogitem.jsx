import {Link} from "react-router-dom";

const BlogItem = (props) => {
    const blog = props.blog;
    return (
        <p><Link to={'/blog/' + blog.id}>{blog.name}</Link></p>
    );
}

export default BlogItem;
