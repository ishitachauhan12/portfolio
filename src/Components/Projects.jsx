import * as React from "react";
import "./Background.css";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import momo from "../Img/momo.jpg";
import Fade from "react-reveal/Fade";
import bh from "../Img/book-hunt.png";
import cc from "../Img/chit-chat.png";
import wa from "../Img/weather-app.png";
import data from "../Data/projects";

export default function Projects() {
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
    <div id="projects" style={{ height: "80vh" }}>
      <Fade left cascade>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "5%",
            overflow: "hidden",
          }}
        >
          {data[0].projects.map((i) => (
            <Card
              sx={{
                width: "500px",
                m: "20px",
                zIndex: "10",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={i.img_url == "cc" ? cc : i.img_url == "bh" ? bh : wa}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {i.project_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {i.description}
                </Typography>
              </CardContent>
              <CardActions>
                {i.link.map((item) => {
                  <a href={item.url} style={{ color: "blue" }} key={item.key}>
                    {item.name}
                  </a>;
                })}
              </CardActions>
            </Card>
          ))}
        </div>
      </Fade>

      <img
        src={momo}
        className="image4"
        style={{
          ml: "200px",
          opacity: "0.4",
          height: "400px",
          width: "300px",
          transform: "translate(300px,-400px)",
          zIndex: "4",
        }}
      />
      <div>
        <h1
          className="headers"
          style={{
            writingMode: "vertical-rl",
            color: "#9C444F",
            right: "10px",
            position: "absolute",
            bottom: `${(offset - 7000) * 0.2}px`,
            zIndex: 11,
          }}
        >
          {data[0].heading}
        </h1>
      </div>
    </div>
  );
}
