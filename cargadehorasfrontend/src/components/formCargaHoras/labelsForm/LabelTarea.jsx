import React, {useState, useEffect} from "react";
import axios from "axios";
export default function LabelTarea({recursoId = '', proyectoId = '', onSelectTarea}) {
    const [tareas, setTareas] = useState([]);
    const [tareaSeleccionada, setTareaSeleccionada] = useState("");

    useEffect(() => {
        if (proyectoId !== '') {
            getTareas();
        } else {
            setTareaSeleccionada("");
            setTareas([]);
        }
    }, [proyectoId]);

    function getTareas(){
        axios.get('http://localhost:8080/api/tareas/recurso/' + recursoId + '/proyecto/' + proyectoId)
            .then(response => setTareas(response.data))
            .catch(err => console.error('Error getTareasPorProyectoYRecurso:', err));
    }

    function handleTareaChange(event){
        if (onSelectTarea) {
            setTareaSeleccionada(event.target.value);
            onSelectTarea(event.target.value);
        }
    }

    return (
        <div>
            <label>Tarea:</label>
            <select value={tareaSeleccionada} onChange={handleTareaChange} disabled={proyectoId === ''} required>
                <option value="">{tareas.length > 0 ? 'Seleccione una tarea...' : 'Seleccione un proyecto primero'}</option>
                {tareas.map((tarea) => (
                    <option key={tarea.id} value={tarea.id}>{tarea.nombre}</option>
                ))}
            </select>
        </div>
    );
}