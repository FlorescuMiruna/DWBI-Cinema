package com.example.cinema.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "plata")
public class Plata {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Integer idPlata;


    @JoinColumn(name = "id_judet")
    @OneToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    private Rezervare rezervare;


    private String tip;
    private String status;

    private Integer number;
    private Date data;
}
