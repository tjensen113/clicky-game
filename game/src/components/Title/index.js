import React from "react";
import "./style.css";

function Title(props) {
  // return <h1 className="title">{props.children}</h1>;

  return(
    <div className="header">

    <span> Score: {props.score} | Top Score: {props.topScore} </span>
    <h1><strong>The Clicky Game</strong></h1>
    </div>
  )
}

export default Title;