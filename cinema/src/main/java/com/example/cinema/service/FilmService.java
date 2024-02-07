package com.example.cinema.service;

import com.example.cinema.model.Film;
import com.example.cinema.model.Oras;
import com.example.cinema.repository.CinemaRepository;
import com.example.cinema.repository.FilmRepository;
import com.example.cinema.repository.OrasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    private final FilmRepository filmRepository;

    @Autowired
    public FilmService(FilmRepository filmRepository) {
        this.filmRepository = filmRepository;
    }

    public List<Film> getAllFilme() {
        return filmRepository.findAll();
    }

    public Film addFilm(Film film) {
        return filmRepository.save(film);
    }
}
