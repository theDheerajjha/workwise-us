import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Banner from "./components/Banner";
import List from "./components/List";
import Footer from "./components/Footer";
import JobDescription from "./components/JobDescription";
import "./App.scss";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Banner />
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/job/:id" element={<JobDescription />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
