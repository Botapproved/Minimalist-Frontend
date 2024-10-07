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
import SittingRoom from './pages/SittingRoom'
import Kitchen from './pages/Kitchen'
import Accessories from './pages/Accessories'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'


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
        <Route path='/orderplaced' element={<PlaceOrder/>}/>
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/sittingroom' element={<SittingRoom/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/kitchen' element={<Kitchen/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/payment' element={<Payment/>}/>

      </Routes>
      <Footer/>


    </div>
  )
}

export default App;