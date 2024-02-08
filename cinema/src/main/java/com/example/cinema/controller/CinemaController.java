package com.example.cinema.controller;

import com.example.cinema.model.Cinema;
import com.example.cinema.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.List;

@RestController
@RequestMapping("/cinema")
@CrossOrigin(origins = "http://localhost:4200")
public class CinemaController {

    CinemaService cinemaService;

    @Autowired
    public CinemaController(CinemaService cinemaService) {
        this.cinemaService = cinemaService;
    }

    @GetMapping
    public List<Cinema> getAllCinemas(){
        return cinemaService.getAllCinemas();
    }

    @PostMapping("/oras/{orasId}")
    public Cinema addCinema(@RequestBody Cinema cinema, @PathVariable String orasId){
        cinemaService.addCinema(cinema, Integer.parseInt(orasId));
        return cinema;
    }

}
