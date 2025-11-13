package com.psa.cargahoras.controller;

import com.psa.cargahoras.dtos.ProyectoDTO; // 🆕 Importar DTO
import com.psa.cargahoras.service.ProyectosService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/proyectos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProyectosController {

    private final ProyectosService service;

    public ProyectosController(ProyectosService service) {
        this.service = service;
    }

    @GetMapping
    public ProyectoDTO[] listar() { // 🆕 Devolver array de DTO
        return service.obtenerProyectos();
    }
}