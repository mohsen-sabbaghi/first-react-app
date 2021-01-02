import React from 'react';
import './styles/header.css';
import {Link, useLocation} from "react-router-dom";

export default function Header() {
    let location = useLocation()
    console.log(location)
    return (
        <div className="header">
            <div className="header-left"> left</div>
            <div className="header-center">
                <Link to="/" style={{margin: 10  ,color: location.pathname === "/" ? "#f00" : "#000"}}>Home</Link>
                <span>|</span>
                <Link to="/main" style={{margin: 10, color: location.pathname === "/main" ? "#f00" : "#000"}}>Main</Link>
            </div>
            <div className="header-right">right</div>
        </div>
    )
}