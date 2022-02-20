import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import App from '../App/App'
import './menu.css'

// const logo = require('../upload/projLogo.png').default

export default function Menu() {

    return (
        <div className="main-div">
            <div className="logo">
                {/* <img src={require('../upload/projLogo.png').default}></img> */}
                <Link to="/" style={{ textDecoration: 'none' }}><span> VACATIONS </span></Link>
            </div>
            <div className="menu">
                <Link to="/"> <span> Home </span> </Link>
                <span> FAQ </span>
                <span> Contact </span>
            </div>
        </div>
    ) 
}
