import { Container, Row, Col } from "react-bootstrap";
import ExperienceTimeline from "./ExperienceTimeline";
import data from "../Data/experience";
import "./Experience.css";
const Experience = () => {
  return (
    <section id="experiences">
      <Container style={{ color: "white", marginBottom: "150px" }}>
        <Row>
          <Col size={2}>
            <h2 id="heading">{data[0].heading}</h2>
            <p>My experience till now.</p>
            <ExperienceTimeline />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
