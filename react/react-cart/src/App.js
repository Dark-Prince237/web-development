import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";



const App=()=>
{
    return(
        <>
           <Router>
               <Navigation />
               <Routes>
                   <Route path='/' element={<Home/>}/>
                   <Route path='/about' element={<About/>}/>
               </Routes>
           </Router>
        </>


    )
}

export default App;