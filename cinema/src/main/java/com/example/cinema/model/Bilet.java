package com.example.cinema.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "bilet")
public class Bilet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Integer idBilet;

    @ManyToOne
    @JoinColumn(name = "id_rezervare")
    @JsonIgnore
    private Rezervare rezervare;

    @ManyToOne
    @JoinColumn(name = "id_film")
    @JsonIgnore
    private Film film;

    @ManyToOne
    @JoinColumn(name = "id_cinema")
    @JsonIgnore
    private Cinema cinema;

    private Integer vip;
    private Integer pret;
    private Date dataDifuzare;
}
