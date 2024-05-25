import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const home = useRef();
  const about = useRef();
  const project = useRef();
  const contact = useRef();
  const [statement, setStatement] = useState("");

  function handleHome() {
    home.current?.scrollIntoView.offsetTop({ behavior: "smooth" });
  }
  function handleAbout() {
    about.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleProject() {
    project.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleProjects() {
    project.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleContact() {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleContacts() {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Navigation
        about={handleAbout}
        project={handleProject}
        contact={handleContact}
        home={handleHome}
      />
      <Hero home={home} projects={handleProjects} setStatement={setStatement} />
      <About about={about} contact={handleContacts} />
      <Projects project={project} />
      <Contact contact={contact} />
      <Footer statement={statement} />
    </>
  );
};

export default App;
