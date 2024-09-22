//import { useState } from 'react'
import './App.css'
import Home from '../pages/Home'
import NavBar from '../components/nav/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}

export default App
