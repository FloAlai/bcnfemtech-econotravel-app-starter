// Al incluír aquí el SCSS hacemos que webpack genere
// un archivo bundle.js que contiene tanto el javascript
// como el CSS
import '../scss/main.scss'
import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import {App} from "./components/App"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


=======
import {App} from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
>>>>>>> a1b7b4ecf0a9c4770826b448087bad1179737f52
ReactDOM.render(
    React.createElement(App),
    document.getElementById("app")
)
