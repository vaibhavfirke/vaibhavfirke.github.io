import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./Conponents/Home";
import Navbar from "./Conponents/Navbar"
import About from "./Conponents/About"
import Skills from "./Conponents/Skills";
import Project from "./Conponents/Project";
import Git from "./Conponents/git";
import Contacts from "./Conponents/Contacts"
import Nav from "./Conponents/nav"
function App() {
  return (
    <Box  bg="#013045" >
       {/* <Navbar/> */}
       <Nav/>
      <Box
        position="relative"
        height="auto"
        width="100%"
       
      >
      <Home />
      </Box>
      <About/>
      <Skills />
      <Project/>
      <Git />
      <Contacts />
    </Box>
  );
}

export default App;
