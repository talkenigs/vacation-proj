import React, { useContext, useState} from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EditPage from "../Admin/Edit";
import Catalog from "./Catalog";
import { UserContext } from "../Context/UserProvider";
import io from 'socket.io-client'

function CatalogRouter() {
    const socket = io.connect("http://127.0.0.1:4000") 
    const admin = 'x'
    const userNow = useContext(UserContext)
  socket.on("update_catalog", (data) => {
    console.log("test")
  })

    function AdminEdit() {
        if (userNow.username === admin) {
          return (
            <Router> 
            <Link to="/"></Link>
            <Link to="/AdminEdit"><p><AiOutlineEdit /> Edit</p></Link>
            <Routes>
              <Route exact path='/' element={< Catalog socket={socket} />}></Route>
              <Route exact path="AdminEdit" element={< EditPage socket={socket} />}></Route>
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
