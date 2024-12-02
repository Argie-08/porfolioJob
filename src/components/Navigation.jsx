import { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Toast } from "primereact/toast";
import { ProgressBar } from "primereact/progressbar";
import "primeicons/primeicons.css";
import "./Navigation.css";

const Navigation = () => {
  const toggleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(false);
  const [show, setShow] = useState(false);
  const [navCss, setNavCss] = useState(false);

  const toast = useRef(null);
  const [progress, setProgress] = useState(0);
  const interval = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeLink, setActiveLink] = useState("home");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleContent = () => {
    setActiveIndex((prevIndex) => !prevIndex);
  };

  const changeColor = () => {
    if (window.scrollY >= 70) {
      setNavCss(true);
    } else {
      setNavCss(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleAppointment = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    handleClose();
    shown();
  };

  const shown = () => {
    if (!interval.current) {
      toast.current.show({
        summary: "Sending your message...",
      });

      setProgress(0);

      if (interval.current) {
        clearInterval(interval.current);
      }

      interval.current = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 20;

          if (newProgress >= 100) {
            clearInterval(interval.current);
            interval.current = null;

            setTimeout(() => {
              toast.current.clear();
            }, 3000);

            return 100;
          }

          return newProgress;
        });
      }, 1000);
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveLink(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const scrollToSectionMobile = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    toggleContent();
  };

  return (
    <div
      className={
        navCss ? "navbarContainer navbarContainerScroll" : "navbarContainer"
      }
    >
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand onClick={() => scrollToSection("home")}>
            EULADEV
          </Navbar.Brand>
          <Navbar.Toggle ref={toggleRef} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex gap-5 linkedA">
              <Nav.Link
                onClick={() => scrollToSection("home")}
                style={{ color: activeLink === "home" ? "#81c700" : "#ffffff" }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection("about")}
                style={{
                  color: activeLink === "about" ? "#81c700" : "#ffffff",
                }}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection("skills")}
                style={{
                  color: activeLink === "skills" ? "#81c700" : "#ffffff",
                }}
              >
                SKILLS
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection("projects")}
                style={{
                  color: activeLink === "projects" ? "#81c700" : "#ffffff",
                }}
              >
                PROJECTS
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection("contact")}
                style={{
                  color: activeLink === "contact" ? "#81c700" : "#ffffff",
                }}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex align-items-center gap-3">
            <span
              aria-controls="basic-navbar-nav"
              className="pi pi-align-justify"
              aria-label="Toggle navigation"
              onClick={toggleContent}
            ></span>
            <span className="pi pi-align-right" onClick={handleShow}></span>
          </div>
        </Container>
      </Navbar>
      <div className="dropdown-content">
        {activeIndex && (
          <div className="dropDownContainer">
            <p onClick={() => scrollToSectionMobile("home")}>HOME</p>
            <p onClick={() => scrollToSectionMobile("about")}>ABOUT</p>
            <p onClick={() => scrollToSectionMobile("skills")}>SKILLS</p>
            <p onClick={() => scrollToSectionMobile("projects")}>PROJECTS</p>
            <p onClick={() => scrollToSectionMobile("contact")}>CONTACT</p>
          </div>
        )}
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={handleAppointment}>
            <div className="sidebarContainer">
              <h3>Get Appointment</h3>
              <FloatingLabel controlId="floatingName" label="Name">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingEmail"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
                <Form.Control type="text" placeholder="Email" required />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingMessage"
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
                <Form.Control
                  as="textarea"
                  style={{ height: "200px" }}
                  placeholder="Message"
                />
              </FloatingLabel>
              <button className="sidebarBtn" type="submit">
                SUBMIT NOW
              </button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
      <Toast
        ref={toast}
        content={({ message }) => (
          <section
            className="flex p-3 gap-3 w-full bg-black-alpha-90 shadow-2 fadeindown"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-cloud-upload text-primary-500 text-2xl"></i>
            <div className="flex flex-column gap-3 w-full">
              <p className="m-0 font-semibold text-base text-white">
                {message.summary}
              </p>
              <p className="m-0 text-base text-700">{message.detail}</p>
              <div className="flex flex-column gap-2">
                <ProgressBar value={progress} showValue="false"></ProgressBar>
                <label className="text-right text-xs text-white">
                  {progress}% progress...
                </label>
              </div>
            </div>
          </section>
        )}
      ></Toast>
    </div>
  );
};

export default Navigation;
