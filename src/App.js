import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  getInTouch,
  } from "./editable-stuff/config.js";
import Footer from "./components/Footer";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Hero from './components/Hero/Hero';
import WhyTNLWorks from "./components/home/WhyTNLWorks";
import Services from "./components/home/Services";
import Navbar from "./components/Navbar";


const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <Hero />
      <WhyTNLWorks />
      {/* 🚀 Hizmetler kısmı burada eklendi */}
      <Services />
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      {getInTouch.show && (
      <GetInTouch
        heading={getInTouch.heading}
      message={getInTouch.message}
      email={getInTouch.email}
      />
      )}

      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
