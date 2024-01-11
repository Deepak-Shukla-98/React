import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Sphere from "./components/sphere/sphere";
import Loader from "./components/loader/loader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/sphere" element={<Sphere />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
