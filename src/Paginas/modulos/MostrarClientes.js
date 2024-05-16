import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import NavBar from "../../Componentes/NavBar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../config/APIInvoke";
import swal from "sweetalert";

const MostrarClientes = () => {
  const [clientes, setClientes] = useState([]);

  const getClientes = async () => {
    const response = await APIInvoke.invokeGET("/programacion/clientes");
    setClientes(response.clientes);
  };

  useEffect(() => {
    getClientes();
  }, []);

  const eliminarClientes = async (e, idCliente) => {
    e.preventDefault();

    const responseDos = await APIInvoke.invokeDELETE(
      `/programacion/clientes/${idCliente}`
    );
    if (responseDos.msg === "El cliente fue eliminado") {
      const msg = "El cliente fue eliminado correctamente";
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
      getClientes();
    } else {
      const msg = "El cliente no fue eliminado correctamente";
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
          titulo={"Listado de clientes"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Clientes"}
          ruta1={"/home"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link
                  to={"/clientes/agregar"}
                  className="btn btn-block btn-success font-weight-bold"
                >
                  {" Agregar Clientes  "}
                  <i className="fa-solid fa-user-pen"></i>
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
                    <th style={{ width: "15%" }}>Nombres</th>
                    <th style={{ width: "15%" }}>Apellidos</th>
                    <th style={{ width: "10%" }}>Documento</th>
                    <th style={{ width: "15%" }}>Correo</th>
                    <th style={{ width: "15%" }}>Teléfono</th>
                    <th style={{ width: "15%" }}>Dirección</th>
                    <th style={{ width: "15%" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes &&
                    clientes.length > 0 &&
                    clientes.map((cliente, index) => (
                      <tr key={index}>
                        <td className="text-center">{cliente.nombre}</td>
                        <td className="text-center">{cliente.apellido}</td>
                        <td className="text-center">{cliente.documento}</td>
                        <td className="text-center">{cliente.correo}</td>
                        <td className="text-center">{cliente.telefono}</td>
                        <td className="text-center">{cliente.direccion}</td>
                        <td className="d-flex justify-content-around">
                          <Link
                            to={`/clientes/editar/${cliente._id}`}
                            className="btn btn-primary font-weight-bold "
                          >
                            {"Editar  "}
                            <i className="fa-solid fa-file-pen"></i>
                          </Link>
                          <button
                            onClick={(e) => eliminarClientes(e, cliente._id)}
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

export default MostrarClientes;
