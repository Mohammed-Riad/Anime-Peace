import React from 'react'
import Contact from './component/Home/Contact'
import Header from './component/master/Header'
import About from './component/Home/About'
import Index from './component/Home/Index'
import Animes from './component/Home/Animes'
import Register from './component/user/Register'
import Footer from './component/master/Footer'
import Login from './component/user/Login'
import {
  Routes,
  Route,
} from "react-router-dom";
import Logout from './component/user/Logout'


export default function App() {
  return (
    <div>


      <Header />





      <Routes>


        <Route exact element={<About />} path="/About" />
        <Route exact element={<Contact />} path="/Contact" />
        <Route exact element={<Index />} path="/" />
        <Route exact element={<Animes />} path="/Animes" />
        <Route exact element={<Animes />} path="/Animes" />
        <Route exact element={<Register />} path="/Register" />
        <Route exact element={<Login />} path="/Login" />
        <Route exact element={<Logout />} path="/Logout" />


      </Routes>






    </div>
  )
}
