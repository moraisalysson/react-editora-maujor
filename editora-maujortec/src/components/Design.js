import React from "react";
import { Link } from "react-router-dom";

const Design = ({ livros }) =>  (  
    <main className="principal">
    <h2>Categoria Design</h2>

    {livros
        .filter(livro => livro.categoria === "design")
        .map(livro =>
            <div className="card" key={livro.id}>
                <div className="thumb">
                    <img
                        src={`/imagens/capas/${livro.id}.jpg`}
                        alt={`Thumb do livro ${livro.titulo}`}
                    />
                </div>

                <div className="detalhes">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.descricao.slice(0, 130) + "..."}</p>
                    <Link to={`/livro/${livro.slug}`}>
                        <p>Leia mais &gt;</p>
                    </Link>
                </div>
            </div>
        )
    }
</main>
);


export default Design;