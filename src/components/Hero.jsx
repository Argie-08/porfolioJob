import Resume from "../assets/Resume - Argie Canonayon.pdf";
import "./Hero.css";

const Hero = () => {
  function linkedIn() {
    window.open(
      "https://www.linkedin.com/in/argie-canonayon-92305a216",
      "_blank"
    );
  }
  function gitHub() {
    window.open("https://github.com/Argie-08", "_blank");
  }
  function discord() {
    window.open("https://discord.com/channels/argie_32989", "_blank");
  }
  function facebook() {
    window.open("https://web.facebook.com/argie.canonayon08", "_blank");
  }

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Resume - Argie Canonayon.pdf";
    link.click();
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="heroMain" id="home">
      <div className="text-center d-flex flex-column gap-5 align-items-center heroH2">
        <h2>
          <span>HEY, I'M </span>ARGIE CANONAYON
        </h2>
        <div>
          <p id="heroStatement">
            A Result-Oriented Full Stack Web Developer building and managing
            Websites that leads to the success of the overall products. I craft
            engaging digital experiences by combining creative design with
            clean, efficient code. Committed to delivering high-quality,
            user-centric web solutions that make an impact.
          </p>
        </div>
        <div className="hiringSection">
          <button onClick={() => scrollToSection("contact")}>
            Hire Me
            <span>
              <i className="pi pi-angle-right"></i>
            </span>
          </button>
          <div className="d-flex gap-2" onClick={downloadResume}>
            <p>Download Resume</p>
            <span>
              <i className="pi pi-angle-right"></i>
            </span>
          </div>
        </div>
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
