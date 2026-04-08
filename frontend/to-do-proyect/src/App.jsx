import React, { useEffect, useState } from "react";
import axios from "axios";
import TareaForm from "./components/TareaForm";

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/tareas")
      .then(res => setTareas(res.data))
      .catch(err => console.error(err));
  }, []);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TareaForm onTareaCreada={agregarTarea} />
      <ul>
        {tareas.map(t => (
          <li key={t.id}>
            {t.titulo} - {t.descripcion} [{t.completada ? "✔️" : "❌"}]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
