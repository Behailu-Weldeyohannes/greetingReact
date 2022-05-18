import React from "react";
import ReactDOM from "react-dom";
import css from "../src/index.css";

let greeting = "";
const customStyle = {
  color: " ",
};

const date = new Date();
const currentTime = date.getHours();

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "blue";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "#b3dbe0";
} else {
  greeting = "Good Night";
  customStyle.color = "#131862";
}

ReactDOM.render(
  <div>
    <h1 className=" heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
