import { VerticalTimelineElement } from "react-vertical-timeline-component";
//import company_img from "../assets/img/tralexho-img.png";
import data from "../Data/experience";

const ExperienceContent = () => {
  return (
    <>
      {data[0].body.map((i) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
            color: "#fff",
            textAlign: "left",
          }}
          contentArrowStyle={{
            borderRight:
              "7px solid linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
            color: "red",
          }}
          date={i.time}
          iconStyle={{
            background:
              "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
            color: "blue",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <h1 className="vertical-timeline-element-title">{i.company}</h1>
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#F2B356" }}
              >
                {i.post}
              </h3>
              <h6 className="vertical-timeline-element-subtitle">
                (Tech Stack - {i.techstack})
              </h6>
              <p style={{ width: "100%", textAlign: "left" }}>{i.body}</p>
            </div>
            <img src={i.img} style={{ height: "8vh", width: "15vw" }}></img>
          </div>
        </VerticalTimelineElement>
      ))}
    </>
  );
};

export default ExperienceContent;
