import { Component } from "react";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Topo from "./components/Topo";
import Rodape from "./components/Rodape";
import { Route, Routes, useParams } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";
import Livro from "./components/Livro";
import axios from "axios";

class App extends Component {
  state = {
    livros: []
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'>Mensagem de erro</p>"
        );
    }
  }

  //função criada, pois da forma que estava no livro não estava funcionando
  //O element em Route não recebe uma função com props. Ele deve receber um elemento React diretamente.
  //Se precisar de props, use o hook useParams dentro do componente.
  LivroWrapper = (props) => {
    const { livroSlug } = useParams();
    const livro = props?.livros?.find(livro => livro.slug === livroSlug);

    return livro ? <Livro livro={livro} /> : <NotFound />;
  }

  render() {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route index element={<Home livros={this.state.livros} />} />
            <Route path="/frontend" element={<Frontend livros={this.state.livros} />} />
            <Route path="/programacao" element={<Programacao livros={this.state.livros} />} />
            <Route path="/design" element={<Design livros={this.state.livros} />} />
            <Route path="/catalago" element={<Catalogo />} />
            <Route path="/livro/:livroSlug" element={<this.LivroWrapper livros={this.state.livros} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Rodape />
        </>
      </Router>
    );
  }
}

export default App;
