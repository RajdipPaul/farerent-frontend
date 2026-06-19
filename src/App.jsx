// import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Rolechoice from "./components/Rolechoice";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div className="w-screen h-screen min-h-screen bg-white">
      {/* <Home /> */}
      {/* <Rolechoice /> */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rolechoice" element={<Rolechoice />} />
        <Route path="/rolechoice/signup" element={<Signup />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
