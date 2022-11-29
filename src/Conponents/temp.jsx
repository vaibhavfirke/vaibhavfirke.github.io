import "./Temp.style.css";
import Cv from "../Assets/cv.pdf";
import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
function Temp() {
  return (
    <Box className="home" id="hero">
      <Box className="mask">
        <Box>
          <Heading
            fontSize={{ base: "14px", md: "18px", lg: "30px" }}
            mb="10px"
          >
            Hey 👋...
          </Heading>
          <Heading
            fontSize={{ base: "14px", md: "18px", lg: "30px" }}
            mb="20px"
          >
            I'm Vaibhav
          </Heading>
        </Box>
        <Heading fontSize={{ base: "14px", md: "18px", lg: "30px" }} mb="20px">
          Full Stack Web Developer
        </Heading>
        <Text
          fontSize={{ base: "14px", md: "15px", lg: "17px" }}
          mb="20px"
          // w={{ base: "200px", md: "360px", lg: "490px" }}
          w="70%"
        >
          Solution-driven Web Developer adapts contributing to a highly
          collaborative work environment and finding solutions. Proven
          experience developing consumer-focused Web- Site using HTML | CSS |
          JavaScript | Node.js and React good knowledge of the best practice for
          web design, and user expenses.
        </Text>

        <a
          href="https://drive.google.com/file/d/1MH-MBO1kywMuTFdtHArHAMQk1FPak9nO/view?usp=share_link"
          target="_blank"
          rel="rel"
        >
          <Button bg="yellow" color="black">
            Resume
          </Button>
        </a> <a href={Cv} download>
          <Button bg="yellow"><FiDownload style={{color:"black" ,width:"100%"}}/></Button>
          
        </a>
      
      </Box>
    </Box>
  );
}
export default Temp;
