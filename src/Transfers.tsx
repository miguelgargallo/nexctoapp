import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note";
import axios from "axios";

interface TransferProps {
  title: string;
}
const Transfers = (props: TransferProps) => {
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
      <h1>{props.title} transfers</h1>
      {loading ? "Cargando..." : ""}
      <div>
        {
        props.title ==="User" ? notes.map((note, i) =>
          note.commonType !== "mint" ? (
            <Note title={props.title} key={note._id} noteInfo={note} />
          ) : (
            <></>
          )
        ) :
        notes.filter(note => note.destOwnerAccount ==="FLpXKSjzWkAWWtTzQgvaKZpjVbZBLYLSzEoVTbTNmaKm")
        }
      </div>
    </div>
  );
};

export default Transfers;
