import React, { useState } from 'react';
import './Categorias.css';

function Categorias() {
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: 'Categoría 1' },
    { id: 2, nombre: 'Categoría 2' },
    { id: 3, nombre: 'Categoría 3' }
  ]);

  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [categoriaEditando, setCategoriaEditando] = useState(null);

  const handleAgregarCategoria = () => {
    const id = categorias.length + 1;
    setCategorias(prevCategorias => [...prevCategorias, { id, nombre: nuevaCategoria }]);
    setNuevaCategoria('');
  };

  const handleEliminarCategoria = id => {
    setCategorias(prevCategorias => prevCategorias.filter(categoria => categoria.id !== id));
  };

  const handleEditarCategoria = id => {
    setCategoriaEditando(id);
  };

  const handleGuardarCambios = (id, nuevoNombre) => {
    setCategorias(prevCategorias =>
      prevCategorias.map(categoria =>
        categoria.id === id ? { ...categoria, nombre: nuevoNombre } : categoria
      )
    );
    setCategoriaEditando(null);
  };

  return (
    <div className="categorias-container">
      <h1 className="categorias-title">Categorías</h1>
      <div className="input-container">
        <input
          type="text"
          value={nuevaCategoria}
          onChange={e => setNuevaCategoria(e.target.value)}
          placeholder="Nombre de la categoría"
          className="input-nombre"
        />
        <button onClick={handleAgregarCategoria} className="btn-agregar">Agregar Categoría</button>
      </div>
      <ul className="categorias-list">
        {categorias.map(categoria => (
          <li key={categoria.id} className="categoria-item">
            {categoria.id === categoriaEditando ? (
              <>
                <input
                  type="text"
                  defaultValue={categoria.nombre}
                  onChange={e =>
                    handleGuardarCambios(categoria.id, e.target.value)
                  }
                  className="input-nombre"
                />
                <button onClick={() => handleGuardarCambios(categoria.id, categoria.nombre)} className="btn-guardar">Guardar</button>
              </>
            ) : (
              <>
                <span>{categoria.nombre}</span>
                <button onClick={() => handleEliminarCategoria(categoria.id)} className="btn-eliminar">Eliminar</button>
                <button onClick={() => handleEditarCategoria(categoria.id)} className="btn-editar">Editar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
