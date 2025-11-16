package com.psa.cargahoras.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Table(name = "cargahoras")
@Data
public class CargaHoras {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_carga")
    private Long id;


    @Column(name = "id_recurso")
    private String idRecurso;

    @Column(name = "id_proyecto")
    private String idProyecto;

    @Column(name = "id_tarea")
    private String idTarea;

    @Column(name = "fecha")
    private LocalDate fecha;

    @Column(name = "horas")
    private Double horas;
}