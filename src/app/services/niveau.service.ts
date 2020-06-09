import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Niveau } from '../models/niveau';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {
  Niveaux:Niveau[];
  url = "https://localhost:5001/api";

  constructor(public http:HttpClient) { }
  public getNiveau(){
    this.http.get(this.url+"/niveau").toPromise().then(res => {
      this.Niveaux = res as Niveau[];
    })
  }
}
