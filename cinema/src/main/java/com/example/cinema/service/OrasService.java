package com.example.cinema.service;

import com.example.cinema.model.Cinema;
import com.example.cinema.model.Oras;
import com.example.cinema.repository.CinemaRepository;
import com.example.cinema.repository.OrasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrasService {
    private final OrasRepository orasRepository;

    @Autowired
    public OrasService(OrasRepository orasRepository) {
        this.orasRepository = orasRepository;
    }

    public List<Oras> getAllOrase() {
        return orasRepository.findAll();
    }

//    public Cinema addCinema(Cinema cinema) {
//        return cinemaRepository.save(cinema);
//    }
}
