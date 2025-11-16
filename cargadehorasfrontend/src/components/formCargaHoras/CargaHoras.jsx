import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LabelFecha from "./labelsForm/LabelFecha";

function CargaHoras() {
    const [recursos, setRecursos] = useState([]); // 🆕 Estado para guardar los recursos
    const [proyectos, setProyectos] = useState([]);
    const [tareas, setTareas] = useState([]);
    const [form, setForm] = useState({
        idRecurso: '', // 🆕 Empezar vacío
        idProyecto: '',
        idTarea: '',
        fecha: '',
        horas: ''
    });

    // 🔹 Obtener proyectos Y recursos al cargar
    useEffect(() => {
        // Cargar Proyectos
        axios.get('http://localhost:8080/api/proyectos')
            .then(res => setProyectos(res.data))
            .catch(err => console.error('Error cargando proyectos', err));

        // 🆕 Cargar Recursos
        axios.get('http://localhost:8080/api/recursos')
            .then(res => setRecursos(res.data))
            .catch(err => console.error('Error cargando recursos', err));

    }, []); // El array vacío asegura que se ejecute solo al montar

    // 🔹 Cuando seleccionás un proyecto, obtener tareas del mismo
    const handleProyectoChange = async (e) => {
        const idProyecto = e.target.value;
        setForm({ ...form, idProyecto, idTarea: '' }); // 🆕 Reiniciar tarea seleccionada

        if (idProyecto) {
            try {
                // Usamos el endpoint que creamos en el backend
                const res = await axios.get(`http://localhost:8080/api/tareas?proyecto=${idProyecto}`);
                setTareas(res.data);
            } catch (err) {
                console.error('Error cargando tareas', err);
                setTareas([]); // Limpiar tareas si hay error
            }
        } else {
            setTareas([]); // Limpiar tareas si se deselecciona el proyecto
        }
    };

    // 🔹 Enviar los datos al backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 🆕 Validación simple
        if (!form.idRecurso || !form.idProyecto || !form.idTarea || !form.fecha || !form.horas) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        try {
            await axios.post('http://localhost:8080/api/horas', form);
            alert('Horas cargadas correctamente ✅');
            // 🆕 Limpiar formulario manteniendo el recurso seleccionado
            setForm({
                ...form,
                idProyecto: '',
                idTarea: '',
                fecha: '',
                horas: ''
            });
            setTareas([]); // Limpiar dropdown de tareas
        } catch (err) {
            alert('Error al guardar las horas');
            console.error(err);
        }
    };

    const handleRecursoChange = (e) => {
        setForm({ ...form, idRecurso: e.target.value });
    };

    return (
        <div style={{ margin: '30px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Carga de horas</h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '350px', gap: '10px' }}>

                {/* 🆕 Selector de Recurso */}
                <label>Recurso:</label>
                <select onChange={handleRecursoChange} value={form.idRecurso} required>
                    <option value="">Seleccione un recurso...</option>
                    {recursos.map((r) => (
                        <option key={r.id} value={r.id}>{r.nombre} {r.apellido}</option>
                    ))}
                </select>

                <label>Proyecto:</label>
                <select onChange={handleProyectoChange} value={form.idProyecto} required>
                    <option value="">Seleccione un proyecto...</option>
                    {proyectos.map((p) => (
                        <option key={p.id} value={p.id}>{p.nombre}</option>
                    ))}
                </select>

                <label>Tarea:</label>
                <select
                    onChange={(e) => setForm({ ...form, idTarea: e.target.value })}
                    value={form.idTarea}
                    required
                    disabled={tareas.length === 0} // 🆕 Deshabilitado si no hay tareas
                >
                    <option value="">{tareas.length > 0 ? 'Seleccione una tarea...' : 'Seleccione un proyecto primero'}</option>
                    {tareas.map((t) => (
                        <option key={t.id} value={t.id}>{t.nombre}</option>
                    ))}
                </select>

                <LabelFecha onSetDate={(fecha) => setForm({ ...form, fecha })}/>

                <label>Horas:</label>
                <input
                    type="number"
                    step="0.5" // 🆕 Permitir media hora
                    min="0.5"   // 🆕 Mínimo media hora
                    value={form.horas}
                    onChange={(e) => setForm({ ...form, horas: e.target.value })}
                    required
                />

                <button type="submit" style={{ marginTop: '15px', padding: '10px', cursor: 'pointer' }}>Guardar</button>
            </form>
        </div>
    );
}

export default CargaHoras;