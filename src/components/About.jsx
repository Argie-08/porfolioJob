import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "primereact/button";
import "./About.css";

const About = ({ about, contact }) => {
  return (
    <main className="d-flex align-items-center pt-5" ref={about}>
      <Container className="d-flex flex-column justify-content-around">
        <Row>
          <Col className="d-flex flex-column align-items-center textCenter aboutMarginBtm">
            <h2 className="about">ABOUT ME</h2>
            <p>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of web development.
            </p>
          </Col>
        </Row>
        <Row className="d-flex gap-5">
          <Col xl={6}>
            <h3 className="mb-4 knowMargin">Get to know me!</h3>
            <p>
              I'm a <b>Full Stack Web Developer</b> building and managing the
              Front-end and Back-end of Websites and Web Applications that leads
              to the success of the overall product. Check out some of my work
              in the <b>Projects</b> section.
            </p>
            <p>
              I got this technical skills on my bootcamp and being awarded as
              top coder on <b>Web Development</b> that showcase my skills on IT
              world. I keep on pushing myself on my continous learning where I
              regularly update my capabilities related to Web Development and
              Programming
            </p>
            <p>
              I'm open to <b>Job</b> opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don't hesitate to <b>contact</b> me.
            </p>
            <Button
              label="CONTACT"
              className="py-3 contactBtn mt-3"
              onClick={contact}
            ></Button>
          </Col>
          <Col xl={5}>
            <h3 className="mb-4">My Skills</h3>
            <div className="buttonAlign">
              <Button
                label="HTML"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="CSS"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="Javascript"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="React"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="PHP"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="Github"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="Responsive Design"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="Laravel"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="MySQL"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="React Bootstrap"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="PrimeReact"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="Ant Design"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="Postman"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="Photoshop"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
              <Button
                label="Figma"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default About;
