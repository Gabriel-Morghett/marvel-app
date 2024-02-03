import React from "react"
import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

// routes
import Search from "./routes/Search";
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
            <ToastContainer />
            <div className="app">
                <NavegationBar />
                <Header/>
                <Router>
                    <Routes>
                        <Route path={"/"} element={<Authentication />} />
                        <Route path={"/search"} element={<Search />} />
                        <Route path={"/:id"} element={<Characters />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;