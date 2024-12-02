import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
  function linkedIn() {
    window.location.href =
      "https://www.linkedin.com/in/argie-canonayon-92305a216";
  }
  function gitHub() {
    window.location.href = "https://github.com/Argie-08";
  }
  function discord() {
    window.location.href = "https://discord.com/channels/argie_32989";
  }
  function facebook() {
    window.location.href = "https://web.facebook.com/argie.canonayon08";
  }
  return (
    <footer>
      <Container>
        <Row className="footerRow footerLine">
          <Col className="d-flex justify-content-between mobileFooterView">
            <h4>EULADEV</h4>
            <div>
              <p>Quick Links</p>
              <div className="d-flex gap-4">
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="services">Services</a>
                <a href="contact">Contact</a>
              </div>
            </div>
            <div>
              <h5>Social Media</h5>
              <div className="d-flex gap-3">
                <i
                  className="pi pi-linkedin sideBarIcon"
                  onClick={linkedIn}
                ></i>
                <i className="pi pi-github sideBarIcon" onClick={gitHub}></i>
                <i className="pi pi-discord sideBarIcon" onClick={discord}></i>
                <i
                  className="pi pi-facebook sideBarIcon"
                  onClick={facebook}
                ></i>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p className="copyright">
              &copy; Copyright 2024. Made by{" "}
              <b className="copyright">Argie Canonayon</b>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
