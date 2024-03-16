import React, { useState } from 'react';
import './Usuarios.css';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Usuario 1' },
    { id: 2, nombre: 'Usuario 2' },
    { id: 3, nombre: 'Usuario 3' }
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState('');
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const handleAgregarUsuario = () => {
    const id = usuarios.length + 1;
    setUsuarios([...usuarios, { id, nombre: nuevoUsuario }]);
    setNuevoUsuario('');
  };

  const handleEliminarUsuario = id => {
    setUsuarios(usuarios.filter(usuario => usuario.id !== id));
  };

  const handleEditarUsuario = id => {
    setUsuarioEditando(id);
  };

  const handleGuardarCambios = (id, nuevoNombre) => {
    setUsuarios(
      usuarios.map(usuario =>
        usuario.id === id ? { ...usuario, nombre: nuevoNombre } : usuario
      )
    );
    setUsuarioEditando(null);
  };

  return (
    <div className="usuarios-container">
      <h1>Usuarios</h1>
      <div className="input-container">
        <input
          type="text"
          value={nuevoUsuario}
          onChange={e => setNuevoUsuario(e.target.value)}
          placeholder="Nombre de usuario"
          className="input"
        />
        <button onClick={handleAgregarUsuario} className="btn-agregar">Agregar Usuario</button>
      </div>
      <ul className="usuarios-list">
        {usuarios.map(usuario => (
          <li key={usuario.id} className="usuario-item">
            {usuario.id === usuarioEditando ? (
              <>
                <input
                  type="text"
                  defaultValue={usuario.nombre}
                  onChange={e =>
                    handleGuardarCambios(usuario.id, e.target.value)
                  }
                  className="input"
                />
                <button onClick={() => handleGuardarCambios(usuario.id, usuario.nombre)} className="btn-guardar">Guardar</button>
              </>
            ) : (
              <>
                <span>{usuario.nombre}</span>
                <button onClick={() => handleEliminarUsuario(usuario.id)} className="btn-eliminar">Eliminar</button>
                <button onClick={() => handleEditarUsuario(usuario.id)} className="btn-editar">Editar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
