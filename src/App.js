import React from "react";

import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
