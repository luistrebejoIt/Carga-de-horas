import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function EleccionRecurso({ onSelectRecurso }) {
    const [recursos, setRecursos] = useState([]);

    useEffect(() => {
        getRecursos();
    }, []);

    function getRecursos() {
        axios.get('http://localhost:8080/api/recursos')
            .then(res => setRecursos(res.data))
            .catch(err => console.error('Error getRecursos:', err));
    }

    function handleSelectRecurso(recursoId) {
        if (onSelectRecurso) {
            onSelectRecurso(recursoId);
        }
    }

    return (
        <div>
            <h2>Elección de Recurso</h2>
            {recursos.map((recurso) => (
                <li key={recurso.id}>
                    <button
                        type="button"
                        onClick={() => handleSelectRecurso(recurso.id)}>
                        {recurso.nombre} {recurso.apellido}
                    </button>
                </li>
            ))}
        </div>
    );
}