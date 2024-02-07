package com.example.cinema.controller;

import com.example.cinema.model.Film;
import com.example.cinema.model.Oras;
import com.example.cinema.service.FilmService;
import com.example.cinema.service.OrasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/film")
@CrossOrigin(origins = "http://localhost:4200")
public class FilmController {

    FilmService filmService;

    @Autowired
    public FilmController(FilmService filmService) {
        this.filmService = filmService;
    }

    @GetMapping
    public List<Film> getAllFilme(){
        return filmService.getAllFilme();
    }
}
