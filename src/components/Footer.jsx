import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = (statement) => {
  function linkedIn() {
    window.location.href = "https://www.linkedin.com";
  }
  function gitHub() {
    window.location.href = "https://www.github.com";
  }
  function discord() {
    window.location.href = "https://www.discord.com";
  }
  function facebook() {
    window.location.href = "https://www.facebook.com";
  }
  return (
    <footer>
      <Container>
        <Row className="footerRow footerLine">
          <Col md={8} className="">
            <h4>ARGIE CANONAYON</h4>
            <p>{statement.statement}</p>
          </Col>
          <Col md={3} className="">
            <h4>SOCIAL MEDIA</h4>
            <div className="d-flex gap-3">
              <i className="pi pi-linkedin sideBarIcon" onClick={linkedIn}></i>
              <i className="pi pi-github sideBarIcon" onClick={gitHub}></i>
              <i className="pi pi-discord sideBarIcon" onClick={discord}></i>
              <i className="pi pi-facebook sideBarIcon" onClick={facebook}></i>
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
