import "../css/Navbarstyle.css";
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
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={50}>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "25px", md: "30px", lg: "40px" }}
          fontWeight="extrabold"
          cursor="pointer"
        >
          Vaibhav
        </Heading>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          {/* <Link
            className="nav-link home"
            activeclassName="active"
            onClick={handleClick}
            to="hero"
            spy={true}
            smooth={true}
            offset={-74}
            duration={50}
          >
            Home
          </Link> */}
          <a href="#hero" className="nav-link home"
            activeclassName="active"
            onClick={handleClick} >Home</a>
        </li>
        <li>
          {/* <Link
            className="nav-link about"
            activeclassName="active"
            onClick={handleClick}
            to="about"
            spy={true}
            smooth={true}
            offset={-74}
            duration={50}
          >
            About
          </Link> */}
          <a href="#about"  className="nav-link about"
            activeclassName="active"
            onClick={handleClick}>About</a>
        </li>
        <li>
          {/* <Link
            className="nav-link skills"
            activeclassName="active"
            onClick={handleClick}
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Skills
          </Link> */}
          <a href="#skills" className="nav-link skills"
            activeclassName="active"
            onClick={handleClick}>Skills</a>
        </li>
        <li>
          {/* <Link
            className="nav-link projects"
            activeclassName="active"
            onClick={handleClick}
            to="projects"
            spy={true}
            smooth={true}
            offset={-15}
            duration={50}
          >
            Project
          </Link> */}
          <a href="#projects"   className="nav-link projects"
            activeclassName="active"
            onClick={handleClick}>Projects</a>
        </li>
        <li>
          {/* <Link
            className="nav-link contact"
            activeclassName="active"
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={50}
          >
            Contact
          </Link> */}
          <a href="#contact" className="nav-link contact"
            activeclassName="active"
            onClick={handleClick}>Contact</a>
        </li>
        <li>
          
          <a
            className="nav-link resume"
            id="resume-button-1"
            href={Cv}
            download
            onClick={Resume}
          >
            Resume
          </a>
        </li>
      </ul>

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
