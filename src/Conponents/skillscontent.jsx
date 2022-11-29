import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "./skillsstyle.css";
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

function SkillsContent() {
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
            <Box className="front-end">
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Html}
                  alt="html"
                />{" "}
                <br />
                <Text>HTML</Text>
              </Box>
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Css}
                  alt="css"
                />
                <br />
                <Text>CSS</Text>
              </Box>
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={JavaScript}
                  alt="javascript"
                />
                <br />
                <Text>JavaScript</Text>
              </Box>
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Reacti}
                  alt="react"
                />
                <br />
                <Text>React</Text>
              </Box>
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Chakra}
                  alt="chakra ui"
                />
                <br />
                <Text>Chakra ui</Text>
              </Box>
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Material}
                  alt="Material ui"
                />
                <br />
                <Text>Material ui</Text>
              </Box>
            </Box>
          </Box>
          <Box className="border">
            <Heading fontSize={{ base: "16px", md: "23px", lg: "30px" }}>
              Back-End
            </Heading>
            <Box className="front-end">
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Nodejs}
                  alt="react"
                />
                <br />
                <Text>Nodejs</Text>
              </Box>
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Express}
                  alt="express"
                />
                <br />
                <Text>Express</Text>
              </Box>
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Mongodb}
                  alt="Mongodb"
                />
                <br />
                <Text>Mongodb</Text>
              </Box>
            </Box>
          </Box>
          <Box className="border">
            <Heading fontSize={{ base: "16px", md: "23px", lg: "30px" }}>
              Tools
            </Heading>
            <Box className="front-end">
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Git}
                  alt="git"
                />
                <br />
                <Text>Git</Text>
              </Box>
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Github}
                  alt="Github"
                />
                <br />
                <Text>Github</Text>
              </Box>
              <Box>
                <Image
                  margin="auto"
                  width={{ base: "35px", md: "40px", lg: "60px" }}
                  height={{ base: "35px", md: "40px", lg: "60px" }}
                  src={Vscode}
                  alt="Vs code"
                />
                <br />
                <Text>Vs code</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default SkillsContent;
