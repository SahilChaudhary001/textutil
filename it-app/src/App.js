
import { useState } from 'react';
import './App.css';
import Navbar from './Componenets/Navbar';

import About from './Componenets/About';
import TextForm from './Componenets/TextForm';
import {
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom";


function App() {
   
  const[mode,setmode]=useState('light');
  const togglemode=()=>{
     if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      document.title="Text-Utils Amazing";

      // showalert("Dark Mode has been Enabled","Success");
     }
    else{
       setmode('light');
       document.body.style.backgroundColor='white';
       document.title="Text-Utils Amazing";
      //  showalert("Light Mode has been Enabled","Success");
     }
   }
  // const[alert,setalert]=useState(null);
  // const showalert=(message,type)=>{
  //    setalert=({
  //     msg: message,
  //     type: type
  //    }) 
  // }
  return (
    <>
    <Router> 
  <Navbar title="TextUtils" About="About Us" mode={mode} togglemode={togglemode}></Navbar> 
  {/* <Alert alert={alert}></Alert> */}
   <div className="container">
   
   
    <Routes>
          <Route path="/About"
           element={<About />} >
          </Route>
          <Route path="/Home"
         element={ <TextForm heading="Enter the text to analyze below" mode={mode} />}>
          </Route>
          </Routes>
    </div>
   
   </Router>  
    
  </>
  );
}

export default App;
 