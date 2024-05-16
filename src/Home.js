import React from "react";
import { Link } from "react-router-dom";
import ContentHeader from "./Componentes/ContentHeader";
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/NavBar";
import SidebarContainer from "./Componentes/SidebarContainer";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Dashboard"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Dashboard"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Clientes</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <Link to={"/clientes"} className="small-box-footer">
                    Ver Clientes <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>Lenguajes</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <Link to={"/lenguajes"} className="small-box-footer">
                    Ver Cursos <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-primary">
                  <div className="inner">
                    <h3>Usuarios</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <Link to={"/usuarios"} className="small-box-footer">
                    Ver Usuarios <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
