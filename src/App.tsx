import { useState } from 'react'
import './App.css'
import {LoginPage} from "./components/LoginPage.tsx";
import OTP from './components/OTP.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/otp" element={<OTP/>}/>
      </Routes>
    </BrowserRouter>
// NO-LAZYLOADING 
  )
}

export default App
