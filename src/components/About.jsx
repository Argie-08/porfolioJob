import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../assets/ProfilePicture2.png";
import "./About.css";

const About = () => {
  return (
    <main className="d-flex align-items-center pt-5 aboutSection" id="about">
      <Container className="d-flex flex-column justify-content-around">
        <Row>
          <Col className="d-flex flex-column align-items-center textCenter aboutMarginBtm">
            <h2 className="about">About Me</h2>
          </Col>
        </Row>
        <Row className="">
          <Col xl={6}>
            <h3 className="mb-4 knowMargin">
              Motivated <span> Web Developer</span> and{" "}
              <span>Problem Solver</span>
            </h3>
            <div className="mb-4">
              <p>
                I am a committed web developer with knowledge building
                user-friendly and responsive websites. I can provide clients
                with high-quality solutions because of my strong education in
                both front-end and back-end programming and my exceptional
                problem-solving abilities.
              </p>
              <p>
                I'm open to job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>
            </div>
            <div className="toolsContainer d-flex flex-column gap-4 mb-4">
              <p>
                My Toolkits:
                <span>
                  <i className="pi pi-desktop"></i>
                </span>
              </p>
              <div>
                <Row>
                  <Col xs={12} className="mb-2">
                    <div className="d-flex align-items-center gap-3 toolkitContent">
                      <p>
                        <span>
                          <i className="pi pi-check"></i>
                        </span>
                        Front-End:
                      </p>
                      <p>HTML5, CSS3, Javascript, React</p>
                    </div>
                  </Col>
                  <Col xs={12} className="mb-2">
                    <div
                      className="d-flex align-items-center gap-3 toolkitContent"
                      style={{ width: "100%" }}
                    >
                      <p>
                        <span>
                          <i className="pi pi-check"></i>
                        </span>
                        Back-End:
                      </p>
                      <p>
                        PHP, Laravel, Codeigniter, MySQL, PgSQL, API Integration
                      </p>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div
                      className="d-flex align-items-center gap-3 toolkitContent"
                      style={{ width: "100%" }}
                    >
                      <p>
                        <span>
                          <i className="pi pi-check"></i>
                        </span>
                        UI Libraries:
                      </p>
                      <p>Bootstrap, React Bootstrap, PrimeReact, Ant Design</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="mt-3 onDesktop">
              <Row className="contactContainer">
                <Col xs={12} className="mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <i className="pi pi-envelope"> </i>
                    <div>
                      <p className="m-0">Email Me</p>
                      <p className="m-0">argiecanonayon1991@gmail.com</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="d-flex align-items-center gap-3">
                    <i className="pi pi-phone"> </i>
                    <div>
                      <p className="m-0">Call Me</p>
                      <p className="m-0">0997-267-7080</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={6} className="profileContainer">
            <img src={Profile} alt="" />
          </Col>
          <Col xs={12}>
            <div className="onMobile">
              <Row className="contactContainer">
                <Col xs={12} className="mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <i className="pi pi-envelope"> </i>
                    <div>
                      <p className="m-0">Email Me</p>
                      <p className="m-0">argiecanonayon1991@gmail.com</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="d-flex align-items-center gap-3">
                    <i className="pi pi-phone"> </i>
                    <div>
                      <p className="m-0">Call Me</p>
                      <p className="m-0">0997-267-7080</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default About;
