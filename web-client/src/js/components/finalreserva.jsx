import * as React from "react";
import {Link} from "react-router-dom";

export const FinalReserva = () => {
    return (
        <div className={"completedFormMsg"}>
            <h1>¡Gracias por la reserva!</h1>
            <a><Link to={"/reservas"}>Añadir otra reserva<span className={"homeswitch"}> </span> </Link></a>
        </div>
    )
}