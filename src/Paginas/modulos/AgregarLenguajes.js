import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import NavBar from "../../Componentes/NavBar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../config/APIInvoke";
import swal from "sweetalert";

const AgregarLenguajes = () => {
  const navigate = useNavigate();
  const [programas, setPorgramas] = useState({
    nombre: "",
    tipo: "",
    duracion: "",
    entidad: "",
    valor: "",
    estado: "",
  });

  const { nombre, tipo, duracion, entidad, valor, estado } = programas;

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onChange = (e) => {
    setPorgramas({
      ...programas,
      [e.target.name]: e.target.value,
    });
  };

  const CrearProgramas = async () => {
    const data = {
      nombre: programas.nombre,
      tipo: programas.tipo,
      duracion: programas.duracion,
      entidad: programas.entidad,
      valor: programas.valor,
      estado: programas.estado,
    };
    const response = await APIInvoke.invokePOST(
      "/programacion/lenguajes",
      data
    );
    const idProgramas = response._id;
    if (idProgramas === "") {
      const msg = "Hubo un error al agregar un Lenguaje de programación ";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      navigate("/lenguajes");
      const msg = "El cliente fue agregado con éxito ";
      swal({
        title: "Informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-success",
            closeModal: true,
          },
        },
      });
      setPorgramas({
        nombre: "",
        tipo: "",
        duracion: "",
        entidad: "",
        valor: "",
        estado: "",
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    CrearProgramas();
  };

  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper pb-2">
        <ContentHeader
          titulo={"Agregar Lenguajes"}
          breadCrumb1={"Listado de Lenguajes de Programación"}
          breadCrumb2={"Agregar"}
          ruta1={"/lenguajes/agregar"}
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
              <form onSubmit={onSubmit}>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombres</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingrese el nombre del lenguage de programación"
                      value={nombre}
                      onChange={onChange}
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
                      onChange={onChange}
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
                      onChange={onChange}
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
                      onChange={onChange}
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
                      onChange={onChange}
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
                      placeholder="Ingrese el estado del curso"
                      value={estado}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-footer bg-white ">
                  <button type="submit" className="btn btn-info">
                    Crear
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

export default AgregarLenguajes;
