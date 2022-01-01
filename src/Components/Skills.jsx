import { useRef, React } from "react";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "./Skills.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Roll from "react-reveal/Roll";
import data from "../Data/skills";
export default function Skills() {
  const ref = useRef();
  return (
    <div id="skills" style={{ height: "75vh" }}>
      <Roll left>
        <Flippy flipOnHover={true} flipDirection="horizontal">
          <FrontSide>
            <Card
              sx={{ width: "60%", zIndex: "10", margin: "auto", height: "90%" }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{ fontWeight: "800", letterSpacing: "10px" }}
                id="skillHead"
              >
                {data[0].heading}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
                gutterBottom
              >
                {data[0].quote}
              </Typography>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  textAlign: "left",
                }}
              >
                <div style={{ width: "50%" }}>
                  {data[0].front[0].column1.map((i) => (
                    <li key={i.key}>
                      <Typography variant="h5" component="div">
                        {i.skill}
                        <Rating
                          name="read-only"
                          value={i.rate}
                          sx={{ margin: 4 }}
                          readOnly
                        />
                      </Typography>
                    </li>
                  ))}
                </div>
                <div style={{ width: "50%" }}>
                  {data[0].front[1].column2.map((i) => (
                    <li key={i.key}>
                      <Typography variant="h5" component="div">
                        {i.skill}
                        <Rating
                          name="read-only"
                          value={i.rate}
                          sx={{ margin: 4 }}
                          readOnly
                        />
                      </Typography>
                    </li>
                  ))}
                </div>
              </ul>
            </Card>
          </FrontSide>
          <BackSide>
            <Card
              sx={{
                width: "60%",
                zIndex: "10",
                margin: "auto",
                height: "90%",
              }}
              className="flip-back"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",

                  textAlign: "left",
                  height: "100%",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/2694344/pexels-photo-2694344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  style={{ width: "30%", height: "100%" }}
                />

                <div style={{ width: "70%" }}>
                  <ul>
                    {data[0].back.map((i) => (
                      <li key={i.key}>
                        <Typography variant="h5" component="div">
                          {i.skill}
                          <Rating
                            name="read-only"
                            value={i.rate}
                            sx={{ margin: 4 }}
                            readOnly
                          />
                        </Typography>
                      </li>
                    ))}

                    <li>
                      <Typography variant="h6" component="div">
                        and many more....
                      </Typography>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </BackSide>
        </Flippy>
      </Roll>
    </div>
  );
}
