import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cinema } from 'src/app/interfaces/cinema';
import { Oras } from 'src/app/interfaces/oras';
import { CinemaService } from 'src/app/services/cinema.service';
import { OrasService } from 'src/app/services/oras.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit{

  cinemas: Cinema[] = [];
  orase: Oras[] = [];
  quoteDetails !: FormGroup;
  constructor(private cinemService: CinemaService,private router:Router, private formBuilder: FormBuilder, private orasService: OrasService) { }
  ngOnInit(): void {
    this.getAllCinemas();
    this.initializeOrase();

    this.quoteDetails = this.formBuilder.group({

      text: [''],
      // person:[''],
      theme:[''],
      movieId: ['']
 
    });
  }
  initializeOrase() {
    this.orasService.getAllOrase().subscribe(res => {
      this.orase =  res;
      console.log(this.orase)
    })
  }

  getAllCinemas(){
    console.log('testt getAllBooks')
    this.cinemService.getAllCinemas().subscribe(res => {

      this.cinemas = res;
      // this.mostPopularMovies = this.mostPopularMovies.slice(0,5); // de sters
      // this.cinema.forEach((book) => {
      //   if (book.cover) {
      //     book.cover = 'data:image/jpeg;base64,' + book.cover;
      //     console.log("Book with cover:", book);
      //   }
      // });
      console.log("all books:", this.cinemas)

    }, err => {
      console.log("Error while fetching data", err)
    });
  }


  addCinema(){

    // this.myQuoteObj.text = this.quoteDetails.value.text;
    // // this.myQuoteObj.person = this.quoteDetails.value.person;
    // this.myQuoteObj.theme = this.quoteDetails.value.theme;

    // var movieId = this.quoteDetails.value.movieId;
  
    // console.log("Form",this.quoteDetails.value)
    // console.log("OBJ",this.myQuoteObj)


    // // if(this.authenticationService.getUserFromLocalCache().movies.length === 0){
  
    // // }

    // if(this.quoteDetails.value.movieId === "")
    // {
    //   Swal.fire({
    //     icon: 'error',
     
    //     title: "You must select a movie in order to add the quote!",
        
    //   })
    // }
    // else{
    //   let userId = this.authenticationService.getUserFromLocalCache().id;

    // this.quoteService.addQuote(this.myQuoteObj, movieId, userId).subscribe(res => {
    //   // console.log("res", res);
    //   this.initializeQuotes();
    //   Swal.fire({
    //     position: 'center',
    //     // imageUrl: res.movie.posterUrl,
    //     // imageHeight: 150,
    //     // imageWidth: 150,
    //     icon: 'success',
    //     title: `The quote from ${res.movie.title} was added to your list`,
    //     showConfirmButton: false,
    //     timer: 2000
    //   })

    // }, err => {
    //   console.log("EROARE");
    //   console.log(err);

    // });

    // }

    
  }

  

}
