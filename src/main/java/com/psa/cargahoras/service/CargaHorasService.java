package com.psa.cargahoras.service;

import com.psa.cargahoras.model.CargaHoras;
import com.psa.cargahoras.repository.CargaHorasRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CargaHorasService {

    private final CargaHorasRepository repository;

    public CargaHorasService(CargaHorasRepository repository) {
        this.repository = repository;
    }

    public CargaHoras guardarHoras(CargaHoras horas) {
        return repository.save(horas);
    }

    public List<CargaHoras> obtenerPorRecurso(String idRecurso) {
        return repository.findByRecursoId(idRecurso);
    }
}

