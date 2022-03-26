import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Blogs from "./pages/blogs";
import BlogPage from "./components/blogpage";
import New from "./pages/new";
import Navbar from "./components/navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <div className='container py-4'>
                <Switch>
                    <Route exact path='/'>Index</Route>
                    <Route exact path='/blogs'><Blogs /></Route>
                    <Route path='/blog/:id'><BlogPage /></Route>
                    <Route exact path='/new'><New /></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
