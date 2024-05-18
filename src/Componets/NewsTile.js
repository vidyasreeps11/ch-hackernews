import React from "react";
import "./NewsTile.css";

function NewsTile(props) {

  return (
    <div className="newsTile_div">
      <a href={props.url} target="_blank" rel="noreferrer">
        {props.title}
      </a>
    </div>
  );
}

export default NewsTile;
