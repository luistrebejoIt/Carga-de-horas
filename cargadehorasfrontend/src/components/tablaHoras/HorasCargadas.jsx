import axios from 'axios';
export default function HorasCargadas() {
    function getHorasCargadas() {
        axios.get('http://localhost:8080/api/horasCargadas')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the hours!', error);
            });
    }

    return (
        <div>
            <div id="1">
                <h3>Lunes</h3>
            </div>
            <div id="2">
                <h3>Martes</h3>
            </div>
            <div id="3">
                <h3>Miércoles</h3>
            </div>
            <div id="4">
                <h3>Jueves</h3>
            </div>
            <div id="5">
                <h3>Viernes</h3>
            </div>
            <div id="6">
                <h3>Sábado</h3>
            </div>
            <div id="0">
                <h3>Domingo</h3>
            </div>
        </div>


    );
}