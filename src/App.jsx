import { useState } from 'react'
import './styles/App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
    {
      show ? <h1>Toggle In Js</h1> : null
    }
    
    <button onClick={()=>setShow(!show)} >Toggle</button>
    <button onClick={()=>setShow(true)} >Show</button>
    </>
  )
}

export default App
