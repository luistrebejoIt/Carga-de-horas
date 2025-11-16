import React, { useState, useEffect } from "react";
import {selectOptions} from "@testing-library/user-event/dist/select-options";

export default function LabelFecha({camposCargados = false, onSelectFecha}) {
    const hoy = new Date();
    const [fechaSeleccionada, setFechaSeleccionada] = useState(hoy.toISOString().split('T')[0]);

    useEffect(() => {
        if (!camposCargados) {
            setFechaSeleccionada(hoy.toISOString().split('T')[0]);
        }
    }, [camposCargados]);

    useEffect(() => {
        if (onSelectFecha){
            onSelectFecha(fechaSeleccionada);
        }
    }, [fechaSeleccionada])

    function getDiaLunes() {
        let lunes = hoy.getDate() - hoy.getDay() + 1;
        let date = new Date(hoy.getFullYear(), hoy.getMonth(), lunes)
        return date.toISOString().split('T')[0];
    }

    function getDiaDomingo() {
        let domingo = (hoy.getDate() + (7 - hoy.getDay()));
        let date = new Date(hoy.getFullYear(), hoy.getMonth(), domingo)
        return date.toISOString().split('T')[0];
    }

    return (
        <div>
            <label>Fecha</label>
            <input
                type="date"
                disabled={!camposCargados}
                value={fechaSeleccionada}
                min={getDiaLunes()}
                max={getDiaDomingo()}
                onChange={(e) => setFechaSeleccionada(e.target.value)}
                required
            />
        </div>
    );
}