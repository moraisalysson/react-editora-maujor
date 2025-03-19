import { Component } from "react";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Topo from "./components/Topo";
import Rodape from "./components/Rodape";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/programacao" element={<Programacao />} />
            <Route path="/design" element={<Design />} />
            <Route path="/catalago" element={<Catalogo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Rodape />
        </>
      </Router>
    );
  }
}

export default App;
