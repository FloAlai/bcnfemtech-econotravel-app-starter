import * as React from "react";
import Marina from "./assets/img/ImgQuienesSomos.jpg";


export const QuienesSomos = () => <section className="quienessomos">
 <h1> Quienes Somos</h1>

 <h2>Mision</h2>
 <p>Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña.

  Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.
 </p>
 <h3>Contacto</h3>
 <img src={Marina} alt="imgMarina"/>
 <p className={"contactoestilo"}>
  Teléfono: 93 000 00 00
  <br/>
  Correo: info@econotravel.com
  <br/>
  Dirección: Carrer dels Viatgers, 28, 08000 Barcelona
 </p>

</section>

