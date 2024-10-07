import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PrivateRouter from './PrivateRouter'
import Home from '../pages/Home'
import Login from '../components/Login'
import Register from '../components/Register'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<PrivateRouter/>}>
        <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/details/:id" element={<ItemDetails/>}/>
        <Route path="*" element={<NotFound/>}/>






    </Routes>
</BrowserRouter>
  )
}

export default AppRouter