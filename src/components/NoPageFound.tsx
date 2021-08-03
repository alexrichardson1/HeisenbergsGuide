import { LinkContainer } from "react-router-bootstrap";
import "../styles/NoPageFound.css";
import { BrowserRouter as Router } from "react-router-dom";

function NoPageFound() {
  return (
    <Router>
      <div>
        <LinkContainer to="/">
          <section className="container">
            <button data-hover="Go to Home">
              <div>404 Page Not Found</div>
            </button>
          </section>
        </LinkContainer>
      </div>
    </Router>
  );
}

export default NoPageFound;
