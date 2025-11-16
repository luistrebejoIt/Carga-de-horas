import React, {useState, useEffect} from "react";
import axios from "axios";
export default function LabelTarea(recursoId, proyectoId) {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        getTareas()
    }, [proyectoId]);

    function getTareas(){
        axios.get('http://localhost:8080/api/recurso/' + recursoId + '/proyecto/' + proyectoId + '/tareas')
            .then(response => setTareas(response.data))
            .catch(err => console.error('Error getTareasPorProyectoYRecurso:', err));
    }

    return (
        <div>
            <label>Tarea:</label>
            <select required>
                <option value="">{tareas.length > 0 ? 'Seleccione una tarea...' : 'Seleccione un proyecto primero'}</option>
                {tareas.map((tarea) => (
                    <option key={tarea.id} value={tarea.id}>{tarea.nombre}</option>
                ))}
            </select>
        </div>
    );
}