import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import Trending from './pages/Trending';







const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shorts"  element={<Shorts/>}/>
        <Route path="/trending"  element={<Trending/>}/>
        
      </Routes>
    </Router>
    </>

  )
}

export default App