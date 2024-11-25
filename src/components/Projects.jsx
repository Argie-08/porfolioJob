import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "primereact/button";
import Recipe from "../assets/recipe.png";
import Horizone from "../assets/horizone.png";
import RiderShield from "../assets/pic.png";
import "./Projects.css";

const Projects = ({ project }) => {
  function pureJs() {
    window.location.href = "https://eulakitchen.onrender.com";
  }
  function fullStack() {
    window.location.href = "https://ridershield-frontend.onrender.com";
  }
  function pureJsGit() {
    window.location.href =
      "https://github.com/Argie-08/kodego-mini-project-2.git";
  }
  function frontGit() {
    window.location.href = "https://github.com/Argie-08/ridershield.git";
  }
  function backGit() {
    window.location.href =
      "https://github.com/Argie-08/ridershield_backend.git";
  }
  return (
    <section ref={project} className="pt-5">
      <Container className="d-flex flex-column ">
        <Row className="mt-3">
          <Col className="d-flex flex-column align-items-center">
            <h2 className="project">PROJECTS</h2>
            <p className="projectIntroTxt">
              Here you will find some of the personal and bootcamp projects that
              I created with each project containing its live link and codes.
            </p>
          </Col>
        </Row>
        <Row className="d-flex gap-5 align-items-center projectSection">
          <Col xs={12} md={6} xl={6}>
            <img src={Recipe} className="recipeImg" />
          </Col>
          <Col xs={12} md={5} xl={5}>
            <div>
              <h4>Eula's Kitchen</h4>
              <p>
                Take-Up is a successful and awarded as best project focused up
                to ReactJs. Fetching APIs that populate the website for the
                individual that eager on recipe build.
              </p>
            </div>
            <div className="mt-3">
              <h4>Tools Used</h4>
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
                label="ReactJs"
                disabled
                severity="secondary"
                raised
                className="skillsBtn px-4 py-1"
              />
            </div>
            <div className="mt-3">
              <h4>See Live</h4>
              <div className="d-flex gap-4">
                <Button
                  label="Live Link"
                  className="py-2 contactBtn"
                  onClick={pureJs}
                />
                <Button
                  label="Github Code Link"
                  className="py-2"
                  onClick={pureJsGit}
                  link
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-flex gap-5 align-items-center ">
          <Col md={6} xl={6}>
            <img src={RiderShield} className="recipeImg" />
          </Col>
          <Col md={5} xl={5}>
            <div>
              <h4>Rider Shield</h4>
              <div>
                <p>
                  An online store displaying our digital world through
                  full-stack web development. Project ready for the global
                  entrepreneur on both the front and back ends.
                </p>
              </div>
            </div>
            <div className="mt-3">
              <h4>Tools Used</h4>
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
              <p>and all my skills declared above.</p>
            </div>
            <div className="mt-3">
              <h4>See Live</h4>
              <div className="d-flex gap-4">
                <Button
                  label="Live Link"
                  className="py-2 contactBtn"
                  onClick={fullStack}
                />
                <Button
                  label="Github Front-End"
                  className="py-2 gitcode"
                  onClick={frontGit}
                  link
                />
                <Button
                  label="Github Back-End"
                  className="py-2 gitcode"
                  onClick={backGit}
                  link
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
