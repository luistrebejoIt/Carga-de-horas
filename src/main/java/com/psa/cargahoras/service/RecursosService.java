package com.psa.cargahoras.service;

import com.psa.cargahoras.dtos.RecursoDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RecursosService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String urlRecursos =
            "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/" +
                    "32c8fe38-22a6-4fbb-b461-170dfac937e4/recursos-api/1.0.1/m/recursos";

    public RecursoDTO[] obtenerRecursos() {
        ResponseEntity<RecursoDTO[]> response = restTemplate.getForEntity(urlRecursos, RecursoDTO[].class);
        return response.getBody();
    }
}