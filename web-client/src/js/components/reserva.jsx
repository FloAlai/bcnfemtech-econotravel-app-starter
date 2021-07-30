import * as React from "react";
import playa from "./assets/img/costa.jpg";
import {Link} from "react-router-dom";

export const Reserva = () => {
    return (
        <div className={"contenedor"}>
               <img className={"photo"} src={playa}/>
            <div className={"textReserva"}>
                <form className="formulario">
                    <div className="classnombre">
                        <label>Nombre</label>
                        <input
                            id="nombre"
                            type="text"
                            name="nombre"
                        />
                    </div>
                    <div className="classcorreo">
                        <label>Correo</label>
                        <input
                            id="correo"
                            type="email"
                            name="correo"
                        />
                    </div>
                    <div className="classfecha">
                        <label>Fecha</label>
                        <input
                            id="fecha"
                            type="date"
                            name="fecha"
                        />
                    </div>
                    <div className="classnumeropersonas">
                        <label>Numero de personas</label>
                        <input
                            id="personas"
                            type="number"
                            name="personas"
                        />
                    </div>
                    <div className="actividad">
                        <label>Actividad</label>
                        <select id="actividad" name="actividad">
                            <option value={"actividad1"}> Paseo en bicicleta por el Montseny</option>
                            <option value={"actividad2"}> Descubre la costa en barco de vela</option>
                            <option value={"actividad3"}> Descubre la Barcelona Modernista de noche</option>
                            <option value={"actividad4"}> Del huerto a la mesa</option>
                        </select>
                    </div>
                    <div>
                        <button className="boton" >
                            <Link className="textoboton" to={"./FinalReserva"}>Reservar</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}