import "./utils/style/App.css";
import { useEffect, useState } from "react";
import db from "./firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import {
  Dot,
  handleNew,
  handleEdit,
  handleDelete,
  handleDeleteQuery,
} from "./utils";

function App() {
  const [colors, setColors] = useState([
    { name: "Loading ...", value: "#fff", id: "initial" },
  ]);

  useEffect(() => {
    const collRef = collection(db, "colors");
    const q = query(collRef, orderBy("name", "asc"));
    onSnapshot(q, (snapshot) =>
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);

  return (
    <div className="container">
      <button className="main-btn" onClick={handleNew}>
        New
      </button>
      <button className="main-btn" onClick={handleDeleteQuery}>
        Delete query
      </button>
      <ul>
        {colors.map((color) => (
          <li className="color_div" key={color.id}>
            <button
              className="btn-in-line"
              onClick={() => handleEdit(color.id)}
            >
              edit
            </button>
            <button
              className="btn-in-line"
              onClick={() => handleDelete(color.id)}
            >
              delete
            </button>
            <Dot color={color.value} />
            <span>{color.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
