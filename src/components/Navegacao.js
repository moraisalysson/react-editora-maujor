import React from "react";
import { NavLink } from "react-router-dom";

let linkAtivo = {
    color: "#027399"
}

const Navegacao = () =>
(
    <ul>
        <li><NavLink exact="true" style={({ isActive }) => isActive ? linkAtivo : undefined} to="/">Home</NavLink></li>
        <li><NavLink exact="true" style={({ isActive }) => isActive ? linkAtivo : undefined} to="/frontend">Frontend</NavLink></li>
        <li><NavLink exact="true" style={({ isActive }) => isActive ? linkAtivo : undefined} to="/programacao">Programacao</NavLink></li>
        <li><NavLink exact="true" style={({ isActive }) => isActive ? linkAtivo : undefined} to="/design">Design</NavLink></li>
        <li><NavLink exact="true" style={({ isActive }) => isActive ? linkAtivo : undefined} to="/catalago">Catalago</NavLink></li>
    </ul>
)


export default Navegacao;