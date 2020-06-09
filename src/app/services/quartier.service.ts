import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quartier } from '../models/quartier';

@Injectable({
  providedIn: 'root'
})
export class QuartierService {
Qaurtiers:Quartier[];
url = "https://localhost:5001/api";
  constructor(public http:HttpClient) { }
   public getAllQuar(){
     this.http.get(this.url+"/quartier").toPromise().then(res=> {
       this.Qaurtiers = res as Quartier[];
     })
  }
}
