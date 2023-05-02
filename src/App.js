import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./Components/Home";
// import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Git from "./Components/git";
import Contacts from "./Components/Contacts"
import Navbar from "./Components/nav"
function App() {
  return (
    <Box  bg="#013045" >
       {/* <Navbar/> */}
       <Navbar/>
      {/* <Box
        position="relative"
        height="auto"
        width="100%"
       
      > */}
      <Home />
      {/* </Box> */}
      <About/>
      <Skills />
      <Project/>
      <Git />
      <Contacts />
    </Box>
  );
}

export default App;
