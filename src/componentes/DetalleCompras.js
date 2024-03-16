import React, { useState } from 'react';
import './DetalleCompras.css';

function DetalleCompras() {
  const [detalles, setDetalles] = useState([
    { id: 1, producto: 'Producto A', cantidad: 2, total: 20 },
    { id: 2, producto: 'Producto B', cantidad: 1, total: 10 },
    { id: 3, producto: 'Producto C', cantidad: 3, total: 30 }
  ]);

  const [nuevoProducto, setNuevoProducto] = useState('');
  const [nuevaCantidad, setNuevaCantidad] = useState('');
  const [nuevoTotal, setNuevoTotal] = useState('');
  const [detalleEditando, setDetalleEditando] = useState(null);

  const handleAgregarDetalle = () => {
    const id = detalles.length + 1;
    setDetalles(prevDetalles => [
      ...prevDetalles,
      { id, producto: nuevoProducto, cantidad: parseInt(nuevaCantidad), total: parseInt(nuevoTotal) }
    ]);
    setNuevoProducto('');
    setNuevaCantidad('');
    setNuevoTotal('');
  };

  const handleEliminarDetalle = id => {
    setDetalles(prevDetalles => prevDetalles.filter(detalle => detalle.id !== id));
  };

  const handleEditarDetalle = id => {
    setDetalleEditando(id);
  };

  const handleGuardarCambios = (id, nuevoProducto, nuevaCantidad, nuevoTotal) => {
    setDetalles(prevDetalles =>
      prevDetalles.map(detalle =>
        detalle.id === id
          ? { ...detalle, producto: nuevoProducto, cantidad: parseInt(nuevaCantidad), total: parseInt(nuevoTotal) }
          : detalle
      )
    );
    setDetalleEditando(null);
  };

  return (
    <div className="detalle-compras-container">
      <h1>Detalles de Compras</h1>
      <div className="input-container">
        <input
          type="text"
          value={nuevoProducto}
          onChange={e => setNuevoProducto(e.target.value)}
          placeholder="Producto"
          className="input"
        />
        <input
          type="number"
          value={nuevaCantidad}
          onChange={e => setNuevaCantidad(e.target.value)}
          placeholder="Cantidad"
          className="input"
        />
        <input
          type="number"
          value={nuevoTotal}
          onChange={e => setNuevoTotal(e.target.value)}
          placeholder="Total"
          className="input"
        />
        <button onClick={handleAgregarDetalle} className="btn-agregar">Agregar Detalle</button>
      </div>
      <ul className="detalle-compras-list">
        {detalles.map(detalle => (
          <li key={detalle.id} className="detalle-compras-item">
            {detalle.id === detalleEditando ? (
              <>
                <input
                  type="text"
                  defaultValue={detalle.producto}
                  onChange={e =>
                    handleGuardarCambios(detalle.id, e.target.value, detalle.cantidad, detalle.total)
                  }
                  className="input"
                />
                <input
                  type="number"
                  defaultValue={detalle.cantidad}
                  onChange={e =>
                    handleGuardarCambios(detalle.id, detalle.producto, e.target.value, detalle.total)
                  }
                  className="input"
                />
                <input
                  type="number"
                  defaultValue={detalle.total}
                  onChange={e =>
                    handleGuardarCambios(detalle.id, detalle.producto, detalle.cantidad, e.target.value)
                  }
                  className="input"
                />
                <button onClick={() => handleGuardarCambios(detalle.id, detalle.producto, detalle.cantidad, detalle.total)} className="btn-guardar">Guardar</button>
              </>
            ) : (
              <>
                <span>{detalle.producto} - Cantidad: {detalle.cantidad} - Total: {detalle.total}</span>
                <button onClick={() => handleEliminarDetalle(detalle.id)} className="btn-eliminar">Eliminar</button>
                <button onClick={() => handleEditarDetalle(detalle.id)} className="btn-editar">Editar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetalleCompras;
