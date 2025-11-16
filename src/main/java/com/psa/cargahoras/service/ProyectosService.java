package com.psa.cargahoras.service;

import com.psa.cargahoras.dtos.ProyectoDTO; // 🆕 Importar DTO
import com.psa.cargahoras.dtos.TareaDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@Service
public class ProyectosService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String urlProyectos =
            "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/" +
                    "32c8fe38-22a6-4fbb-b461-170dfac937e4/proyectos-api/1.0.0/m/proyectos";

    public ProyectoDTO[] obtenerProyectos() { // 🆕 Devolver array de DTO
        ResponseEntity<ProyectoDTO[]> response = restTemplate.getForEntity(urlProyectos, ProyectoDTO[].class); // 🆕 Usar DTO
        return response.getBody();
    }

    public ProyectoDTO[] obtenerProyectoPorId(String recursoId, TareasService tareasService) {
        ProyectoDTO[] proyectos = obtenerProyectos();
        TareaDTO[] tareas = tareasService.obtenerTareas();

        if (tareas == null || proyectos == null) {
            return new ProyectoDTO[0]; // Devuelve array vacío si no hay respuesta
        }

        TareaDTO[] tareasRecurso = Arrays
                .stream(tareas)
                .filter(t -> t.getRecursoId().equals(recursoId))
                .toArray(TareaDTO[]::new);

        return Arrays
                .stream(proyectos)
                .filter(p ->
                        Arrays.stream(tareasRecurso).anyMatch(t -> t.getProyectoId().equals(p.getId()))
                )
                .toArray(ProyectoDTO[]::new);
    }
}