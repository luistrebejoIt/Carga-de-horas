import React, {useState, useEffect} from 'react';
import CargaHoras from './components/formCargaHoras/CargaHoras';
import EleccionRecurso from "./components/eleccionRecurso/EleccionRecurso";

function App() {
    const [pagina, setPagina] = useState(<EleccionRecurso onSelectRecurso={handleRecursoSeleccionado} />);

    function handleRecursoSeleccionado(recursoId) {
        setPagina(<CargaHoras recursoId={recursoId} />);
    }

    return (
        <div>
            {pagina}
        </div>
    );
}

export default App;
