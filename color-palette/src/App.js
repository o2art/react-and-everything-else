import './utils/style/App.css';
import { useEffect, useState } from "react";
import db from "./firebase/firebase";
import { collection, onSnapshot} from '@firebase/firestore';
import { Dot, handleNew, handleEdit, handleDelete } from "./utils";

function App() {
  const [colors, setColors] = useState([{name:"Loading ...", value: "#fff", id: "initial"}]);

  useEffect(() => 
    onSnapshot(collection(db, "colors"), (snapshot) => {
      setColors(snapshot.docs.map((doc) => 
        ({...doc.data(), id: doc.id})
      ));
    })
  )

  return (
    <div className="container">
      <button className="main-btn" onClick={handleNew}>New</button>
      {colors.map((color)=>
        <div className="color_div" key={color.id}>
          <button className="btn-in-line" onClick={() => handleEdit(color.id)}>edit</button>
          <button className="btn-in-line" onClick={() => handleDelete(color.id)}>delete</button>
          <Dot color={color.value}/> 
          <span>{color.name}</span>
        </div>
      )}
    </div>
  );
}

export default App;
