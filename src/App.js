import React  from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import AboutUs from "./Component/AboutUs/AboutUs";
import Infrasctrure from "./Component/Instrascture/Infrasctrure";
import Contact from "./Component/Contact/Contact";
import HeadlightProduct from "./Component/Products/HeadLightProduct/HeadlightProduct";
import TailLight from "./Component/Products/TailLightProduct/TailLight";
import HarneshProduct from "./Component/Products/CustomwiringHarnesh/HarneshProduct";
import WiringAssembly from "./Component/Products/WiringAssembly/WiringAssembly";


function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path="/about" element={<AboutUs />} />
    <Route path="/infra" element={<Infrasctrure />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/headlight" element={<HeadlightProduct />}/>
    <Route path="/taillight" element = {<TailLight />} />
    <Route path="/harnesh" element={<HarneshProduct />} />
    <Route path="/wiring" element={<WiringAssembly />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  </>
  );
}

export default App;
