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

@Table(name = "rezervare")
public class Rezervare {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long idRezervare;


    @ManyToOne
    @JoinColumn(name = "id_oferta")
    @JsonIgnore
    private Oferta Oferta;

    @ManyToOne
    @JoinColumn(name = "id_client")
    @JsonIgnore
    private Client client;

    private String status;
    private Date dataRezervare;
}
