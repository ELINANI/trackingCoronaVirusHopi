import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contamination } from '../models/contamination';

@Injectable({
  providedIn: 'root'
})
export class ContaminationService {
Contaminations:Contamination[];
readonly url = "https://localhost:5001/api";
edit:boolean = false;
contamination : Contamination;
  constructor(public http:HttpClient) { }
  public getAllContaminations(){
    this.http.get(this.url+'/contamination').toPromise().then(res => {
      this.Contaminations = res as Contamination[];
    })
  }
  public postContamination(contamination:Contamination){
    return this.http.post(this.url+'/contamination',contamination);
  }
  public putContamination(Contamination:Contamination){
    return this.http.put(this.url+'/contamination/' + this.contamination.codeContamination,Contamination);
  }
  public deleteContamination(codeContamination){
    return this.http.delete(this.url+'/contamination/'+codeContamination);
  }
}
