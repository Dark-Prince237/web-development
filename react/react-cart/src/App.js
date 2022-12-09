import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Navigation from "./Components/Navigation";
import Cart from "./Pages/Cart";




const App=()=>
{
    return(
        <>
           <Router>
               <Navigation />
               <Routes>
                   <Route path='/' element={<Home/>}/>
                   {/* <Route path='/about' element={<About/>}/> */}
                   <Route path='/products' element={<Products/>}/>
                   <Route path="/cart" element={<Cart/>}/> 
               </Routes>
           </Router>
        </>


    )
}

export default App;