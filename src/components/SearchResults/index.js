import React from "react";
import "./style.css";

function SearchResults(props) {
  console.log(props.users);
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {props.users.map(user => {
          return <div key={user.login.uuid} className="card">{user.name.first} {user.name.last}</div>;
        })}
      </li>
    </ul>
  );
}

export default SearchResults;
