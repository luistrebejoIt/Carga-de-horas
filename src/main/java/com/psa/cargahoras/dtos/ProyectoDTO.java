package com.psa.cargahoras.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProyectoDTO {
    private String id;
    private String nombre;
}
