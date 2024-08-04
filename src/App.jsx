import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./components/Login"
import Otp from './components/Otp'
import ForgotPassword from './components/ForgotPassword'
import OnBoardingForm from './components/OnBoardingForm'

function App() {


  return (
    <div style={{color:"#566574"}}>
     <Login/>
     <Otp/>
     <ForgotPassword/>
     <OnBoardingForm/>
    </div>
  )
}

export default App
