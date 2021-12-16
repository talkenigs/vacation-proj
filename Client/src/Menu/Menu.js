import React from 'react'
import './menu.css'

// const logo = require('../upload/projLogo.png').default

export default function Menu() {
    return (
        <div className="main-div">
            <div className="logo">
                {/* <img src={require('../upload/projLogo.png').default}></img> */}
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
