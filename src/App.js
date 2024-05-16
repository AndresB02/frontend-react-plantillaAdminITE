import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Paginas/auth/Login";
import Registro from "./Paginas/auth/Registro";
import Home from "./Home";
import MostrarClientes from "./Paginas/modulos/MostrarClientes";
import AgregarClientes from "./Paginas/modulos/AgregarClientes";
import EditarClientes from "./Paginas/modulos/EditarClientes";
import AgregarLenguajes from "./Paginas/modulos/AgregarLenguajes";
import MostrarProgramas from "./Paginas/modulos/MostrarLenguajes";
import EditarLenguajes from "./Paginas/modulos/EditarLenguajes";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />}></Route>
            <Route path="/Registro" exact element={<Registro />}></Route>
            <Route path="/home" exact element={<Home />}></Route>
            <Route path="/clientes" exact element={<MostrarClientes />}></Route>
            <Route
              path="/lenguajes"
              exact
              element={<MostrarProgramas />}
            ></Route>
            <Route
              path="/clientes/agregar"
              exact
              element={<AgregarClientes />}
            ></Route>
            <Route
              path="/lenguajes/agregar"
              exact
              element={<AgregarLenguajes />}
            ></Route>
            <Route
              path="/clientes/editar/:id"
              exact
              element={<EditarClientes />}
            ></Route>
            <Route
              path="/lenguajes/editar/:id"
              exact
              element={<EditarLenguajes />}
            ></Route>
          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
