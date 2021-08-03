import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Dialogue from "./Dialogue";
import NoPageFound from "./NoPageFound";

const Navigation = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/dialogue" component={Dialogue}></Route>
          <Route path="/404" component={NoPageFound}></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
