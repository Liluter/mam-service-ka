import React from "react";
import Button from "./Button";
import {NavLink} from 'react-router-dom'

export default function Navigation () {
    
    return (
        <nav className="navigation">
            <NavLink to="/hot"><Button label={"Hot"}/></NavLink>
            <NavLink to="/regular"><Button label={"Regular"}/></NavLink>
        </nav>
    );
}