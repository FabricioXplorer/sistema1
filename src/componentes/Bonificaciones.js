// Bonificaciones.js

import React, { useState } from 'react';
import './Bonificaciones.css';

function Bonificaciones() {
  const [bonificaciones, setBonificaciones] = useState([
    { id: 1, nombre: 'Bonificación 1', cantidad: 5 },
    { id: 2, nombre: 'Bonificación 2', cantidad: 10 },
    { id: 3, nombre: 'Bonificación 3', cantidad: 15 }
  ]);

  const [nuevaBonificacion, setNuevaBonificacion] = useState('');
  const [nuevaCantidad, setNuevaCantidad] = useState('');
  const [bonificacionEditando, setBonificacionEditando] = useState(null);

  const handleAgregarBonificacion = () => {
    const id = bonificaciones.length + 1;
    setBonificaciones([...bonificaciones, { id, nombre: nuevaBonificacion, cantidad: parseInt(nuevaCantidad) }]);
    setNuevaBonificacion('');
    setNuevaCantidad('');
  };

  const handleEliminarBonificacion = id => {
    setBonificaciones(bonificaciones.filter(bonificacion => bonificacion.id !== id));
  };

  const handleEditarBonificacion = id => {
    setBonificacionEditando(id);
  };

  const handleGuardarCambios = (id, nuevoNombre, nuevaCantidad) => {
    setBonificaciones(
      bonificaciones.map(bonificacion =>
        bonificacion.id === id ? { ...bonificacion, nombre: nuevoNombre, cantidad: parseInt(nuevaCantidad) } : bonificacion
      )
    );
    setBonificacionEditando(null);
  };

  return (
    <div className="bonificaciones-container">
      <h1>Bonificaciones</h1>
      <div className="bonificaciones-form">
        <input
          type="text"
          value={nuevaBonificacion}
          onChange={e => setNuevaBonificacion(e.target.value)}
          placeholder="Nombre de la bonificación"
        />
        <input
          type="number"
          value={nuevaCantidad}
          onChange={e => setNuevaCantidad(e.target.value)}
          placeholder="Cantidad de la bonificación"
        />
        <button onClick={handleAgregarBonificacion}>Agregar Bonificación</button>
      </div>
      <ul className="bonificaciones-list">
        {bonificaciones.map(bonificacion => (
          <li key={bonificacion.id} className="bonificaciones-item">
            {bonificacion.id === bonificacionEditando ? (
              <>
                <input
                  type="text"
                  defaultValue={bonificacion.nombre}
                  onChange={e =>
                    handleGuardarCambios(bonificacion.id, e.target.value, bonificacion.cantidad)
                  }
                />
                <input
                  type="number"
                  defaultValue={bonificacion.cantidad}
                  onChange={e =>
                    handleGuardarCambios(bonificacion.id, bonificacion.nombre, e.target.value)
                  }
                />
                <button onClick={() => handleGuardarCambios(bonificacion.id, bonificacion.nombre, bonificacion.cantidad)}>Guardar</button>
              </>
            ) : (
              <>
                <span>{bonificacion.nombre} - Cantidad: {bonificacion.cantidad}</span>
                <div>
                  <button className="editar" onClick={() => handleEditarBonificacion(bonificacion.id)}>Editar</button>
                  <button className="eliminar" onClick={() => handleEliminarBonificacion(bonificacion.id)}>Eliminar</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default Bonificaciones;
