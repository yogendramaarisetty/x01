import React, { useState } from "react";
import { Router, Route, Link, Routes } from "react-router-dom";
import TestQuestion from "./TestQuestion";
import { Box, Stack } from "@mui/system";

export default function TestPage() {
  const [questionDetails, setQuestionDetails] = useState(null);

  const updateQuestionDetails = (details) => {
    setQuestionDetails(details);
  };
  
  return (
      <Box className="container" sx={{ display: "flex", width:"100%", height:"100%" }}>
        <Stack className="sidenav">
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
