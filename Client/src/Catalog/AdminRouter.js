import React, {useContext} from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EditPage from "../Admin/Edit";
import Catalog from "./Catalog";
import { UserContext } from "../Context/UserProvider";

function CatalogRouter() {

    const admin = 'x'
    const userNow = useContext(UserContext)

    function AdminEdit() {
        if (userNow.username == admin) {
          return (
            <Router>
            <Link to="/"></Link>
            <Link to="/AdminEdit"><p><AiOutlineEdit /> Edit</p></Link>
            <Routes>
              <Route exact path='/' element={< Catalog />}></Route>
              <Route exact path="AdminEdit" element={< EditPage />}></Route>
            </Routes>
          </Router>
          )} else {
              return (
                < Catalog />
              )}};

  return (
      <>
      {AdminEdit()}
    </>
  );
}

export default CatalogRouter;
