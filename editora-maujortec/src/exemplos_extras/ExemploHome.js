import React from "react";

const ExemploHome = (props) => {
    return (
        <>
            {props.children}
            <p>ISBN: {props.isbn}</p>
            <p>Titulo: {props.titulo}</p>
            <p>Autor: {props.autor}</p>

            {props.dados.map((item, i) => (
                <div key={i}>
                    <p>ISBN: {props.dados[i].isbn}</p>
                    <p>Titulo: {props.dados[i].titulo}</p>
                    <p>Autor: {props.dados[i].autor}</p>
                    {i+1}
                    <p>ISBN:  {item.isbn}</p>
                    <p>Titulo: {item.titulo}</p>
                    <p>Autor: {item.autor}</p>
                </div>
            ))}
        </>
    )
}

export default ExemploHome;