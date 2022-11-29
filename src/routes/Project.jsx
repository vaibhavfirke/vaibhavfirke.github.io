import { Box } from "@chakra-ui/react";
import React from "react";

import ProjectContent from "../Conponents/ProjectContent";





const Project = () => {
  
  return (
    <Box bg="#04293a" height="100vh">
  
      <Box position="relative" bg="#013045" width="100%" height="auto">

      <ProjectContent/>
      
      </Box>
    </Box>
  );
};

export default Project;
