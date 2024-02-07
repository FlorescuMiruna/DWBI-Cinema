package com.example.cinema.repository;

import com.example.cinema.model.Film;
import com.example.cinema.model.Oras;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film, Integer> {
}

