import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar navbar-light bg-light shadow-sm'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
}

export default Navbar;
