import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NombreCasParSexe } from '../models/nombre-cas-par-sexe';

@Injectable({
  providedIn: 'root'
})
export class NombreCasParSexeService {
nombreCasParSexes :NombreCasParSexe[];
url ="https://localhost:5001/api";
  constructor(public http:HttpClient) { }
  public getAll(){
    this.http.get(this.url+"/nombreCas/nombreParSexe").toPromise().then(res => {
      this.nombreCasParSexes = res as NombreCasParSexe[];
    })
  }
}
