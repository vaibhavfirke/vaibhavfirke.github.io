import React from "react";
import Navbar from "../Conponents/Navbar";
import "../Conponents/home.style.css"
import Intro from "../Conponents/Intro";
import { Box } from "@chakra-ui/react";
import AboutContent from "../Conponents/AboutContent";
import SkillsContent from "../Conponents/skillscontent";
import Git from "../Conponents/git";
import Contacts from "../Conponents/Contacts";
import ProjectContent from "../Conponents/ProjectContent";
const Home = () => {
  return (
    <Box className="main-home" bg="#013045">
      <Navbar />
      
      <Box position="relative" height="auto" width="100%" border="1px slid green">
      <Intro/>
      </Box>
        <AboutContent />
        <SkillsContent />
       <ProjectContent/>
      <Git />
       <Contacts/>
    </Box>
  );
};

export default Home;
