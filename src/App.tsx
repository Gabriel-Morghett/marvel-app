import React from "react"
import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { CookiesProvider, useCookies } from "react-cookie";

// routes
import Home from "./routes/Home";
import About from "./routes/About";
import Characters from "./routes/Characters";
import Authentication from "./routes/Authentication";

// components
import NavegationBar from "./components/NavegationBar";

// css
import "./styles/App.css";

function App() {

    return (
        <>
            <div className="app">
                <NavegationBar />
                <Header/>
                <Router>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/auth"} element={<Authentication />} />
                        <Route path={"/:id"} element={<Characters />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;