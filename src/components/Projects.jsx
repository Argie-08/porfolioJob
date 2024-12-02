import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "primereact/button";
import Recipe from "../assets/recipe.png";
import RiderShield from "../assets/ridershield.png";
import "./Projects.css";

const Projects = () => {
  function pureJs() {
    window.open("https://eulakitchen.onrender.com", "_blank");
  }
  function fullStack() {
    window.open("https://ridershield-frontend.onrender.com", "_blank");
  }
  function pureJsGit() {
    window.open(
      "https://github.com/Argie-08/kodego-mini-project-2.git",
      "_blank"
    );
  }
  function frontGit() {
    window.open("https://github.com/Argie-08/ridershield.git", "_blank");
  }
  function backGit() {
    window.open(
      "https://github.com/Argie-08/ridershield_backend.git",
      "_blank"
    );
  }
  return (
    <section id="projects" className="pt-5">
      <Container className="d-flex flex-column ">
        <Row className="mt-3">
          <Col className="d-flex flex-column align-items-center">
            <h2 className="project">Projects</h2>
            <p className="projectIntroTxt">
              Explore my latest works and projects that I have done.
            </p>
          </Col>
        </Row>
        <Row className="d-flex align-items-center projectSection">
          <Col xs={12} md={6} xl={6}>
            <img src={Recipe} className="recipeImg" />
          </Col>
          <Col xs={12} md={5} xl={5}>
            <div>
              <h4>Eula's Kitchen</h4>
              <p>
                Awarded as best project on my bootcamp that focused up to
                ReactJs. API integration that populate the website for the
                individual that eager on recipe build.
              </p>
            </div>
            <div className="mt-3">
              <h5>Tools Used</h5>
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
              <h5>See Live</h5>
              <div className="d-flex gap-4">
                <Button
                  label="Live Link"
                  className="py-2 contactBtn"
                  onClick={pureJs}
                />
                <Button
                  label="Github Code Link"
                  className="py-2 linkBtn"
                  onClick={pureJsGit}
                  link
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-center projectSection">
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
              <h5>Tools Used</h5>
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
              <h5>See Live</h5>
              <div className="d-flex gap-4">
                <Button
                  label="Live Link"
                  className="py-2 contactBtn"
                  onClick={fullStack}
                />
                <Button
                  label="Github Front-End"
                  className="py-2 gitcode linkBtn"
                  onClick={frontGit}
                  link
                />
                <Button
                  label="Github Back-End"
                  className="py-2 gitcode linkBtn"
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
