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
export class CinemaComponent implements OnInit {

  cinemas: Cinema[] = [];
  orase: Oras[] = [];
  cinemaDetails !: FormGroup;
  myCinemaObj: Cinema = new Cinema();
  constructor(private cinemService: CinemaService, private router: Router, private formBuilder: FormBuilder, private orasService: OrasService) { }
  ngOnInit(): void {
    this.getAllCinemas();
    this.initializeOrase();
    this.initializeForm();

  }

  initializeForm() {
    this.cinemaDetails = this.formBuilder.group({
      nume: [''],
      nrLocuri: [''],
      nrSali: [''],
      idOras: 0

    });
  }
  initializeOrase() {
    this.orasService.getAllOrase().subscribe(res => {
      this.orase = res;
      console.log(this.orase)
    })
  }

  getAllCinemas() {
    this.cinemService.getAllCinemas().subscribe(res => {
      this.cinemas = res;
      console.log("all cinemas:", this.cinemas)
    }, err => {
      console.log("Error while fetching data", err)
    });
  }


  addCinema() {
    console.log('cinemaDetails', this.cinemaDetails);
    this.myCinemaObj.nume = this.cinemaDetails.value.nume;
    this.myCinemaObj.nrLocuri = this.cinemaDetails.value.nrLocuri;
    this.myCinemaObj.nrSali = this.cinemaDetails.value.nrSali;
    

    console.log('myCinemaObj', this.myCinemaObj);
    this.cinemService.addCinema(this.myCinemaObj, this.cinemaDetails.value.idOras).subscribe(res => {
      location.reload();
      this.getAllCinemas();
      this.initializeForm();
      
    }, err => {
      console.log(err);
    });
  }

  }




