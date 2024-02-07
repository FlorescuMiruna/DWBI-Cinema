package com.example.cinema.model;


import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "film")
public class Film {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(nullable = false, updatable = false)
    private Long idFilm;

    private String nume;
    private String gen;
    private String regizor;
    private String dataLansare;
    private Integer notaImdb;
    private Integer rating;
    private Integer durata;
}
