import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Sink from './pages/Sink'
const App = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/sink" element={<Sink/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App