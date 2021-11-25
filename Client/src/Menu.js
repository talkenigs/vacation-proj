import React from 'react'
import './menu.css'
import Logo from "./assets/Logo.png";

export default function Menu() {
    return (
        <div className="main-div">
            <div className="logo">
                <img src={Logo}></img>
                <span> VACATIONS </span>
            </div>
            <div className="menu">
                <span> Home </span>
                <span> FAQ </span>
                <span> Contact </span>
            </div>
        </div>
    )
}
