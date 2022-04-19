import React, { useState, useEffect } from "react";
import dictionary from "./dictionary.json";
import wn8calculator from "./wn8calculator";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [id, setId] = useState("");
  const [stats, setStats] = useState([{ data: null, id: "initial" }]);
  const [wn8, setWN8] = useState(null);
  const [isDone, setDone] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isDone) {
      console.log(stats);
      setLoading(false);
    }
  }, [isDone, stats]);

  const clearInput = () => {
    document.getElementById("search").value = "";
  };

  const fetchData = async (user) => {
    await fetch(
      `https://api.worldoftanks.eu/wot/account/list/?application_id=254f815bda44b4c204467032a61f6836&search=${user}`
    )
      .then((res) => res.json())
      .then(async ({ data }) => {
        setId(data[0].account_id);
        await fetch(
          `https://api.worldoftanks.eu/wot/account/info/?application_id=254f815bda44b4c204467032a61f6836&account_id=${data[0].account_id}`
        )
          .then((res) => res.json())
          .then(async ({ data }) => {
            let obj = Object(data);
            setStats(Object.values(obj)[0]);
          });
      });

    setDone(true);
  };

  return (
    <div className="App">
      <div id="left_container"></div>
      <div id="right_container">
        <input
          type="text"
          id="search"
          onInput={(e) => {
            setUser(e.currentTarget.value);
            setWN8(null);
          }}
        />
        <button
          onClick={() => {
            setDone(false);
            fetchData(user);
            clearInput();
          }}
        >
          search
        </button>
        <button
          onClick={() => {
            wn8calculator(id, (wn8) => {
              setWN8(wn8);
            });
          }}
        >
          wn8
        </button>
        {isLoading ? null : (
          <table>
            <tbody>
              {isDone &&
                Object.keys(stats.statistics.all).map((stat, index) => {
                  return dictionary.types["all"].includes(stat) ? (
                    <tr key={index}>
                      <td>{dictionary[stat]}</td>
                      <td>{stats.statistics.all[stat]}</td>
                    </tr>
                  ) : null;
                })}
            </tbody>
          </table>
        )}
        {wn8 ? <span> your wn8 is: {wn8} </span> : null}
      </div>
    </div>
  );
}

export default App;
