import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function LabelProyecto({recursoId = '', onSelectProyect}) {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        getProyectos();
    }, []);

    function getProyectos(){
        axios.get('http://localhost:8080/api/proyectos/recurso/' + recursoId)
            .then(res => setProyectos(res.data))
            .catch(err => console.error('Error getProyectosPorRecurso:', err));
    }

    function handleProyectoChange(event) {
        if (onSelectProyect) {
            onSelectProyect(event.target.value);
        }
    }

    return (
        <div>
            <label>Proyecto:</label>
            <select onChange={handleProyectoChange} required>
                <option value="">Seleccione un proyecto...</option>
                {proyectos.map((proyecto) => (
                    <option key={proyecto.id} value={proyecto.id}>{proyecto.nombre}</option>
                ))}
            </select>
        </div>
    )
}