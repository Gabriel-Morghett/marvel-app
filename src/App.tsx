import React from "react"
import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// routes
import Home from "./routes/Home";
import About from "./routes/About";
import Characters from "./routes/Characters";

// omponents
import NavegationBar from "./components/NavegationBar";
import Authentication from "./routes/Authentication";

function App() {
    return (
        <>
            
            <Router>
                <NavegationBar />
                <Header/>
                <Routes>
                    <Route path={"/auth"} element={<Authentication />} />
                    <Route path={"home"} element={<Home />} />
                    <Route path={"/:id"} element={<Characters />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;


// import { Main } from './Components/Main';
// import './Components/style.css';
// import { Marvel } from './Components/Marvel';

// function App() {
//   return (
//     <>
//      <Routes>
//        <Route path='/'element={<Main/>}/>
//        <Route path='/:id' element={<Marvel/>}/>
//      </Routes>
//     </>
//   )
// }