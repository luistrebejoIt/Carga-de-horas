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
}
