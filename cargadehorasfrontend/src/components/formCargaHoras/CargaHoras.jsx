import React, {useEffect, useState} from 'react';
import LabelProyecto from "./labelsForm/LabelProyecto";
import LabelTarea from "./labelsForm/LabelTarea";
import LabelFecha from "./labelsForm/LabelFecha";
import axios from "axios";

function CargaHoras({recursoId = ''}) {
    const [proyecto, setProyecto]  = useState('');
    const [tarea, setTarea]  = useState('');
    const [fecha, setFecha]  = useState('');

    async function sendForm(event) {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/horas',
                {
                    recursoId: recursoId,
                    proyectoId: proyecto,
                    tareaId: tarea,
                    fecha: fecha,
                    horas: parseFloat(event.target.horas.value)
                });
            alert('Horas cargadas correctamente ✅');
            event.target.reset();
            setProyecto('');
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    }

    function LabelHoras() {
        return (
            <div>
                <label>Horas:</label>
                <input
                    name="horas"
                    type="number"
                    disabled={proyecto === '' && tarea === ''}
                    step="0.5" // 🆕 Permitir media hora
                    min="0.5"   // 🆕 Mínimo media hora
                    max="20"     // 🆕 Máximo 8 horas
                    required
                />
            </div>
        );
    }

    return (
        <div style={{ margin: '30px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Carga de horas</h2>

            <form onSubmit={sendForm} style={{ display: 'flex', flexDirection: 'column', maxWidth: '350px', gap: '10px' }}>
                <LabelProyecto recursoId={recursoId} onSelectProyect={(proyectoId) => setProyecto(proyectoId)} />
                <LabelTarea recursoId={recursoId} proyectoId={proyecto} onSelectTarea={(tareaId) => setTarea(tareaId)} />
                <LabelFecha camposCargados={tarea !== '' && proyecto !== ''} onSelectFecha={(fecha) => setFecha(fecha)} />
                <LabelHoras />
                <button type="submit" style={{ marginTop: '15px', padding: '10px', cursor: 'pointer' }}>Guardar</button>
            </form>
        </div>
    );
}

export default CargaHoras;