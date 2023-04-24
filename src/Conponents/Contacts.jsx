import { Box, Heading, Text, Button } from "@chakra-ui/react";
import "../css/Contactstyle.css";
import Call from "../Assets/call.png";
import Email from "../Assets/email.png";
import Github from "../Assets/github.png";
import Linkdin from "../Assets/linkdin.png";
import Hackrank from "../Assets/hackrank.png";
import Location from "../Assets/location.png";
import Resume from "../Assets/resume.png";
import Cv from "../Assets/fw19_0245_Vaibhav_Firke_Resume.pdf";
import { FiDownload } from "react-icons/fi";

function Contact() {
  return (
    <Box className="contact-main" id="contact">
      <Box className="contact-child">
        <Heading
          mb="20px"
          color="white"
          fontWeight="bolder"
          fontSize={{ base: "20px", md: "30px", lg: "40px" }}
        >
          {" "}
          Contact Me
        </Heading>
        <Box className="info">
          <Box
            display="flex"
            gap="20px"
            justifyContent="start"
            mb="20px"
            mt="1px"
          >
            <img
              width="40px"
              height="40px"
              border="1px solid red"
              bg="white"
              src={Email}
              alt="Email"
            />
            <Text id="contact-email"
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              textAlign="center"
            >
              {" "}
              firkevaibahv11@gmail.com
            </Text>
          </Box>
          <Box display="flex" gap="20px" justifyContent="start" mb="20px">
            <img
              width="40px"
              height="40px"
              border="1px solid red"
              bg="white"
              src={Call}
              alt="Email"
            />
            <Text id="contact-phone"
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              textAlign="center"
            >
              {" "}
              +91 7028495853
            </Text>
          </Box>
          <Box display="flex" gap="20px" justifyContent="start" mb="20px">
            <img
              width="40px"
              height="40px"
              border="1px solid red"
              bg="white"
              src={Location}
              alt="Email"
            />
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              textAlign="center"
            >
              Nagpur | Maharashtra
            </Text>
          </Box>
          <Box display="flex" gap="20px" justifyContent="start" mb="20px">
            <Box bg="white" borderRadius={10}>
              <img
                width="40px"
                height="40px"
                border="1px solid red"
                bg="white"
                src={Resume}
                alt="Resume"
              />
            </Box>
            <a
              href={Cv}
              download
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1MH-MBO1kywMuTFdtHArHAMQk1FPak9nO/view?usp=share_link",
                  "_blank"
                )
              }
            >
              <Button bg="yellow" color="black">
                Resume
              </Button>
            </a>
            <a href={Cv} download>
              <Button bg="yellow">
                <FiDownload style={{ color: "black", width: "100%" }} />
              </Button>
            </a>
          </Box>

          <Box display="flex" gap="20px" justifyContent="center">
            <a id="contact-github" href="https://github.com/vaibhavfirke" target="_blank">
              <img
                width="40px"
                height="40px"
                border="1px solid red"
                bg="white"
                src={Github}
                alt="github"
              />
            </a>
            <a id="contact-linkedin"
              href="https://www.linkedin.com/in/vaibhav-firke/"
              target="_blank"
            >
              {" "}
              <img
                width="40px"
                height="40px"
                border="1px solid red"
                bg="white"
                src={Linkdin}
                alt="linkdin"
              />
            </a>
            <a href="https://www.hackerrank.com/firkevaibhav11" target="_blank">
              {" "}
              <img
                width="40px"
                height="40px"
                border="1px solid red"
                bg="white"
                src={Hackrank}
                alt="hackrank"
              />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Contact;
