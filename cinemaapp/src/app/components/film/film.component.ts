import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from 'src/app/interfaces/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films: Film[] = [];
  filmDetails !: FormGroup;
  myFilmObj: Film = new Film();

  ngOnInit(): void {
    this.getAllFilms();
    this.initializeForm();

  }
  constructor(private filmService: FilmService, private router: Router, private formBuilder: FormBuilder) { }

  getAllFilms() {
    this.filmService.getAllFilms().subscribe(res => {
      this.films = res;
      console.log("All films:", this.films)
    }, err => {
      console.log(err)
    });
  }

  initializeForm() {
    this.filmDetails = this.formBuilder.group({
      nume: [''],
      gen: [''],
      regizor: [''],
      dataLansare: [''],
      notaImdb: 0,
      durata: 0,
      rating: 0

    });
  }

  addFilm() {

    console.log('filmDetails', this.filmDetails);

    this.myFilmObj.nume = this.filmDetails.value.nume;
    this.myFilmObj.gen = this.filmDetails.value.gen;
    this.myFilmObj.regizor = this.filmDetails.value.regizor;
    this.myFilmObj.dataLansare = this.filmDetails.value.dataLansare.toLocaleString("en-US");
    this.myFilmObj.notaImdb = this.filmDetails.value.notaImdb;
    this.myFilmObj.durata = this.filmDetails.value.durata;
    this.myFilmObj.rating = this.filmDetails.value.rating;

    console.log('myFilmObj', this.myFilmObj);

    this.filmService.addFilm(this.myFilmObj).subscribe(res => {
      this.filmDetails = this.formBuilder.group({
        nume: [''],
        gen: [''],
        regizor: [''],
        dataLansare: [''],
        notaImdb: 0,
        durata: 0,
        rating: 0

      });
      this.getAllFilms();
      this.initializeForm();
      
    }, err => {
      console.log(err);
    });
  }

}
