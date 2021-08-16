import React, { useCallback, useEffect, useState } from "react";

import Character from "./Components/Character";
import { debounce } from "./helpers/debounce";
import * as api from "./api/rickandmortyapi";
import "./App.css";

function App() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    api.getAll().then((resp) => {
      setCharacter(resp.data.results);
    });
  }, [setCharacter]);

  const [query, setQuery] = useState("");
  const apiQuery = useCallback(
    debounce((queryText) => {
      if (queryText.length >= 2) {
        api
          .getByName(queryText)
          .then((resp) => {
            setCharacter(resp.data.results);
          })
          .catch(() => {
            setCharacter([]);
          });
      } else {
        api.getAll().then((resp) => {
          setCharacter(resp.data.results);
        });
      }
    }, 500),
    []
  );

  const changeQuery = useCallback((event) => {
    const queryText = event.target.value;
    setQuery(queryText);
    apiQuery(queryText);
  }, []);

  return (
    <div className="app">
      <div className="search">
        <input
          className="search__input"
          type="text"
          value={query}
          onChange={changeQuery}
        />
      </div>
      <div className="app__characters">
        {characters.map((character) => (
          <Character character={character} key={character.id} />
        ))}
        {!characters.length && query && <p>Не найдено</p>}
      </div>
    </div>
  );
}

export default App;
