import {  Box } from "@chakra-ui/react";
import React from "react";
import "./states.style.css";
const Stats = () => {
  return (
    // streak
    <Box className="statesImg" width="100%" height="100%"  >
      <Box style={{ width: "40%", height:"auto", margin: "auto"}}>
        <a href="https://github.com/vaibhavfirke" target="-blank">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=vaibhavfirke"
            alt="calender"
          />
        </a>
      </Box>

      <Box
        style={{
          width: "60%",
          height: "300px",
          display: "flex",
          margin: "auto",
          gap:"1%",
          paddingTop: "25px",
        }}
      >
        <a href="https://github.com/vaibhavfirke" target="-blank">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=vaibhavfirke" //launguages
            alt="git"
            
          />
        </a>
        <a href="https://github.com/vaibhavfirke" target="-blank">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=vaibhavfirke&count_private=true&show_icons=true" //stats
            alt="git"
           
          />
        </a>
      </Box>
    </Box>
  );
};

export default Stats;
