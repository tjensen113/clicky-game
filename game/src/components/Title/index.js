import React from "react";
import "./style.css";

function Title(props) {
  // return <h1 className="title">{props.children}</h1>;

  return(
    <div className="header">

    <span> Score: {props.score} | Top Score: {props.topScore} </span>
    <h1><strong>THE CLICKY GAME</strong></h1>
    </div>
  )
}

export default Title;