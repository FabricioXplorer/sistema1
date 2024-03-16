import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Usuarios from './Usuarios';
import Categorias from './Categorias';
import Productos from './Productos';
import Bonificaciones from './Bonificaciones';
import DetalleCompras from './DetalleCompras';
import './Inicio.css'; // Importa el archivo CSS

function Inicio() {
  return (
    <div style={{ display: 'flex' }}>
      <nav className="navbar">
        <ul>
          <li><Link to="/inicio">Inicio</Link></li>       
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/categorias">Categorías</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/bonificaciones">Bonificaciones</Link></li>
          <li><Link to="/detalle-compras">Detalle Compras</Link></li>
        </ul>
      </nav>

      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/bonificaciones" element={<Bonificaciones />} />
          <Route path="/detalle-compras" element={<DetalleCompras />} />
        </Routes>
      </div>
    </div>
  );
}

export default Inicio;
