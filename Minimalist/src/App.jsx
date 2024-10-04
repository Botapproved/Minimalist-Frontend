import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Register from './pages/Register'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[6.5vw] lg:px-[8vw] font-custom1'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
      <Footer/>


    </div>
  )
}

export default App;