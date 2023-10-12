import React from "react";
import { Box, Typography } from "@mui/material";
import NavBar from "../components/Navbar";

class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Box padding={5}>
          <Typography variant="h1" component="h2">
            An error has occured
          </Typography>
        </Box>
      </>
    );
  }
}

export default ErrorPage;
