import React from "react";
import ChatAPP from "./components/ChatAPP/index.js";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ChatAPP />
      </ThemeProvider>
    </Router>
  );
}

export default App;
