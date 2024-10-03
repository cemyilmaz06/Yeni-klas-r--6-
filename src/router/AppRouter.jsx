import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
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