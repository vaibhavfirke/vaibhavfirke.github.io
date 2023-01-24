import "./ProjectContentstyle.css";

import Reactimg from "../Assets/react.png";
import Javascrpet from "../Assets/javascript.png";
import Html from "../Assets/html.png";
import Bootstrap from "../Assets/bootstrap.png";
import Css from "../Assets/css.png";
import Gearbest from "../Assets/gearbest.png";
import Niftypm from "../Assets/niftypm.png";
import Chakraui from "../Assets/chakra.jpg";
import Materialui from "../Assets/material.png";
import Gusto from "../Assets/gusto.png"
import Menbuy from "../Assets/menbuy.png"
import { useState } from "react";
import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";

const projects = [
 
  {
    id: 1,
    image: "https://i.postimg.cc/kg9wZRNV/Screenshot-74.png",
    projectName: "Digimart",
    description:
      "Digimart is basically an e-commerce website where users can buy products such as mobiles, laptops, cameras, telivisions and all other tech products. They sell their product both on shops as well as on website. This was a Group project built by our team member in 5 days.",
    features:
      "User can login, signup, cart, product pages, and buy the products ",
    tech: [Javascrpet, Html, Css,Reactimg,Chakraui],
    sorce: "https://github.com/Santoshdandin/noxious-insurance-3324",
    live: "https://frontend-ankur9900.vercel.app/",
  },
  {
    id: 2,
    image: Niftypm,
    projectName: "NiftyPm Clone",
    description:
      "Niftypm is a project management website where we can manage our project and daily tasks related to the project and assign a task to our teammates. ",
    features: "User can login, signup, home page and other ",
    tech: [Javascrpet, Html, Css, Reactimg, Chakraui, Materialui],
    sorce:
      "https://github.com/vaibhavfirke/awesome-market-801/tree/main/niftypm",
    live: "https://vaibhav-firke-makes-great-sites-91714.netlify.app/",
  },
  {
    id: 3,
    image: Gusto,
    projectName: "Gusto Clone",
    description:
      "Gusto is payrol web site where you can mantain the employ details and calculate ther salary payroll and ther wages. it team work project projects that done by the five members done with in a five Days.",
    features: "User can login, signup, home page and other ",
    tech: [Javascrpet, Html, Css,Bootstrap],
    sorce:
      "https://github.com/Afzhal-ahmed-s/Gusto-website-clone",
    live: "https://chipper-sprinkles-f014ed.netlify.app/",
  },
  {
    id: 4,
    image: Menbuy,
    projectName: "Meanbuy Clone",
    description:
      "Meanbuy is a E-commerce shoping web site where you can Buy any kind of prodict. It is a collabrativ project that done by Five Team membber withen a five daya's. ",
    features: "User can login, signup, home page and other ",
    tech: [Javascrpet, Html, Css],
    sorce:
      "https://github.com/282Manoj/Meanbuy.com2",
    live: "https://taupe-malabi-f40655.netlify.app/nav+home.html",
  },
  {
    id: 5,
    image: Gearbest,
    projectName: "GearBest Clone",
    description:
      "GearBest is a E-commerce shoping web site where you can Buy any kind of prodict. It is a collabrativ project that done by Five Team membber withen a five daya's.",
    features:
      "User can login, signup, cart, product pages, and buy the products ",
    tech: [Javascrpet, Html, Css],
    sorce: "https://github.com/vaibhavfirke/-curly-hobbies-5555",
    live: "https://lucky-basbousa-cb58e5.netlify.app/index.html",
  },
  {
    id: 6,
    image: "https://user-images.githubusercontent.com/101381281/204876988-7f3ce8d3-ac0a-469a-ac4b-c30838f461aa.png",
    projectName: "MailChamp Clone",
    description:
      "Clone of E-marketing website MailChimp which gives platform to the users to create thier own store. MailChimp also provide some mail and website templates to create good and professional mails. It is a collaborative project which is done with the help of 5 members in a wee",
    features:
      "User can login, signup, cart, product pages, and buy the products ",
    tech: [Javascrpet, Html, Css,Chakraui,Reactimg],
    sorce: "https://github.com/monumarquis/MailChimp-Store",
    live: "https://mailchimp-clone-deploy.netlify.app/",
  },
];
function ProjectContent({ content }) {
  const [project] = useState(projects);
  return (
    <Box className="project" >
      <Box className="content-project">
        <Heading
          textAlign="center"
          mb="20px"
          color="white"
          fontWeight="bolder"
          fontSize={{ base: "25px", md: "35px", lg: "45px" }}
        >
          Projects
        </Heading>
        <Box className="flexcontent">
        {project?.map((el,i) => {
          return (
              <Box className="main-content" key={i}>
                <Image
                  src={el.image}
                  alt="project image"
                  margin="auto"
                  borderRadius={10}
                  width="100%"
                  objectFit="contain"
                ></Image>
                <Heading
                  textAlign="center"
                  mt="15px"
                  fontSize={{ base: "16px", md: "18px", lg: "22px" }}
                >
                  {el.projectName}
                </Heading>
                <Text
                  width="90%"
                  textAlign="center"
                  margin="auto"
                  mt="15px"
                  color="rgb(207, 214, 214)"
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                >
                  {" "}
                  {el.description}
                </Text>
                <Heading
                  textAlign="center"
                  margin="auto"
                  mt="15px"
                  mb="15px"
                  fontSize={{ base: "16px", md: "18px", lg: "22px" }}
                >
                  Tech stack
                </Heading>
                <Box
                  display="flex"
                  justifyContent="center"
                  gap="15px"
                  mt="10px"
                  mb="10px"
                >
                  {el.tech.map((e, i) => {
                    return (
                    
                      <Image
                      key={i}
                        width={{ base: "30px", md: "35px", lg: "50px" }}
                        height={{ base: "30px", md: "35px", lg: "50px" }}
                        src={e}
                        alt="javascript"
                      />
                    );
                  })}
                 
                </Box>
                <Box
                  margin="auto"
                  display="flex"
                  gap="15px"
                  width="100%"
                  
                  justifyContent="center"
                  mb="15px"
                  mt="15px"
                >
                  <a href={el.sorce} target="-blank">
                    {" "}
                    <Button
                      width={{ base: "65px", md: "80px", lg: "100px" }}
                      height={{ base: "30px", md: "35px", lg: "40px" }}
                      fontSize={{ base: "10px", md: "14px", lg: "16px" }}
                      bg="yellow"
                      color="black"
                      fontWeight="bold"
                      className="gitcode"
                    >
                      Code
                    </Button>
                  </a>
                  <a href={el.live} target="-blank">
                    <Button
                      width={{ base: "65px", md: "80px", lg: "100px" }}
                      height={{ base: "30px", md: "35px", lg: "40px" }}
                      fontSize={{ base: "10px", md: "14px", lg: "16px" }}
                      bg="yellow"
                      color="black"
                      fontWeight="bold"
                      className="live"
                    >
                      {" "}
                      Live 
                    </Button>
                  </a>
                </Box>
            </Box>
          );
        })}
        </Box>
      </Box>
    </Box>
  );
}
export default ProjectContent;
