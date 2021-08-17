import "styles/Home.css";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect } from "react";

function App(): JSX.Element {
  useEffect(() => {
    document.title = "Cook Off Guide";
  }, []);

  return (
    <div>
      <h1>General Tips &amp; Information</h1>
      <p className="info">
        Grab a full set of ingredients from the locations that will be the most
        difficult to return to. The locations by most difficult to get to and
        return from are as follows:
        <ol>
          <li> White pickup truck </li>
          <li> Shed behind the home / Shed to the left of the home </li>
          <li> Basement</li>
          <li> Bathroom</li>
        </ol>
      </p>
      <p className="info">
        Move Bags when the Van Arrives. It is up to you to determine whether or
        not it is safe to transport the bags.
      </p>
      <p className="info">
        There are multiple preset spots for cloakers to hide:
        <ul>
          <li>
            Behind the <u>Blue Dumpster</u> next to the White Sedan
          </li>
          <li>
            Under the <u>White Sedan</u>
          </li>
          <li>
            In the first or second story of the home (depending on the lab
            location)
          </li>
          <li>Behind the fence near where the van would arrive on Rats</li>
        </ul>
        The Cloakers can hide behind the wall in front of the window in the main
        section of the home (across from the bathroom next to the back door).
        They can also hide behind the countertop.
      </p>
      <p className="info">
        If you have a first-level lab, the Bathroom is an extremely safe spot as
        the Officers are <u>NOT</u> programmed to go into there, and only enter
        on extremely rare occasions. The only real way they go into the bathroom
        is if you lead them in there. If you store bags in the bathroom tub,
        cops will <u>NOT</u> take them, or teleport them.
      </p>
      <p className="info">
        <u>Subtitles</u> are especially helpful, as Bain is often ambiguous or
        uncertain.
      </p>
      <p className="info">
        Having a dedicated cook that knows the lines is of most importance. It
        is better to take a slightly longer amount of time with just one
        dedicated cook, than having someone blow up the lab.
      </p>
      <p className="info">
        If multiple people will cook, then have <u>only ONE</u> person cook per
        batch. Confusion is minimized, and you will know what the last
        ingredient is before Bain says what to add, thereby speeding up the
        cook. Only players who know the lines should be cooks.
      </p>
      <p className="info">
        There are 5 sets of planks in this Heist. If you have an upstairs lab,
        barricade the back room with two and use the remaining three as you
        wish. With a downstairs lab, my recommendation is to place one on the
        window next to the stove. The remaining can be used how you wish.
      </p>
      <p className="info">
        Refrain from using grenades. In nearly any circumstance, refrain from
        using grenades. Not only do you destroy nearly all of the barricades,
        but you also do severe damage to any teammates in the blast radius.
      </p>
      <p className="info">
        With an upstairs lab, focus on fighting within the stairs/bathroom,
        retreating to the back room if needed. If the lab is downstairs, fight
        around the bathroom.
      </p>
      <p className="info">
        <u>Ignore the power</u>. Get used to using a flashlight, or get used to
        it being dark. Whether or not you break the light bulbs is up to you.
      </p>
      <p className="info">
        The helicopter can do one of two things:
        <ol>
          <li> It can deploy a bulldozer</li>
          <li> Spawn yellow SWAT on the balcony</li>
        </ol>
        If hovering behind the home, a bulldozer will deploy from the
        helicopter. If hovering above the home, it will spawn yellow SWAT on the
        balcony.
      </p>

      <LinkContainer to="/dialogue">
        <section className="container">
          <button data-hover="View Dialogue">
            <div>Cook Off Bain&apos;s Dialogues</div>
          </button>
        </section>
      </LinkContainer>
    </div>
  );
}

export default App;
