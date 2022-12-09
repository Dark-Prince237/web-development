import React from 'react';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';


const App = () => {
  return (
      <>
      <Router>
          <Navigation/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/Products' element={<Products/>}/>
              <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </Router>
      </>
  )
}

export default App