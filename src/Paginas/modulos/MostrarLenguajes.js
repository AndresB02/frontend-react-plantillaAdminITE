import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import NavBar from "../../Componentes/NavBar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../config/APIInvoke";
import swal from "sweetalert";

const MostrarProgramas = () => {
  const [lenguajes, setLenguajes] = useState([]);

  const getProgramas = async () => {
    const response = await APIInvoke.invokeGET("/programacion/lenguajes/");
    setLenguajes(response.lenguajes);
  };

  useEffect(() => {
    getProgramas();
  }, []);

  const eliminarProgramas = async (e, idPrograma) => {
    e.preventDefault();

    const responseDos = await APIInvoke.invokeDELETE(
      `/programacion/lenguajes/${idPrograma}`
    );
    if (responseDos.msg === "El lenguaje de programación fue eliminado") {
      const msg = "El lenguaje de programación fue eliminado correctamente";
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
      getProgramas();
    } else {
      const msg = "El lenguaje de programación no fue eliminado correctamente";
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
    }
  };

  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listado de Lenguajes de Programación"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Lenguajes"}
          ruta1={"/home"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link
                  to={"/lenguajes/agregar"}
                  className="btn btn-block btn-success font-weight-bold"
                >
                  {" Agregar Lenguajes  "}
                  <i className="fa-solid fa-code"></i>
                </Link>
              </h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-times"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-items"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr className="text-center">
                    <th style={{ width: "15%" }}>Nombre</th>
                    <th style={{ width: "20%" }}>Tipo</th>
                    <th style={{ width: "10%" }}>Duración</th>
                    <th style={{ width: "10%" }}>Entidad</th>
                    <th style={{ width: "10%" }}>Valor</th>
                    <th style={{ width: "10%" }}>Estado</th>
                    <th style={{ width: "15%" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {lenguajes.map((lenguaje, index) => (
                    <tr key={index}>
                      <td className="text-center">{lenguaje.nombre}</td>
                      <td className="text-center">{lenguaje.tipo}</td>
                      <td className="text-center">{lenguaje.duracion}</td>
                      <td className="text-center">{lenguaje.entidad}</td>
                      <td className="text-center">{lenguaje.valor}</td>
                      <td className="text-center">{lenguaje.estado}</td>
                      <td className="d-flex justify-content-around">
                        <Link
                          to={`/lenguajes/editar/${lenguaje._id}`}
                          className="btn btn-primary font-weight-bold "
                        >
                          {"Editar  "}
                          <i className="fa-solid fa-file-pen"></i>
                        </Link>
                        <button
                          onClick={(e) => eliminarProgramas(e, lenguaje._id)}
                          className="btn btn-danger font-weight-bolder"
                        >
                          {"Eliminar  "}
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MostrarProgramas;
