package com.psa.cargahoras.controller;

import com.psa.cargahoras.dtos.TareaDTO;
import com.psa.cargahoras.service.TareasService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tareas")
@CrossOrigin(origins = "http://localhost:3000")
public class TareasController {

    private final TareasService service;

    public TareasController(TareasService service) {
        this.service = service;
    }

    @GetMapping
    public List<TareaDTO> listar(@RequestParam String proyecto) {
        return service.obtenerTareasPorProyecto(proyecto);
    }

    @GetMapping("/recurso/{recursoId}/proyecto/{proyectoId}")
    public TareaDTO[] obtenerTareasPorRecursoYProyecto(@PathVariable String recursoId, @PathVariable String proyectoId) {
        return service.obtenerTareasPorRecursoYProyecto(recursoId, proyectoId);
    }
}
