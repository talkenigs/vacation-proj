import React, { useContext, useState} from "react";
import { MdEdit } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EditPage from "../Admin/Edit";
import Catalog from "./Catalog";
import Charts from "../Admin/Charts";
import { UserContext } from "../Context/UserProvider";
import io from 'socket.io-client'

function CatalogRouter() {
    const socket = io.connect("http://127.0.0.1:4000") 
    const admin = 18
    const userNow = useContext(UserContext)
    function AdminEdit() {
        if (userNow.id === admin) {
          return (
            <Router> 
            <Link to="/"></Link>
            <Link to="/AdminEdit"><p><MdEdit /> Edit</p></Link>
            <Link to="/Charts"><p><IoStatsChartSharp /> Charts</p></Link>
            <Routes>
              <Route exact path='/' element={< Catalog socket={socket} />}></Route>
              <Route exact path="AdminEdit" element={< EditPage socket={socket} />}></Route>
              <Route exact path="Charts" element={< Charts />}></Route>
            </Routes>
          </Router>
          )} else {
              return (
                < Catalog socket={socket} />
              )}};

  return (
      <>
      {AdminEdit()}
    </>
  );
}

export default CatalogRouter;
