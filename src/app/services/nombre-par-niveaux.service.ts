import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NombreParNiveaux } from '../models/nombre-par-niveaux';

@Injectable({
  providedIn: 'root'
})
export class NombreParNiveauxService {
url ="https://localhost:5001/api";
nombreParNiveau:NombreParNiveaux[];
  constructor(public http:HttpClient) { }
  public getAll(){
    this.http.get(this.url+"/nombreCas/nombreParNiveaux").toPromise().then(res => {
      this.nombreParNiveau = res as NombreParNiveaux[];
    })
  }
}
