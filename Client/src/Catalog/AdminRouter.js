import React, { useContext, useState} from "react";
import { MdEdit } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EditPage from "../Admin/Edit/Edit";
import Catalog from "./Catalog";
import Charts from "../Admin/Charts/Charts";
import AddVac from '../Admin/AddVacation/AddVacation'
import { UserContext } from "../Context/UserProvider";
import { SocketProvider } from "../Context/Socket"
 
function CatalogRouter() {
    const admin = 21
    const userNow = useContext(UserContext)

    function AdminEdit() {
        if (userNow.id === admin) {
          return (
            <>
            <SocketProvider>
            {/* <Router>  */}
            <Link to="/"></Link>
            <Link to="/AdminEdit"><p><MdEdit /> Edit</p></Link>
            <Link to="/Charts"><p><IoStatsChartSharp /> Charts</p></Link>
            <Link to="/AddVac"><p> Add Vacation </p></Link>
            <Routes>
              <Route exact path='/' element={< Catalog />}></Route>
              <Route exact path="AdminEdit" element={< EditPage />}></Route>
              <Route exact path="Charts" element={< Charts />}></Route>
              <Route exact path="AddVac" element={<AddVac/>}></Route>
            </Routes>
          {/* </Router> */}
          </SocketProvider>
          </>
          )} else {
              return (
                <SocketProvider>
                < Catalog />
                </SocketProvider>
              )}};

  return (
      <>
      {AdminEdit()}
    </>
  );
}

export default CatalogRouter;
