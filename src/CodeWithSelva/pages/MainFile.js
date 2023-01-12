import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Home";
import About from "./About";
import AddEdit from "./AddEdit";
import View from "./View";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
const MainFile = () => {
  
    const [data, setData] = useState([]);
  return (
    <BrowserRouter>
       <Navbar />
      <ToastContainer />
   
      <Routes>
        <Route exact path="/" element={<Home data={data} setData={setData} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/add" element={<AddEdit data={data} setData={setData}/>} />
        <Route exact path="/update/:id" element={<AddEdit />} />
        <Route exact path="/view/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainFile;
