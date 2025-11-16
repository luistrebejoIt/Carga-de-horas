package com.psa.cargahoras.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class TareaDTO {
    private String id;
    private String nombre;
    private String proyectoId;
    private String recursoId;
}