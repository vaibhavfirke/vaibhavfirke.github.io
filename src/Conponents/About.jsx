import "../css/AboutContentstyle.css";
import Profile from "../Assets/profile.jpg";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box class="about section" bg="#04293a"  id="about">
      <Box className="content-about" padding={25}>
        <Heading
          fontSize={{ base: "25px", md: "35px", lg: "45px" }}
          color="white"
          fontWeight="bolder"
        >
          About Me
        </Heading>
        <Image
          margin="auto"
          border="2px solid white"
          width={{ base: "110px", md: "160px", lg: "200px" }}
          height={{ base: "110px", md: "160px", lg: "200px" }}
          mt={15}
          borderRadius="50%"
          mb="20px"
          objectFit="contain"
          src={Profile}
          alt="profile"
        />
        <Text
          fontSize={{ base: "12px", md: "16px", lg: "18px" }}
          width={{ base: "90%", md: "70%", lg: "50%" }}
          margin="auto"
          mb="20px"
          fontWeight={500}
        >
          As a Full Stack Web Developer, passionate about building digital
          products using React, javaScript, HTML, CSS and Node.js that user likes to
          use and improve the user interactions and familiar to user.
        </Text>
        
      </Box>
      <Box className="profile"></Box>
    </Box>
  );
}
export default About;
