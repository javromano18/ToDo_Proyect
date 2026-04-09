import React, { useState } from "react";
import axios from "axios";
import "../styles/TareaForm.css"; // Importamos el CSS

function TareaForm({ onTareaCreada }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [completada, setCompletada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = { titulo, descripcion, completada };

    axios.post("http://localhost:8080/api/tareas", nuevaTarea)
  .then(res => {
    onTareaCreada(res.data); // refresca desde el backend
    setTitulo("");
    setDescripcion("");
    setCompletada(false);
  })
  .catch(err => console.error(err));
  };

  return (
    <form className="tarea-form" onSubmit={handleSubmit}>
      <h2>Crear nueva tarea</h2>

      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            checked={completada}
            onChange={(e) => setCompletada(e.target.checked)}
          />
          Completada
        </label>
      </div>

      <button type="submit" className="btn">Guardar</button>
    </form>
  );
}

export default TareaForm;
