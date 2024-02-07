package com.example.cinema.repository;


import com.example.cinema.model.Cinema;
import com.example.cinema.model.Oras;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrasRepository extends JpaRepository<Oras, Integer> {
}
