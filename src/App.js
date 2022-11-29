import './App.css';
// import {Text,Box} from "@chakra-ui/react"
import Home from "./routes/Home"
import About from "./routes/AboutMe"
import Porject from "./routes/Project"
import Contact from "./routes/Contact"
import Skills from './routes/Skills';
import Resume from './routes/Resume';
import { Route,Routes } from 'react-router';
      

function App() {
  return (
    <div className='app'>

   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/AboutMe" element={<About/>} />
    <Route path="/Project" element={<Porject/>} />
    <Route path="/Skills" element={<Skills/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/REsume" element={<Resume/>} />
   </Routes>

     
    </div>
  );
}

export default App;
