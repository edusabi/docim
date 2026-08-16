import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import './App.css';

///components

//pages
import Home from "./pages/Home/Home";
import Doces from "./pages/Doces/Doces";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/doces" element={<Doces/>}/>
          {/* <Route path="/kits" element={<Home/>}/>
          <Route path="/sobre" element={<Home/>}/> */}

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
