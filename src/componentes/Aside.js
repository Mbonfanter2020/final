import React from "react";

export default function Aside() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="./Inicio" className="brand-link">
        <span className="brand-text font-weight-light">
          Dashboard Area Medicina
        </span>
      </a>
     
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src=" ./Imagenes/user_1177568.png"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Docente
            </a>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <li className="nav-item">
                <a href="./Inicio" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard</p>
                </a>
              </li>
            </li>
            <li className="nav-item menu-open">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Registro de Estudiante</p>
              </a>
            </li>
            <li className="nav-item menu-open">
              <a href="../dimensiones" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Registro de Dimensiones</p>
              </a>
            </li>

            <li className="nav-item menu-open">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p> Registro de Preguntas</p>
              </a>
            </li>

            <li className="nav-item menu-open">
              <a href="#" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p> Armar Encuesta</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
