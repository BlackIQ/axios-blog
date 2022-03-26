import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Blogs from "./pages/blogs";
import BlogPage from "./components/blogpage";
import New from "./pages/new";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>Index</Route>
                <Route exact path='/blogs'><Blogs /></Route>
                <Route path='/blog/:id'><BlogPage /></Route>
                <Route exact path='/new'><New /></Route>
            </Switch>
        </Router>
    );
}

export default App;
