import React from "react";
import Navbar from "./Navbar";
import "../css/home.style.css";
import Intro from "./Intro";
import { Box } from "@chakra-ui/react";
import AboutContent from "./About";
import SkillsContent from "./skillscontent";
import Git from "./git";
import Contacts from "./Contacts";
import ProjectContent from "./ProjectContent";
const Home = () => {
  return (
    <Box id="home"  bg="#013045" >
      <Navbar />
      <Box
        position="relative"
        height="auto"
        width="100%"
        border="1px slid green"
      >
      <Intro />
      </Box>
      <AboutContent />
      <SkillsContent />
      <ProjectContent />
      <Git />
      <Contacts />
    </Box>
  );
};

export default Home;
