import React, { useState } from "react";
import {
  Outlet, Route, Link, Routes
} from "react-router-dom";
import TestQuestion from "./TestQuestion";
import { Box, Stack } from "@mui/system";
import { Card } from '@mui/joy';



export default function TestPage() {
  const [questionDetails, setQuestionDetails] = useState(null);

  const updateQuestionDetails = (details) => {
    setQuestionDetails(details);
  };

  return (
    <Box className="AppContainer" sx={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh", position: "fixed" }}>
      <Card></Card>
      <Box className="TestPageContainer FillCard" sx={{ display: 'flex', margin: '0' }}>

        <Stack className="sidenav" sx={{ padding: "5px", height: "100%", borderRight: "1px solid grey" }}>
          <div>
            {" "}
            <Link to="/all">All</Link>
          </div>
          <div>
            <Link to={"/questions/1"}>1</Link>
          </div>
          <div>
            <Link to={"/questions/2"}>2</Link>
          </div>
          <div>
            <Link to={"/questions/3"}>3</Link>
          </div>
        </Stack>
        <Box sx={{ display: "flex-column", position: "relative", width: "100%", height: "inherit" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
