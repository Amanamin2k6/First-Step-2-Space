import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Planning from "./components/Planning/Planning";
import Footer from "./components/Footer";
import Safety from "./components/Safety/Safety";
import Vehicles from "./components/Vehicles/Vehicles";
import Launch from "./components/Launch/Launch";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);


    return () => clearTimeout(timer);
  }, []);
  

  return (
    
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planning-training" element={<Planning />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/launch-recovery" element={<Launch />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
      <div>
      
    </div>
    </Router>
  );
}

export default App;