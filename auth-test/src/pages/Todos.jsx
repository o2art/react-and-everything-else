import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "@firebase/firestore";
import {
  handleNew,
  handleEdit,
  handleDelete,
  handleDeleteQuery,
  handleLogout,
} from "../firebase";

export function Todos({ user }) {
  const _id = user.uid;
  const [todos, setTodos] = useState([{ todo: "Loading ...", id: "initial" }]);
  const [error, setError] = useState("");
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const collRef = collection(db, "users", _id, "todos");
    onSnapshot(collRef, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setChecked(new Array(todos.length).fill(false));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckbox = (pos) => {
    const update = checked.map((item, index) => (index === pos ? !item : item));
    setChecked(update);
  };

  return (
    <div>
      <button onClick={() => handleNew(_id)}>new</button>
      <button onClick={() => handleDeleteQuery(_id, todos, checked)}>
        delete checked
      </button>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todo, index) => (
          <li className="color_div" key={index}>
            <button
              className="btn-in-line"
              onClick={() => {
                try {
                  handleEdit(_id, todo.todo, todo.id);
                } catch (err) {
                  alert(err.message);
                }
              }}
            >
              edit
            </button>
            <button
              className="btn-in-line"
              onClick={() => {
                try {
                  handleDelete(_id, todo.id);
                } catch (e) {
                  alert(e.message);
                }
              }}
            >
              delete
            </button>
            <span>{todo.todo}</span>
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() => handleCheckbox(index)}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
}
