import { useState } from 'react'
import './App.css'
import {LoginPage} from "./components/LoginPage.tsx";
import OTP from './components/OTP.tsx';


function App() {
  const [count, setCount] = useState("")

  return (
    <>
    {/* <LoginPage />     */}
    <OTP/>
    </>
  )
}

export default App
