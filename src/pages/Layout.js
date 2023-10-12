import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Box padding={5}>
          <Outlet />
        </Box>
      </>
    );
  }
}

export default App;
