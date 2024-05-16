import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import NavBar from "../../Componentes/NavBar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../config/APIInvoke";
//import swal from "sweetalert";

const EditarLenguajes = () => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [duracion, setDuracion] = useState("");
  const [entidad, setEntidad] = useState("");
  const [valor, setValor] = useState("");
  const [estado, setEstado] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const actualizarLenguajes = async (e) => {
    e.preventDefault();
    await APIInvoke.invokePUT(`/programacion/lenguajes/${id}`, {
      nombre: nombre,
      tipo: tipo,
      duracion: duracion,
      entidad: entidad,
      valor: valor,
      estado: estado,
    });
    navigate("/lenguajes");
  };

  useEffect(() => {
    getLenguajesId();
    // eslint-disable-next-line
  }, []);

  const getLenguajesId = async () => {
    const resultado = await APIInvoke.invokePUT(
      `/programacion/lenguajes/${id}`
    );
    setNombre(resultado.nombre);
    setTipo(resultado.tipo);
    setDuracion(resultado.duracion);
    setEntidad(resultado.entidad);
    setValor(resultado.valor);
    setEstado(resultado.estado);
  };
  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper pb-2">
        <ContentHeader
          titulo={"Editar Lenguajes de Programación"}
          breadCrumb1={"Listado de Lenguajes de Programación"}
          breadCrumb2={"Editar"}
          ruta1={"/lenguajes/editar"}
        />
        <section className="container">
          {/*  */}
          <div className="card">
            {/*  */}
            <div className="card-header">
              {/*  */}
              <div className="card-tools">
                {/*  */}
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-times"></i>
                </button>
                {/*  */}
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-items"></i>
                </button>
                {/*  */}
              </div>
              {/*  */}
            </div>

            <div className="card-body">
              {/*  */}
              <form onSubmit={actualizarLenguajes}>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingrese el nombre del lenguaje de programación"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="tipo">Tipo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tipo"
                      name="tipo"
                      placeholder="Ingrese el tipo de lenguaje de programación"
                      value={tipo}
                      onChange={(e) => setTipo(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="duracion">Duración</label>
                    <input
                      type="text"
                      className="form-control"
                      id="duracion"
                      name="duracion"
                      placeholder="Ingrese la duración del curso"
                      value={duracion}
                      onChange={(e) => setDuracion(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="entidad">Entidad</label>
                    <input
                      type="text"
                      className="form-control"
                      id="entidad"
                      name="entidad"
                      placeholder="Ingrese la entidad que dictara el curso"
                      value={entidad}
                      onChange={(e) => setEntidad(e.target.value)}
                      required
                    />
                  </div>
                  {/*  */}
                </div>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="valor">Valor</label>
                    <input
                      type="number"
                      className="form-control"
                      id="valor"
                      name="valor"
                      placeholder="Ingrese el valor del curso"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="estado">Estado</label>
                    <input
                      type="text"
                      className="form-control"
                      id="estado"
                      name="estado"
                      placeholder="Ingrese los nombres del cliente"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-footer bg-white ">
                  <button type="submit" className="btn btn-info">
                    Editar
                  </button>
                  <a href="/lenguajes">
                    <button type="button" className="btn btn-danger">
                      Cancelar
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EditarLenguajes;
