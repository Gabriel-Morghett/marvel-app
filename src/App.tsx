import React from "react"
import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"about"} element={<About />} />
        </Routes>
      </Router>
      <div>
        <Header />
      </div>
    </>
    
  );
}

export default App;
