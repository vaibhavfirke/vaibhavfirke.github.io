import "../css/git.style.css";
import { Box, Heading } from "@chakra-ui/react";
import Calender from "./calender";
import Stats from "./states";
// import GitState from "../Assets/gitstates.png"
function Git() {
  return (
    <Box className="head">
      <Box className="main">
        <Heading
          mb="2%"
          color="white"
          fontWeight="bolder"
          fontSize={{ base: "25px", md: "35px", lg: "45px" }}
        >
          Days|Code
        </Heading>
        <Box width="100%">
          <Calender />
          <Stats width="100%"/>
        </Box>
        
      </Box>
    </Box>
  );
}
export default Git;
