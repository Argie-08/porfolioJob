import { Menubar } from "primereact/menubar";
import Prof from "../assets/canonayon.png";
import "./Navigation.css";
const Navigation = ({ about, project, contact, home }) => {
  const items = [
    {
      label: "HOME",
      command: () => {
        home();
      },
    },
    {
      label: "ABOUT",
      command: () => {
        about();
      },
    },
    {
      label: "PROJECTS",
      command: () => {
        project();
      },
    },
    {
      label: "CONTACT",
      command: () => {
        contact();
      },
    },
  ];

  const start = (
    <div className="d-flex align-items-center gap-3 nameIcon">
      <img alt="logo" src={Prof} height="55" className="mr-2"></img>
      <p className="m-0">ARGIE CANONAYON</p>
    </div>
  );

  return (
    <div className="navTop">
      <Menubar
        model={items}
        start={start}
        className="menubar d-flex align-items-center justify-content-between"
      />
    </div>
  );
};

export default Navigation;
