package com.example.cinema.repository;

import com.example.cinema.model.Cinema;
import com.example.cinema.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {
}
