import React from 'react';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import ProductShop from './Components/Products/ProductShop';
import Contact from './Components/Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Promotion from './Components/Promotions/Promotions';
import Blog from './Components/Blog/Blog';

function App() {
  return (
      <div>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
        <Route exact={true} path='/product' element={<ProductShop />} />
            <Route exact={true} path='/cart' element={<Cart />} />
            <Route exact={true} path='/contact' element={<Contact />} />
            <Route exact={true} path='/login' element={<Login />} />
            <Route exact={true} path='/register' element={<Register />} />
            <Route exact={true} path='/promotion' element={<Promotion />} />
            <Route exact={true} path='/blog' element={<Blog />} />
          </Routes>
        <Footer />
      </div>
  );
}

export default App;
