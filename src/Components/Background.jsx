import * as React from "react";
import { useEffect, useState } from "react";
import "./Background.css";
import data from "../Data/background";
import jMe from "../Img/jabalpur-me-1.jpg";
import delhiMe from "../Img/delhi-me.jpg";

export default function Background() {
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
  console.log(data[0]);
  return (
    <>
      <div className="sec2" id="background">
        <img
          src={jMe}
          className="image2"
          style={{
            ml: "200px",
            opacity: "0.2",
            height: "400px",
            width: "300px",
            top: `${(offset - 500) * 0.2}px`,
          }}
        />

        <div
          style={{
            borderRadius: "10px",
            width: "50%",
            textAlign: "justify",
          }}
        >
          <h1 className="headers">{data[0].heading}</h1>
          <h2 className="body">
            {data[0].body.map((i) => (
              <>
                <p key={i.key}>{i.line}</p>
              </>
            ))}
          </h2>
        </div>

        <img
          src={delhiMe}
          className="image"
          style={{
            ml: "200px",
            opacity: "0.4",
            height: "400px",
            width: "300px",
            top: `${(offset - 400) * 0.1}px`,
          }}
        />
      </div>
    </>
  );
}
