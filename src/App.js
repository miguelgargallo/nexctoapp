import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note.js";
import axios from "axios";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  const [tokenAddress, setTokenAddress] = useState("");

  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    setTokenAddress("6dmkrp3XjSGyd2kWQCnKtvaufBR4ov7ZDAsrWbGbYTbX");
    // setWalletAddress("FLpXKSjzWkAWWtTzQgvaKZpjVbZBLYLSzEoVTbTNmaKm");

    axios
      .get(
        `https://api.solscan.io/transfer/token?token_address=${tokenAddress}`
      )
      .then((response) => {
        const { data } = response;
        console.log("hey data items", data.data.items);

        setNotes(data.data.items);
        setLoading(false);
      });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("crear nota");
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    axios.post("https://jsonplaceholder.typicode.com/posts", noteToAddToState);

    //  setNotes((prevNotes) => prevNotes.concat(noteToAddToState));
    setNewNote("");
  };

  console.log("render");

  return (
    <div>
      <h1>Token transfers</h1>
      {loading ? "Cargando..." : ""}
      <li>
        {notes.map((note) =>
          note.commonType !== "mint" ? <Note key={note._id} {...note} /> : <></>
        )}
      </li>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Add name</button>
      </form>
    </div>
  );
}
