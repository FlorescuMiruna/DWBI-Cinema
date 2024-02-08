import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];
  clientDetails !: FormGroup;
  myClientObj: Client = new Client();

  ngOnInit(): void {
    this.getAllClients();
    this.initializeForm();

  }
  constructor(private clientService: ClientService, private router: Router, private formBuilder: FormBuilder) { }

  getAllClients() {
    this.clientService.getAllClients().subscribe(res => {
      this.clients = res;
      console.log("All clients:", this.clients)
    }, err => {
      console.log(err)
    });
  }

  initializeForm() {
    this.clientDetails = this.formBuilder.group({
      nume: [''],
      prenume: [''],
      email: [''],
      nrTelefon: [''],
    });
  }

  addClient() {

    console.log('clientDetails', this.clientDetails);

    this.myClientObj.nume = this.clientDetails.value.nume;
    this.myClientObj.prenume = this.clientDetails.value.prenume;
    this.myClientObj.email = this.clientDetails.value.email;
    this.myClientObj.nrTelefon = this.clientDetails.value.nrTelefon;

    console.log('myClientObj', this.myClientObj);

    this.clientService.addClient(this.myClientObj).subscribe(res => {
      this.clientDetails = this.formBuilder.group({
        nume: [''],
        prenume: [''],
        email: [''],
        nrTelefon: [''],
      });
      this.getAllClients();
      this.initializeForm();
      
    }, err => {
      console.log(err);
    });
  }

}
