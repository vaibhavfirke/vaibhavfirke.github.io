import React from "react";
import Navbar from "../Conponents/Navbar";
// import HeroImg from "../Conponents/HeroImg";
import "../Conponents/home.style.css";
import Temp from "../Conponents/temp";
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
      <Temp />
      </Box>
        <AboutContent />
        <SkillsContent />
       <ProjectContent/>
      {/* 
      <Box position="relative" height="auto" width="100%" border="1px slid red" >
      </Box>
      <Box position="relative" height="auto" width="100%" border="1px slid blue" >
      </Box>
      <Box position="relative" height="auto" width="100%" border="1px slid pink" >
      </Box>
      <Box position="relative" height="auto" width="100%" border="1px slid green">
    </Box> */}
    <Git />
       <Contacts/>
    </Box>
  );
};

export default Home;
