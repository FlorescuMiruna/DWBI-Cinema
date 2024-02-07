package com.example.cinema.model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "film")
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_film")
    private Long idFilm;

    private String nume;
    private String gen;
    private String regizor;
    private String dataLansare;
    private Integer notaImdb;
    private Integer rating;
    private Integer durata;
}
