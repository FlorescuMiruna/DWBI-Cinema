package com.example.cinema.controller;

import com.example.cinema.model.Client;
import com.example.cinema.model.Film;
import com.example.cinema.service.ClientService;
import com.example.cinema.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {

    ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<Client> getAllFilme(){
        return clientService.getAllClienti();
    }

    @PostMapping()
    public Client addClient(@RequestBody Client client){
        clientService.addClient(client);
        return client;
    }
}
