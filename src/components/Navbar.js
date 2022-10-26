import React from "react"
import Logo from "../images/logo192.png"

export default function Navbar() {
    return(
        <nav className="navbar">
            <img src={Logo} className="logo-nav"/>
            <h2>React Facts</h2>
            <h3>React Course - Project 1</h3>
        </nav>
        )
}