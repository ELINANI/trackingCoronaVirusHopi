import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {
url = "https://localhost:5001/api/hopitale/login" ;
  constructor(private http:HttpClient) { }

  login(formData){
  return  this.http.post(this.url ,formData);
  }

}

