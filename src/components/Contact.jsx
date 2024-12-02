import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Toast } from "primereact/toast";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import "./Contact.css";

const Contact = () => {
  const toast = useRef(null);
  const [progress, setProgress] = useState(0);
  const interval = useRef(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    e.preventDefault();
    show();
    setFullName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  const show = () => {
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

  return (
    <section id="contact" className="contactForm pt-5">
      <Container className="formContainer">
        <Row>
          <Col xs={12} className="d-flex flex-column align-items-center">
            <h2 className="project">Contact</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <div className="contactDetailContainer d-flex flex-column gap-3">
              <p>Let's Collaborate</p>
              <h4>
                Take Your Concept to Life with <span>Digital Reality</span>{" "}
              </h4>
              <div className="d-flex flex-column">
                <div className="d-flex w-100 align-items-center">
                  <div className="w-25 d-flex justify-content-center">
                    <i className="pi pi-check"></i>
                  </div>
                  <p className="w-75 m-0">
                    Tailored Solutions for Your Unique Needs
                  </p>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="w-25 d-flex justify-content-center">
                    <i className="pi pi-check"></i>
                  </div>
                  <p className="w-75 m-0">Responsive Design for All Devices</p>
                </div>
                <div className="d-flex w-100 align-items-center">
                  <div className="w-25 d-flex justify-content-center">
                    <i className="pi pi-check"></i>
                  </div>
                  <p className="w-75 m-0">Continous Support and Maintenance</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <form onSubmit={handleMessage}>
              <div className="contactDataDetails d-flex flex-column">
                <Row>
                  <Col xs={12} md={6}>
                    <FloatingLabel controlId="floatingName" label="Full Name">
                      <Form.Control
                        type="text"
                        placeholder="Full Name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      <span className="pi pi-user"></span>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={6}>
                    <FloatingLabel
                      controlId="floatingName"
                      label="Email Address"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="pi pi-envelope"></span>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <FloatingLabel
                      controlId="floatingName"
                      label="Phone Number"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <span className="pi pi-phone"></span>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={6}>
                    <FloatingLabel controlId="floatingName" label="Subject">
                      <Form.Control
                        type="text"
                        placeholder="Subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <span className="pi pi-pen-to-square"></span>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FloatingLabel controlId="floatingName" label="Message">
                      <Form.Control
                        as="textarea"
                        style={{ height: "200px" }}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Button type="submit">
                  Send Message <span className="pi pi-angle-right"></span>
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
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
    </section>
  );
};

export default Contact;
