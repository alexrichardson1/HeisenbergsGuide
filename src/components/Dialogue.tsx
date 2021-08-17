import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { dialogues } from "../dialogues";
import "styles/Dialogue.css";

function Dialogue(): JSX.Element {
  let id = 0;
  const [search, setSearch] = useState("");
  const [filteredDialogues, setFilteredDialogues] = useState(() => dialogues);

  useEffect(() => {
    document.title = "Bain's Dialogues";
  }, []);

  useEffect(() => {
    setFilteredDialogues(
      dialogues.filter((d) => d.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <div>
      <h1>Dialogue Lists</h1>
      <input
        type="text"
        placeholder="Enter Bain's Dialogue Here"
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="table">
        {filteredDialogues.map((d) => (
          <div key={id++}>{d}</div>
        ))}
      </span>
      <LinkContainer to="/">
        <section className="container">
          <button data-hover="Go Back">
            <div>Cook Off Guide</div>
          </button>
        </section>
      </LinkContainer>
    </div>
  );
}

export default Dialogue;
