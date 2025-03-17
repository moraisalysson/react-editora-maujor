import React from "react";

const ExemploCard = (props) => {
    return (
        <>
            <h3 className="titPagina">{props.tituloPagina}</h3>
            <button
                type="button"
                className="btn"
                onClick={props.onAlterarTitulo}>
                Alterar título da página
            </button>
            {props.dados.map((item, i) =>
                <p key={i}>
                    ISBN: {item.isbn} | 
                    Título: {item.titulo} | 
                    Autor: {item.autor} 
                </p>
            )}
        </>
    )
}

export default ExemploCard;