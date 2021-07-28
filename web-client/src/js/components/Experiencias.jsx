import * as React from "react";



export const Experiencias = (props) => (
    <section className="experienceSection">
        { props.exp.map( exp =>
            <div className={"experiencias"}>
                <div className={"titulo"}> {exp.title} </div>
                <div> {exp.image}</div>
                <div> {exp.description} </div>
                <div> {exp.precio} € por persona</div>
                <div>{exp.duracion} </div>
                <div> {exp.accesibilidad} </div>

            </div>
        )}
    </section>
)
