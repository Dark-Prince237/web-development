import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import './index.css'
import SignIn from "./pages/SignIn";


const App = () => {
  return (
      <>
      
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App