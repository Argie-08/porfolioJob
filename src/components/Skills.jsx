import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactIcon from "../assets/react.png";
import HtmlIcon from "../assets/html.png";
import CssIcon from "../assets/css.png";
import JsIcon from "../assets/js.png";
import LaravelIcon from "../assets/laravel.png";
import "../components/Skills.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const percentages = [90, 90, 80, 80, 70];
  const [animatedValues, setAnimatedValues] = useState(
    Array(percentages.length).fill(0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 5000;
    const intervals = percentages.map((target, index) => {
      const increment = target / (duration / 10);
      let current = 0;
      return setInterval(() => {
        current = Math.min(current + increment, target);
        setAnimatedValues((prev) =>
          prev.map((val, i) => (i === index ? Math.floor(current) : val))
        );
        if (current >= target) clearInterval(intervals[index]);
      }, 10);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  const skillIcons = [HtmlIcon, CssIcon, JsIcon, ReactIcon, LaravelIcon];

  return (
    <div className="skills" id="skills">
      <Container>
        <Row>
          <Col
            xs={12}
            className="d-flex flex-column align-items-center textCenter aboutMarginBtm"
          >
            <h2 className="about">My Skills</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div ref={sectionRef} className="d-flex gap-2 mobileHtml">
              {skillIcons.map((icon, index) => (
                <div className="skillsContainer" key={index}>
                  <img src={icon} alt="" />
                  <div>
                    <p>
                      {animatedValues[index]}
                      <span>%</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h3 className="mb-4 knowMargin">
              Expertise in <span> Web Development</span>
            </h3>
            <p>
              My field of focus as a web developer is employing modern
              technologies to develop user-friendly, responsive websites. I can
              develop full web solutions considering I have both front-end and
              back-end development skills.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
