import React from 'react'
import Menupic from "./menu.jpg"
import "./menu.css";

export default function Menu() {
    return (
        <div id="menu-div">
            <img src={Menupic} alt="Our Menu" />
        </div>
    )
}
