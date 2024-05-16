import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import NavBar from "../../Componentes/NavBar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../config/APIInvoke";
//import swal from "sweetalert";

const EditarClientes = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const actualizarClientes = async (e) => {
    e.preventDefault();
    await APIInvoke.invokePUT(`/programacion/clientes/${id}`, {
      nombre: nombre,
      apellido: apellido,
      documento: documento,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    });
    navigate("/clientes");
  };

  useEffect(() => {
    getClientesId();
    // eslint-disable-next-line
  }, []);

  const getClientesId = async () => {
    const resultado = await APIInvoke.invokePUT(`/programacion/clientes/${id}`);
    setNombre(resultado.nombre);
    setApellido(resultado.apellido);
    setDocumento(resultado.documento);
    setCorreo(resultado.correo);
    setTelefono(resultado.telefono);
    setDireccion(resultado.direccion);
  };
  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper pb-2">
        <ContentHeader
          titulo={"Editar clientes"}
          breadCrumb1={"Listado de clientes"}
          breadCrumb2={"Editar"}
          ruta1={"/clientes/editar"}
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
              <form onSubmit={actualizarClientes}>
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
                      onChange={(e) => setNombre(e.target.value)}
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
                      onChange={(e) => setApellido(e.target.value)}
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
                      onChange={(e) => setDocumento(e.target.value)}
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
                      onChange={(e) => setCorreo(e.target.value)}
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
                      onChange={(e) => setTelefono(e.target.value)}
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
                      onChange={(e) => setDireccion(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="card-footer bg-white ">
                  <button type="submit" className="btn btn-info">
                    Editar
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

export default EditarClientes;
