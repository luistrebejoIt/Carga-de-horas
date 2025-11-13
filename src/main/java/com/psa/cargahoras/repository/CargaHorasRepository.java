package com.psa.cargahoras.repository;

import com.psa.cargahoras.model.CargaHoras;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CargaHorasRepository extends JpaRepository<CargaHoras, Long> {
    List<CargaHoras> findByIdRecurso(String idRecurso);
}


