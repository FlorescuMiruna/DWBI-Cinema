package com.example.cinema.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.dao.DataAccessException;

import java.util.Date;

@Getter
@Setter
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "angajat")
public class Angajat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long idAngajat;

    private String nume;
    private String prenume;
    private String email;
    private String nrTelefon;
    private Long salariu;
    private Date dataAngajarii;

    @ManyToOne
    @JoinColumn(name = "id_cinema")
    @JsonIgnore
    private Cinema cinema;

}
