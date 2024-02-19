import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import NotFound from "./Components/NotFound";

// import Courses from "./Courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="*" component={<NotFound />} />
        {/* <Route path="/Courses" element={<Courses />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
