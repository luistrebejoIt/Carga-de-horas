package com.psa.cargahoras.service;

import com.psa.cargahoras.dtos.TareaDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TareasService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String urlTareas =
            "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/" +
                    "32c8fe38-22a6-4fbb-b461-170dfac937e4/tareas-api/1.0.0/m/tareas";

    public List<TareaDTO> obtenerTareasPorProyecto(String proyectoId) {
        ResponseEntity<TareaDTO[]> response = restTemplate.getForEntity(urlTareas, TareaDTO[].class);
        TareaDTO[] tareas = response.getBody();

        if (tareas == null) {
            return List.of(); // Devuelve lista vacía si no hay respuesta
        }

        // Filtramos las tareas por el ID del proyecto
        // Comparamos con ambos campos por la inconsistencia del mock
        return Arrays.stream(tareas)
                .filter(t -> (t.getProyectoId() != null && t.getProyectoId().equals(proyectoId)) ||
                        (t.getProyectold() != null && t.getProyectold().equals(proyectoId)) )
                .collect(Collectors.toList());
    }
}