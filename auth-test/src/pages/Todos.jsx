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

  useEffect(() => {
    const collRef = collection(db, "users", _id, "todos");
    onSnapshot(collRef, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button onClick={() => handleNew(_id)}>new</button>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todo) => (
          <li className="color_div" key={todo.id}>
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
          </li>
        ))}
      </ul>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
}
