import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/index";
import Bannner from "./components/Banner/index";
import List from "./components/List/index";
import Footer from "./components/Footer/index";
import JobDescription from "./components/JobDescription/index";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Bannner></Bannner>

        <Routes>
          <Route path="/" element={<List  />} />
          <Route path="/job/:id" element={<JobDescription />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
