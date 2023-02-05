import "./Navbarstyle.css";
import React from "react";
import { Link} from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Heading } from "@chakra-ui/react";
import Cv from "../Assets/fw19_0245_Vaibhav_Firke_Resume.pdf"

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

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
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
          <Link activeclassName="active" onClick={handleClick} to="hero" spy={true} smooth={true} offset={-100} duration={50}>Home</Link>
        </li>
        <li>
          {" "}
          <Link activeclassName="active" onClick={handleClick} to="aboutme" spy={true} smooth={true} offset={-74} duration={50}>AboutMe</Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleClick} to="skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
        </li>
        <li>
          {" "}
          <Link activeclassName="active" onClick={handleClick} to="project" spy={true} smooth={true} offset={-15} duration={50}>Project</Link>
        </li>
        <li>
          {" "}
          <Link activeclassName="active" onClick={handleClick} to="contact" spy={true} smooth={true} offset={-100} duration={50}>Contact</Link>
        </li>
        <li>
          {" "}
          <a href={Cv} download onClick={()=>window.open("https://drive.google.com/file/d/1MH-MBO1kywMuTFdtHArHAMQk1FPak9nO/view?usp=share_link","_blank")}>
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
