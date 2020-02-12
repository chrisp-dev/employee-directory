import React from "react";
import "./style.css";
import CPTable from "../CPTable";

function SearchResults(props) {
  console.log(props.users);
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <CPTable users={props.users} />
      </li>
    </ul>
  );
}

export default SearchResults;
