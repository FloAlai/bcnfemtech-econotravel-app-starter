import * as React from "react";
import { NavigationBar } from "./navigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QuienesSomos } from "./quienes-somos";
import { Experiencias } from "./Experiencias";
import { Inicio } from "./Inicio";
import { Footer } from "./Footer";
import {BootstrapCarousel} from "./BootstrapCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import bici from "./assets/img/bicicleta1.jpg";




export const App = () => {

    const expList = [
        {   //1
            id: 1 ,
            title:  "Paseo en bicicleta por el Montseny",
            img: bici,
            description: "hermoso paseo en bicicleta por el increíble Parque Natural del Montseny.(...)" ,
            precio: 250 ,
            duracion: "5h",
            accesibilidad: "Todas las edades. bicicletas accesibles para personas con movilidad reducida",

        },
        //2
        {
            id: 2,
            img: "",
            title:"Descubre la costa en barco de vela",
            description:"hermoso paseo acuático en barco de vela por la increíble costa de Barcelona(...)",
            precio:280,
            duracion:"4 horas",
            accesibilidad:"Actividad disponible para todas las edades. Pasarela para silla de ruedas disponible bajo reserva"
        },
        //3
        {
            id: 3,
            title:"Descubre la Barcelona Modernista de noche",
            img: "",
            description:"Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample",
            precio:200,
            duracion:"4 horas",
            accesibilidad:"Actividad disponible para todas las edades. Accesibilidad garantizada para sillas de ruedas."
        },
        //4
        {
            id: 4,
            title:"Del huerto a la mesa",
            img: "",
            description:"Podréis plantar vuestras propias hortalizas y verduras en el huerto de Can Gilabert, ubicado en el corazón del Montbaig",
            precio:145,
            duracion:"3 horas",
            accesibilidad:"Actividad disponible para todas las edades. El acceso al huerto en silla de ruedas está garantizado. "
        },
        //5
        {
            id: 5,
            title:"Arte en la montaña sagrada",
            img: "",
            description:"Disfruta de la impresionante Montaña de Montserrat donde encontraréis el Museo con las salas modernistas de Puig i Cadafalch(...)",
            precio:125,
            duracion:"2 horas",
            accesibilidad:"Actividad disponible para todas las edades. El acceso al museo y al restaurante en silla de ruedas está garantizado."
        },
    ]



    return <Router>
        <NavigationBar />
        <Switch>
            <Route exact path={"/"}>
                <Inicio />
            </Route>

            <Route path={"/quienes-somos"}>
                <QuienesSomos />
            </Route>

            <Route path={"/experiencias"}>
                <Experiencias exp={expList} />
            </Route>

            <Route exact path="/">
                <BootstrapCarousel />
            </Route>

        </Switch>
        <Footer />
    </Router>
}