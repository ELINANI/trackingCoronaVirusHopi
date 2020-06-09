import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  edit:boolean = false;
  client : Client;
  clients :Client[];
  search:string;
 readonly url ="https://localhost:5001/api"
  constructor(private http:HttpClient) { }
  public refreshList(){
    this.http.get(this.url+'/client').toPromise().then(res => {
      this.clients = res as Client[];
    })
  }
  public PostClient(client: Client){
    return this.http.post(this.url+'/client',client);
  }
  public PutClient(client: Client){
    return this.http.put(this.url+'/client/'+this.client.codeClient,client);
  }
  public DeleteClient(codeClient){
    return this.http.delete(this.url+'/client/'+codeClient);
  }
  
}
