package com.psa.cargahoras.controller;

import com.psa.cargahoras.model.CargaHoras;
import com.psa.cargahoras.service.CargaHorasService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/horas")
@CrossOrigin(origins = "http://localhost:3000")
public class CargaHorasController {

    private final CargaHorasService service;

    public CargaHorasController(CargaHorasService service) {
        this.service = service;
    }

    @PostMapping
    public CargaHoras cargarHoras(@RequestBody CargaHoras horas) {
        return service.guardarHoras(horas);
    }

    @GetMapping("/recurso/{idRecurso}")
    public List<CargaHoras> obtenerHoras(@PathVariable String idRecurso) {
        return service.obtenerPorRecurso(idRecurso);
    }

    @GetMapping("/ping")
    public String ping() {
        return "Backend funcionando correctamente 🚀";
    }
}

