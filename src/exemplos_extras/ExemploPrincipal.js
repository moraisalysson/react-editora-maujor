import React, { Component } from "react";
import ExemploHome from "./ExemploHome";
import ExemploCard from "./ExemploCard";

class ExemploPrincipal extends Component {
    state = {
        tituloPagina: "Últimos lançamentos",
        dados: [
            { isbn: "978-85", titulo: "React", autor: "Maujor" },
            { isbn: "978-86", titulo: "Design UX", autor: "Will" },
            { isbn: "978-87", titulo: "Laravel para Ninjas", autor: "Jack" }
        ],
        isbn: "xxxx",
        titulo: "React",
        autor: "Maujor"
    }

    handleAlterarTitulo = () => {
        let titulo = "";
        this.state.tituloPagina === "Últimos lançamentos"
        ? (titulo = "Categoria Programação")
        : (titulo = "Últimos lançamentos")

        this.setState({ tituloPagina: titulo })
    }

    render() {
        return (
            <main>
                {/* <ExemploHome
                    isbn={this.state.isbn}
                    titulo={this.state.titulo}
                    autor={this.state.autor}
                    dados={this.state.dados}
                ><h3>Últimos Lançamentos</h3>
                </ExemploHome> */}
                <ExemploCard 
                    tituloPagina={this.state.tituloPagina}
                    dados={this.state.dados}
                    onAlterarTitulo={this.handleAlterarTitulo}
                />
            </main>
        )
    }
}

export default ExemploPrincipal;