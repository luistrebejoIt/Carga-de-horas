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
    private String recursoId;

    @Column(name = "id_proyecto")
    private String proyectoId;

    @Column(name = "id_tarea")
    private String tareaId;

    @Column(name = "fecha")
    private LocalDate fecha;

    @Column(name = "horas")
    private Double horas;
}