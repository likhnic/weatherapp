import { useState } from "react";
import Locationfield from "./components/Locationfield";
import Navbar from "./components/Navbar";

function App() {

  const [location,setLocation]=useState("Chennai")

  const city=(address)=>{
    setLocation(address);
  }
  return (
    <div>
      <Navbar city={city}/>
      <Locationfield city={location}/>
    </div>
  );
}

export default App;
