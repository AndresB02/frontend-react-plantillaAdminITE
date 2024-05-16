import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import NavBar from "../../Componentes/NavBar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../config/APIInvoke";
import swal from "sweetalert";

const AgregarClientes = () => {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    correo: "",
    telefono: "",
    direccion: "",
  });

  const { nombre, apellido, documento, correo, telefono, direccion } = clientes;

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onChange = (e) => {
    setClientes({
      ...clientes,
      [e.target.name]: e.target.value,
    });
  };

  const CrearClientes = async () => {
    const data = {
      nombre: clientes.nombre,
      apellido: clientes.apellido,
      documento: clientes.documento,
      correo: clientes.correo,
      telefono: clientes.telefono,
      direccion: clientes.direccion,
    };
    const response = await APIInvoke.invokePOST("/programacion/clientes", data);
    const idClientes = response._id;
    if (idClientes === "") {
      const msg = "Hubo un error al agregar un cliente ";
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
      navigate("/clientes");
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
      setClientes({
        nombre: "",
        apellido: "",
        documento: "",
        correo: "",
        telefono: "",
        direccion: "",
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    CrearClientes();
  };

  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper pb-2">
        <ContentHeader
          titulo={"Agregar clientes"}
          breadCrumb1={"Listado de clientes"}
          breadCrumb2={"Agregar"}
          ruta1={"/clientes/agregar"}
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
                      placeholder="Ingrese los nombres del cliente"
                      value={nombre}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="apellido">Apellidos</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellido"
                      name="apellido"
                      placeholder="Ingrese los nombres del cliente"
                      value={apellido}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="documento">Documento</label>
                    <input
                      type="number"
                      className="form-control"
                      id="documento"
                      name="documento"
                      placeholder="Ingrese los nombres del cliente"
                      value={documento}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="correo">Correo</label>
                    <input
                      type="email"
                      className="form-control"
                      id="correo"
                      name="correo"
                      placeholder="Ingrese los nombres del cliente"
                      value={correo}
                      onChange={onChange}
                      required
                    />
                  </div>
                  {/*  */}
                </div>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                      type="number"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      placeholder="Ingrese los nombres del cliente"
                      value={telefono}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="direccion">Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      id="direccion"
                      name="direccion"
                      placeholder="Ingrese los nombres del cliente"
                      value={direccion}
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
                  <a href="/clientes">
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

export default AgregarClientes;
