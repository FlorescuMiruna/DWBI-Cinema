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


  quoteDetails !: FormGroup;
  ngOnInit(): void {
    this.getAllFilms();
    // this.initializeOrase();

    this.quoteDetails = this.formBuilder.group({

      text: [''],
      // person:[''],
      theme:[''],
      movieId: ['']
 
    });
  }
  constructor(private filmService: FilmService,private router:Router, private formBuilder: FormBuilder) { }
  getAllFilms(){
    console.log('testt getAllBooks')
    this.filmService.getAllFilms().subscribe(res => {

      this.films = res;
      // this.mostPopularMovies = this.mostPopularMovies.slice(0,5); // de sters
      // this.cinema.forEach((book) => {
      //   if (book.cover) {
      //     book.cover = 'data:image/jpeg;base64,' + book.cover;
      //     console.log("Book with cover:", book);
      //   }
      // });
      console.log("all films:", this.films)

    }, err => {
      console.log("Error while fetching data", err)
    });
  }
  
  addFilm() {

  }

}
