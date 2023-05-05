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
      <Link to="home" spy={true} smooth={true} offset={-100} duration={50}>
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
          <Link
            className="nav-link home"
            activeclassName="active"
            onClick={handleClick}
            to="home"
            spy={true}
            smooth={true}
            offset={-74}
            duration={50}
          >
            Home
          </Link>
         
        </li>
        <li>
          <Link
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
          </Link>
          
        </li>
        <li>
          <Link
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
          </Link>
         
        </li>
        <li>
          <Link
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
          </Link>
         
        </li>
        <li>
          <Link
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
          </Link>
          
        </li>
        <button id="resume-button-1">
          <a
            className="nav-link resume"
            id="resume-link-1"
            href={Cv}
            download
            onClick={Resume}
          >
            Resume
          </a>
        </button>
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
