import * as React from "react";



export const Experiencias = (props) => (
    <section className="experienceSection">
        { props.exp.map( exp =>
            <div className={"experiencias"}>
                <div className={"titulo"}> {exp.title} </div>
                <div> {exp.id} </div>
                <div> <img className="imgExp" src={exp.img}/></div>
                <div className={"descriptionclass"}> {exp.description} </div>
                <div className={"precioclass"}> {exp.precio} € por persona</div>
                <div className={"duraclass"}>{exp.duracion} </div>
                <div className={"accesclass"}> {exp.accesibilidad} </div>

            </div>
        )}
    </section>
)
