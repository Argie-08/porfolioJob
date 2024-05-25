import { useEffect } from "react";
import { Button } from "primereact/button";
import "./Hero.css";

const Hero = ({ home, projects, setStatement }) => {
  useEffect(() => {
    const first = document.getElementById("heroStatement");
    setStatement(first.innerText);
    return () => {};
  }, []);

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
    <main className="heroMain">
      <div className="text-center d-flex flex-column gap-5 align-items-center heroH2">
        <h2 ref={home}>HEY, I'M ARGIE CANONAYON</h2>
        <div>
          <p id="heroStatement">
            A Result-Oriented Full Stack Web Developer building and managing
            Websites and Web Applications that leads to the success of the
            overall products.
          </p>
          <p>A Philippine based Web Developer.</p>
        </div>

        <Button
          label="PROJECTS"
          className=" py-3 heroBtn"
          onClick={projects}
        ></Button>
      </div>

      <div className="reachAccount d-flex flex-column gap-4">
        <i className="pi pi-linkedin sideBarIcon" onClick={linkedIn}></i>
        <i className="pi pi-github sideBarIcon" onClick={gitHub}></i>
        <i className="pi pi-discord sideBarIcon" onClick={discord}></i>
        <i className="pi pi-facebook sideBarIcon" onClick={facebook}></i>
      </div>
    </main>
  );
};

export default Hero;
