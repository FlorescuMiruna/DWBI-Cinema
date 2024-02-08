package com.example.cinema.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cinema")
public class Cinema {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cinema")
//    @Column(nullable = false, updatable = false)
    private Integer idCinema;

    private String nume;
    private Integer nrLocuri;
    private Integer nrSali;

    @ManyToOne
    @JoinColumn(name = "id_oras")
//    @JsonIgnore
    private Oras oras;

    @ManyToMany
    @JoinTable(
            name = "cinema_film",
            joinColumns = @JoinColumn(name = "cinema_id"),
            inverseJoinColumns = @JoinColumn(name = "film_id"))
    private List<Film> films = new ArrayList<>();


}
