import { useState } from 'react';
import About from './About';
import './App.css';
import Navbar from './componants/Navbar';
import TextState from './componants/TextState';
import Alart from './componants/Alart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// let name="Learn Code"
function App() {
  const[Mode , setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  // const[title,setTitle]=useState(null);
  const toggleMode=()=>{
    if(Mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode is enable","success");
      document.title="TextUtils-dark";
      // setInterval(() => {
      //   document.title="TextUtils-dark";
      // }, 2000);
      // setInterval(() => {
      //   document.title="TextUtils-light";
      // }, 1500);
      // setInterval(() => {
      //   setTitle("Amazing!");
      //   document.title=title;
      // }, 2000);
      // setInterval(() => {
      //   setTitle("install now");
      //   document.title=title;
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enable","success");
      document.title="TextUtils-light";
    }
  } 
  const showAlert=(massege,type)=>{
    setAlert(
      {
        msg: massege,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  return (
    <>
    <Router>
    <Navbar about="About" mode={Mode} toggle={toggleMode}></Navbar>
    <Alart alert={alert}></Alart>
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<TextState showAlert={showAlert} title="Enter the text" mode={Mode} />} />
        <Route path="/contact" element={<About />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
