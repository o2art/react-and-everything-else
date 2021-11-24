import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "@firebase/firestore";
import {
  handleNew,
  handleEdit,
  handleDelete,
  handleDeleteQuery,
} from "../firebase";
import { handleLogout } from "../firebase/index";
import "../style/User.css";

export const User = ({ user }) => {
  const _id = user.uid;
  const [todos, setTodos] = useState([{ todo: "Loading ...", id: "initial" }]);

  useEffect(() => {
    const collRef = collection(db, "users", _id, "todos");
    onSnapshot(collRef, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h2> currently logged in user: {user.email}</h2>
      <button className="main-btn" onClick={() => handleNew(_id)}>
        New
      </button>
      <button
        className="main-btn"
        onClick={() => {
          alert("todo");
          //handleDeleteQuery(_id)
        }}
      >
        Delete query
      </button>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todo) => (
          <li className="color_div" key={todo.id}>
            <button
              className="btn-in-line"
              onClick={() => {
                try {
                  handleEdit(_id, todo.todo, todo.id);
                } catch (e) {
                  alert(e.message);
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
      <button className="logout" onClick={handleLogout}>
        log out
      </button>
    </div>
  );
};

export default User;
