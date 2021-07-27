import "./App.css";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div>
      <h1>General Tips & Information</h1>
      <body>
        <p>
          Grab a full set of ingredients from the locations that will be the
          most difficult to return to. The locations by most difficult to get to
          and return from are as follows.
          <ol>
            <li> White pickup truck </li>
            <li>Shed behind the home / Shed to the left of the home </li>
            <li>Basement</li>
            <li>Bathroom</li>
          </ol>
        </p>

        <p>
          Move Bags when the Van Arrives; It is up to you to determine whether
          or not it is safe to transport the bags. If so, move quickly and take
          your finger off the trigger for the time being, Unless you take enemy
          fire. (It will slightly increase the time it takes for Law Enforcers
          to engage you, giving you a better chance of survival. Keep in mind
          Specials such as Bulldozers, Tasers, Cloakers and Shields are exempt
          from this tip. Kill them on sight.)
        </p>

        <p>
          There are multiple preset spots for cloakers to hide, They will hide
          behind the Blue Dumpster next to the White Sedan; Under the White
          Sedan; In the first or second story of the home.(Depending on the lab
          location.) and behind the fence near where the van would arrive on
          Rats. (The furthest down the street that the van can arrive.)
        </p>

        <p>
          The Cloakers can hide behind the wall in front of the window in the
          main section of the home (Across from the bathroom next to the back
          door). They can also hide behind the counter top.
        </p>
      </body>

      <LinkContainer to="/dialogue">
        <button>Click me!</button>
      </LinkContainer>
    </div>
  );
}

export default App;
