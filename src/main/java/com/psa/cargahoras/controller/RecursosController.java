package com.psa.cargahoras.controller;

import com.psa.cargahoras.dtos.RecursoDTO;
import com.psa.cargahoras.service.RecursosService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recursos")
@CrossOrigin(origins = "http://localhost:3000")
public class RecursosController {

    private final RecursosService service;

    public RecursosController(RecursosService service) {
        this.service = service;
    }

    @GetMapping
    public RecursoDTO[] listar() {
        return service.obtenerRecursos();
    }
}
