import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Doces from "./pages/Doces/Doces";
import Kits from "./pages/Kits/Kits";
import Sobre from "./pages/Sobre/Sobre";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doces" element={<Doces />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;