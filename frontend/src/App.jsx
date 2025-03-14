import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct,MyProducts,Cart,ProductDetails,Profile, CreateAddress, OrderConfirmation} from './routes/route.js';
import SelectAddress from './pages/SelectAddress.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/createproduct' element={<CreateProduct/>}></Route>
        <Route path='/create-product/:id' element={<CreateProduct/>}></Route>
        <Route path='/myproducts' element={<MyProducts/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/createAddress' element={<CreateAddress/>}/>
        <Route path='/selectAddress' element={<SelectAddress/>}/>
        <Route path='/orderConfirmaion' element={<OrderConfirmation/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App