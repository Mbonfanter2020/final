import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./login/Login";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import Registro from "./login/Registro";
import LayoutPublic from "./layout/LayoutPublic";
import LayoutEstudiante from "./layout/LayoutEstudiante";
import LayoutAdmin from "./layout/LayoutAdmin";
import Dimensiones from "./Dimensiones/dimensiones";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Inicio" element={<LayoutPublic />} />
          <Route index element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/Admin" element={<LayoutAdmin />} />
            <Route index element={<Login />} />
            <Route path="/Dimensiones" element={<Dimensiones/>} />
            
              <Route path="/Estudiante" element={<LayoutEstudiante />} />
              <Route index element={<Login />} />
           
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
