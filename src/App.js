import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BlogPage from "./components/blogpage";
import EditPage from "./components/editpage";
import Navbar from "./components/navbar";
import Blogs from "./pages/blogs";
import New from "./pages/new";

function App() {
    return (
        <Router>
            <Navbar />
            <div className='container py-4'>
                <Switch>
                    <Route exact path='/'>Index</Route>
                    <Route exact path='/blogs'><Blogs /></Route>
                    <Route path='/blog/:id'><BlogPage/></Route>
                    <Route path='/edit/:id'><EditPage/></Route>
                    <Route exact path='/new'><New /></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
