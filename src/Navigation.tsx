import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Dialogue from "./Dialogue";
import NotFoundPage from "./NotFoundPage";

const Navigation = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/dialogue" component={Dialogue}></Route>
          <Route path="/404" component={NotFoundPage}></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
