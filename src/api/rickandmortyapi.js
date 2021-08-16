import axios from "axios";

export function getAll() {
  const apiUrl = "https://rickandmortyapi.com/api/character";
  return axios.get(apiUrl);
}

export function getByName(queryText) {
  const apiUrl = "https://rickandmortyapi.com/api/character/?name=" + queryText;
  return axios.get(apiUrl);
}
