import * as React from "react";
import logo from "../Img/favicon-32x32.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="appBar">
      <a href="#" className="logo">
        <img src={logo}></img>
      </a>
      <ul style={{ color: "white", display: "flex", justifyContent: "center" }}>
        <li>
          <a href="#background">Background</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experiences">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
