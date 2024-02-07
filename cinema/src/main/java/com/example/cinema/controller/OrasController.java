package com.example.cinema.controller;

import com.example.cinema.model.Cinema;
import com.example.cinema.model.Oras;
import com.example.cinema.service.CinemaService;
import com.example.cinema.service.OrasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/oras")
@CrossOrigin(origins = "http://localhost:4200")
public class OrasController {

    OrasService orasService;

    @Autowired
    public OrasController(OrasService orasService) {
        this.orasService = orasService;
    }

    @GetMapping
    public List<Oras> getAllOrase(){
        return orasService.getAllOrase();
    }
}
