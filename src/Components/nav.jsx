import "../css/nav.style.css";
import React from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Heading } from "@chakra-ui/react";
import Cv from "../Assets/fw19_0245_Vaibhav_Firke_Resume.pdf";

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const [color, setColor] = React.useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const handleClick = () => {
    setClick(!click);
  };
  const Resume = () => {
    window.open(
      "https://drive.google.com/file/d/1MH-MBO1kywMuTFdtHArHAMQk1FPak9nO/view?usp=share_link",
      "_blank"
    );
  };
  return (
    <div className={color ? "header header-bg" : "header"} id="nav-menu">
      <a href="#home">
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "25px", md: "30px", lg: "40px" }}
          fontWeight="extrabold"
          cursor="pointer"
        >
          Vaibhav
        </Heading>
      </a>

      <div className={click ? "nav-menuu active" : "nav-menuu"}>
        <a href="#home" className="nav-link home">
          Home
        </a>

        <a href="#about" className="nav-link about">
          About
        </a>

        <a href="#skills" className="nav-link skills">
          Skills
        </a>

        <a href="#projects" className="nav-link projects">
          Projects
        </a>

        <a href="#contact" className="nav-link contact">
          Contact
        </a>

        <a
          className="nav-link resume"
          id="resume-link-1"
          href={Cv}
          download
          onClick={Resume}
        >
          Resume
        </a>
      </div>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
export default Navbar;
