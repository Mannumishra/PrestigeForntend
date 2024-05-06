import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import AboutUs from "./Component/AboutUs/AboutUs";
import Infrasctrure from "./Component/Instrascture/Infrasctrure";
import Contact from "./Component/Contact/Contact";
import HeadlightProduct from "./Component/Products/HeadLightProduct/HeadlightProduct";
import CategoryproductDetails from "./Component/CategoryProductDetails/CategoryproductDetails";
import Career from "./Component/Career/Career";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/infra" element={<Infrasctrure />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categoryproductdetails/:_id" element={<CategoryproductDetails />} />
          <Route path="/productDetails/:_id" element={<HeadlightProduct />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Toaster />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
