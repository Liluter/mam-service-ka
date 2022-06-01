import React from "react";
import Button from "./Button";
import {NavLink} from 'react-router-dom'

export default function Navigation () {

    return (
        <nav className="navigation">
            <NavLink to="/hot"><Button className="active" label={"Hot"}/></NavLink>
            <NavLink to="/regular"><Button className="active" label={"Regular"}/></NavLink>
        </nav>
    );
}