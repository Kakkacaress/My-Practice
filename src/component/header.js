import React from "react";
import "./headerStyle.css";
import Home from "./myWeb.js";
import Services from "./services";
import Contact from "./contact";
// import About from "./about";

function Header(props) {
  return (
    <div>
      <div id="header">
        <div id="logoDiv">{props.logo}</div>
        <ul id="ul">
          <li>
            <a href={Home}>{props.li1}</a>
          </li>
          <li>
            <a href={Services}>{props.li2}</a>
          </li>
          <li>
            <a href={Contact}>{props.li3}</a>
          </li>
          <li>
            <a href="./about.js">{props.li4}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
