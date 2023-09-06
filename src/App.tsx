import React from "react";
import "./App.css";
import styled from "styled-components";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Investment from "./components/Investment";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const NavBarHeight = "64px";

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${NavBarHeight});
  height: auto; /* Allow it to expand beyond viewport if content is longer */
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto; /* Makes content scrollable if it overflows */
  @apply mb-auto; /* This will push your footer to the bottom */
`;

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <MainLayout>
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
  );
};

export default App;
