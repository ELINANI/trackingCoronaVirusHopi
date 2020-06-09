import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  constructor(public service:ClientService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  public list(client:Client){
    this.service.client = Object.assign({},client);
    this.service.edit = true;
  }
  public delete(codeClient:string){
    if(confirm("are u sure to delete client  of CIN   " +codeClient+" ????" )){
      this.service.DeleteClient(codeClient).subscribe(res =>{
        this.toastr.warning("deleted");
        this.service.refreshList();
      },err=>{
        this.toastr.error("error");
      })
    }
    
  }
}
