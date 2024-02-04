import React from "react"
import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

// routes
import Authentication from "./routes/Authentication";
import Characters from "./routes/Characters";
import Comics from "./routes/Comics";
import Creators from "./routes/Creators";

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
                        <Route path={"/characters"} element={<Characters />} />
                        <Route path={"/comics"} element={<Comics />} />
                        <Route path={"/creators"} element={<Creators />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;