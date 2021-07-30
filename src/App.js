
import React,{useState} from "react";
import { Navbar } from "./components/navbar";
import {Body} from "./pages";
import "./App.css";
function App() {
  const [isopen,setisopen]=useState(false);
  return (
    <div className="App">
      <Navbar toggleopen={setisopen}/>
{
     !isopen&& <Body/>}
    </div>
  );
}

export default App;
