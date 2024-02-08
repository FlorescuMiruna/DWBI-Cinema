package com.example.cinema.service;

import com.example.cinema.model.Oras;
import com.example.cinema.repository.OrasRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

//    public Oras getOrasById(Integer id) {
//        Optional<Oras> orasOptional = Optional.ofNullable(orasRepository.findById(id));
//
//        return orasOptional;
//
//    }
//    public Cinema addCinema(Cinema cinema) {
//        return cinemaRepository.save(cinema);

//    }

    public Oras getOrasById(Integer id) {
        Optional<Oras> orasOptional = orasRepository.findById(id);

        // Verificăm dacă entitatea a fost găsită
        if (orasOptional.isPresent()) {
            return orasOptional.get(); // Returnăm entitatea din Optional
        } else {
            // În cazul în care entitatea nu a fost găsită, putem să returnăm null sau să aruncăm o excepție
            throw new EntityNotFoundException("Orasul cu id-ul " + id + " nu a fost găsit.");
        }
    }

}
