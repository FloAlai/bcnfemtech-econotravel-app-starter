import * as React from "react";
import {Link} from "react-router-dom";
import logo from "./assets/logo.png";


export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <div className={"logoImg"}>
            <img className={"logo"} src={logo}/>
        </div>
        <div className={"switchLinks"}>
            <Link to={"/inicio"}>Inicio</Link>
            <Link to={"/quienes-somos"}>Quienes somos</Link>
            <Link to={"/experiencias"}>Experiencias</Link>
           <div className="reservanav"> <Link to={"/reserva"}>Reserva</Link></div>

        </div>

    </nav>
)
