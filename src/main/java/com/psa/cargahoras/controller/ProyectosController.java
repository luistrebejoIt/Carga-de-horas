package com.psa.cargahoras.controller;

import com.psa.cargahoras.dtos.ProyectoDTO; // 🆕 Importar DTO
import com.psa.cargahoras.service.ProyectosService;
import com.psa.cargahoras.service.TareasService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/proyectos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProyectosController {

    private final ProyectosService service;
    private final TareasService tareasService;

    public ProyectosController(ProyectosService service, TareasService tareasService) {
        this.service = service;
        this.tareasService = tareasService;
    }

    @GetMapping
    public ProyectoDTO[] listar() { // 🆕 Devolver array de DTO
        return service.obtenerProyectos();
    }

    @GetMapping("/recurso/{recursoId}")
    public ProyectoDTO[] obtenerPorId(@PathVariable String recursoId) {
        return service.obtenerProyectoPorId(recursoId, tareasService);
    }

}