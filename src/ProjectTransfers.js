import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note.js";
import axios from "axios";

const ProjectTransfers = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.solscan.io/transfer/token?token_address=6dmkrp3XjSGyd2kWQCnKtvaufBR4ov7ZDAsrWbGbYTbX`
      )
      .then((response) => {
        const { data } = response;
        console.log("hey data items", data.data.items);
        setNotes(data.data.items);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Project transfers</h1>
      {loading ? "Cargando..." : ""}
      <li>
        {notes.map((note) =>
          note.commonType !== "mint" ? <Note key={note._id} {...note} /> : <></>
        )}
      </li>
    </div>
  );
};

export default ProjectTransfers;
