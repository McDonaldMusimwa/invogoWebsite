//import { useState } from 'react'
import "./App.css";
//import Home from "../pages/Home";
import NavBar from "../components/nav/NavBar";
//import { Outlet } from "react-router-dom";
//import Services from "../pages/Services";
//import Footer from "../pages/Footer";
import MainPages from "../pages/Main";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="Container">
      <NavBar />
    
      <MainPages />
       
    </div>
  );
}

export default App;
