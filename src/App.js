import React, { useState } from "react";
import Data from "./components/Data";
import "./App.css";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

import StudentsList from "./components/StudentsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(Data);
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<StudentsList data={data} setData={setData} />}
          />
          <Route
            path="/add"
            element={<AddStudent data={data} setData={setData} />}
          />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
