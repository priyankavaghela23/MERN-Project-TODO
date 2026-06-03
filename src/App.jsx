import { useState } from 'react'
import './styles/App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
     <Routes>
      <Route path='/' element={<h1></h1>}  />
     </Routes>
    </>
  )
}

export default App
