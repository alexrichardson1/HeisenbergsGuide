import { useEffect, useState } from "react";

const dialogues = [
  "Now we need... I'm going with (ingredient). Hold up!",
  "Uh... mhm...We'll go with (ingredient). Nope, that's not it!",
];
var id = 0;

function Dialogue() {
  const [search, setSearch] = useState("");
  const [filteredDialogues, setFilteredDialogues] = useState(() => dialogues);

  useEffect(() => {
    setFilteredDialogues(dialogues.filter((d) => d.includes(search)));
  }, [search]);

  return (
    <div>
      <h1>Dialogue Lists</h1>
      <input
        type="text"
        placeholder="Enter Bain's Dialogue Here"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredDialogues.map((d) => (
        <div key={id++}>{d}</div>
      ))}
    </div>
  );
}

export default Dialogue;
