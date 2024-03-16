import React, { useState } from 'react';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 30 }
  ]);

  const [nuevoProducto, setNuevoProducto] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState('');
  const [productoEditando, setProductoEditando] = useState(null);

  const handleAgregarProducto = () => {
    const id = productos.length + 1;
    setProductos([...productos, { id, nombre: nuevoProducto, precio: parseFloat(nuevoPrecio) }]);
    setNuevoProducto('');
    setNuevoPrecio('');
  };

  const handleEliminarProducto = id => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  const handleEditarProducto = id => {
    setProductoEditando(id);
  };

  const handleGuardarCambios = (id, nuevoNombre, nuevoPrecio) => {
    setProductos(
      productos.map(producto =>
        producto.id === id ? { ...producto, nombre: nuevoNombre, precio: parseFloat(nuevoPrecio) } : producto
      )
    );
    setProductoEditando(null);
  };

  return (
    <div className="productos-container">
      <h1>Productos</h1>
      <div className="input-container">
        <input
          type="text"
          value={nuevoProducto}
          onChange={e => setNuevoProducto(e.target.value)}
          placeholder="Nombre del producto"
          className="input"
        />
        <input
          type="number"
          value={nuevoPrecio}
          onChange={e => setNuevoPrecio(e.target.value)}
          placeholder="Precio del producto"
          className="input"
        />
        <button onClick={handleAgregarProducto} className="btn-agregar">Agregar Producto</button>
      </div>
      <ul className="productos-list">
        {productos.map(producto => (
          <li key={producto.id} className="productos-item">
            {producto.id === productoEditando ? (
              <>
                <input
                  type="text"
                  defaultValue={producto.nombre}
                  onChange={e =>
                    handleGuardarCambios(producto.id, e.target.value, producto.precio)
                  }
                  className="input"
                />
                <input
                  type="number"
                  defaultValue={producto.precio}
                  onChange={e =>
                    handleGuardarCambios(producto.id, producto.nombre, e.target.value)
                  }
                  className="input"
                />
                <button onClick={() => handleGuardarCambios(producto.id, producto.nombre, producto.precio)} className="btn-guardar">Guardar</button>
              </>
            ) : (
              <>
                <span>{producto.nombre} - ${producto.precio}</span>
                <button onClick={() => handleEliminarProducto(producto.id)} className="btn-eliminar">Eliminar</button>
                <button onClick={() => handleEditarProducto(producto.id)} className="btn-editar">Editar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
