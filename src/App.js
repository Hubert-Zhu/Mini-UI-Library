import React from "react";
import ChatAPP from "./components/ChatAPP/index.js";
import { ThemeProvider } from "styled-components";
import theme from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatAPP />
    </ThemeProvider>
  );
}

export default App;
