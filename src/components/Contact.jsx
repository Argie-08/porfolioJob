import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import "./Contact.css";

import { Toast } from "primereact/toast";

const Contact = ({ contact }) => {
  return (
    <section className="contactForm pt-5" ref={contact}>
      <Container className="formContainer">
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <h2 className=" project">CONTACT</h2>
            <p>
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <form
              action="https://formsubmit.co/dfec995487b71e4751c0eb323933f8f8"
              method="POST"
            >
              <IconField iconPosition="left">
                <InputIcon className="pi pi-file-edit inputIcon"> </InputIcon>
                <InputText
                  v-model="value1"
                  placeholder="Enter Your Name"
                  className="inputForm"
                  type="text"
                  required
                  name="name"
                />
              </IconField>
              <IconField iconPosition="left">
                <InputIcon className="pi pi-at"> </InputIcon>
                <InputText
                  v-model="value1"
                  placeholder="Enter Your Email"
                  className="inputForm"
                  type="email"
                  required
                  name="email"
                />
              </IconField>
              <IconField iconPosition="left">
                <InputTextarea
                  rows={10}
                  cols={30}
                  className="inputForm"
                  placeholder="Enter Your Message"
                  required
                  name="message"
                />
              </IconField>
              <div className="d-flex justify-content-end">
                <Button
                  label="SUBMIT"
                  className=" py-2 contactBtn"
                  type="submit"
                ></Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
