import React from "react";
import "./App.css";
import styled from "styled-components";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Investment from "./components/Investment";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

const theme = createTheme({
  typography: {
    fontFamily: "'Helvetica', 'Arial', sans-serif",
  },
});
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: auto; /* Allow it to expand beyond viewport if content is longer */
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto; /* Makes content scrollable if it overflows */
  @apply mb-auto; /* This will push your footer to the bottom */
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <NavBar />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/investment-advisory" element={<Investment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </ContentWrapper>
          <Footer />
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
