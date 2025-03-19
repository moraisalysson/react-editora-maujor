import React from "react";
import { NavLink } from "react-router-dom";

let linkCorrente = {
    color: "#027399"
}

const Navegacao = () =>
    (
        <ul>
            <li><NavLink exact="true" style={linkCorrente} to="/">Home</NavLink></li>
            <li><NavLink exact="true" style={linkCorrente} to="/frontend">Frontend</NavLink></li>
            <li><NavLink exact="true" style={linkCorrente} to="/programacao">Programacao</NavLink></li>
            <li><NavLink exact="true" style={linkCorrente} to="/design">Design</NavLink></li>
            <li><NavLink exact="true" style={linkCorrente} to="/catalago">Catalago</NavLink></li>

        </ul>
)


export default Navegacao;