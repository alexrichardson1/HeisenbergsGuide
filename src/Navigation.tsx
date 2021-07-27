import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Dialogue from "./Dialogue";

const Navigation = () => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={App}></Route>
        <Route path="/dialogue" component={Dialogue}></Route>
      </div>
    </Router>
  );
};

export default Navigation;
