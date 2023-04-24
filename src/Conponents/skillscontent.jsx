import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "../css/skillsstyle.css";
import JavaScript from "../Assets/javascript.png";
import Html from "../Assets/html.png";
import Css from "../Assets/css.png";
import Reacti from "../Assets/react.png";
import Chakra from "../Assets/chakra.png";
import Material from "../Assets/material.png";
//back end-------------
import Nodejs from "../Assets/nodejs.png";
import Mongodb from "../Assets/mongo.png";
import Express from "../Assets/express.png";
//tools
import Git from "../Assets/git.png";
import Github from "../Assets/github.png";
import Vscode from "../Assets/vscode.png";

function Skills() {
  return (
    <Box className="skill-main" id="skills">
      <Box className="skill-child">
        <Heading
          mb="30px"
          color="white"
          fontWeight="bolder"
          fontSize={{ base: "25px", md: "35px", lg: "45px" }}
        >
          Technical Skills
        </Heading>

        <Box className="techincal-skills">
          <Box className="border">
            <Heading fontSize={{ base: "16px", md: "23px", lg: "30px" }}>
              Front-End
            </Heading>
            <Box className="skills-card" >
              <Box>
                <Image 
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Html}
                  alt="html"
                />{" "}
                <br />
                <Text className="skills-card-name">HTML</Text>
              </Box>
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Css}
                  alt="css"
                />
                <br />
                <Text className="skills-card-name">CSS</Text>
              </Box>
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={JavaScript}
                  alt="javascript"
                />
                <br />
                <Text className="skills-card-name">JavaScript</Text>
              </Box>
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Reacti}
                  alt="react"
                />
                <br />
                <Text className="skills-card-name">React</Text>
              </Box>
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Chakra}
                  alt="chakra ui"
                />
                <br />
                <Text className="skills-card-name">Chakra ui</Text>
              </Box>
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Material}
                  alt="Material ui"
                />
                <br />
                <Text className="skills-card-name">Material ui</Text>
              </Box>
            </Box>
          </Box>
          <Box className="border">
            <Heading fontSize={{ base: "16px", md: "23px", lg: "30px" }}>
              Back-End
            </Heading>
            <Box className="skills-card" >
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Nodejs}
                  alt="react"
                />
                <br />
                <Text className="skills-card-name">Nodejs</Text>
              </Box>
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Express}
                  alt="express"
                />
                <br />
                <Text className="skills-card-name">Express</Text>
              </Box>
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Mongodb}
                  alt="Mongodb"
                />
                <br />
                <Text className="skills-card-name">Mongodb</Text>
              </Box>
            </Box>
          </Box>
          <Box className="border">
            <Heading fontSize={{ base: "16px", md: "23px", lg: "30px" }}>
              Tools
            </Heading>
            <Box className="skills-card">
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Git}
                  alt="git"
                />
                <br />
                <Text className="skills-card-name">Git</Text>
              </Box>
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Github}
                  alt="Github"
                />
                <br />
                <Text className="skills-card-name">Github</Text>
              </Box>
              <Box>
                <Image
                className="skills-card-img"
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Vscode}
                  alt="Vs code"
                />
                <br />
                <Text className="skills-card-name">Vs code</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Skills;
