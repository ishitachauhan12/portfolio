import moon from "../Img/moon.png";
import behindM from "../Img/mountains_behind.png";
import frontM from "../Img/mountains_front.png";
import stars from "../Img/stars.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { React, useState, useEffect } from "react";
import "./ParallaxImg.css";
import Navbar from "./Navbar";
import logo from "../Img/favicon-32x32.png";
function Parallax() {
  const [offset, setOffset] = useState(0);
  const handleScroll = () => {
    setOffset(window.pageYOffset);
    console.log(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bgColor">
      <Navbar />
      <div className="section">
        <img
          src={stars}
          alt="stars"
          className="stars"
          style={{ left: `${offset * 0.2}px` }}
        />
        <img
          src={moon}
          alt="moon"
          className="moon"
          style={{ top: `${offset * 0.6}px` }}
        />
        <img
          src={behindM}
          alt="behindM"
          className="behindM"
          style={{ top: `${offset * 0.5}px` }}
        />

        <h1 className="textScroll">SCROLL</h1>

        <ArrowDownwardIcon
          sx={{ m: "100px", color: "white", fontSize: "50px" }}
          className="arrowD"
        />

        <h1 className="text" style={{ right: `${(offset - 100) * 5}px` }}>
          HELLO WORLD
        </h1>
        <img src={frontM} className="frontM" alt="frontM" />
      </div>
    </div>
  );
}

export default Parallax;
