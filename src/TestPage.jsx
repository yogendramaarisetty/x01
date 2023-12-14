import React, { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import TestQuestion from "./TestQuestion";
import { Box, Stack } from "@mui/system";


export default function TestPage() {
  const [questionDetails, setQuestionDetails] = useState(null);

  const updateQuestionDetails = (details) => {
    setQuestionDetails(details);
  };
  
  return (
      <Box className="AppContainer" sx={{ display: "flex", width:"100vw", height:"100vh", position: "fixed" }}>
        <Stack className="sidenav" sx={{ padding:"5px", height: "100%", borderRight: "1px solid grey" }}>
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
        <Box sx={{ display: "flex-column" ,position:"relative", width:"100%", height:"inherit" }}>
          <Routes>
            <Route path="/questions/:questionId"element={<TestQuestion questionDetails={questionDetails} updateQuestionDetails={updateQuestionDetails} />}/>

            {/* Route for displaying all questions */}
            <Route path="/all" element={<p>Show all questions here</p>}/>
          </Routes>
        </Box>
      </Box>
  );
}
