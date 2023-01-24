import { Box } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
      
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
        );
      });
    };
    
   

  return (
    <Box width="100%" border={"1px solid red"}>
      <GitHubCalendar
        style={{width:"100%", margin: "auto" ,marginBottom:"5%",border:"1px solid green" }}
        username="vaibhavfirke"
        transformData={"12/12/2023"}
        blockSize={16}
        fontSize={16}
        // hideColorLegend
  // hideTotalCount
      >
         <ReactTooltip delayShow={18} html /> 
      </GitHubCalendar>
    </Box>
  );
};

export default Calender;