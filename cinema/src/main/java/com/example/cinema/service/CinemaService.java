package com.example.cinema.service;

import com.example.cinema.model.Cinema;
import com.example.cinema.model.Oras;
import com.example.cinema.repository.CinemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CinemaService {

    private final CinemaRepository cinemaRepository;
    private final OrasService orasService;

    @Autowired
    public CinemaService(CinemaRepository cinemaRepository, OrasService orasService) {
        this.cinemaRepository = cinemaRepository;
        this.orasService = orasService;
    }

    public List<Cinema> getAllCinemas() {
        return cinemaRepository.findAll();
    }

    public Cinema addCinema(Cinema cinema, Integer orasId) {

        Oras oras = orasService.getOrasById(orasId);
        cinema.setOras(oras);
        cinemaRepository.save(cinema);
        return cinemaRepository.save(cinema);
    }
}
