import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../models/client';
import { NiveauService } from '../services/niveau.service';
import { QuartierService } from '../services/quartier.service';
import { ContaminationService } from '../services/contamination.service';

@Component({
  selector: 'app-crud-client',
  templateUrl: './crud-client.component.html',
  styleUrls: ['./crud-client.component.css']
})
export class CrudClientComponent implements OnInit {
 
  constructor(public service:ClientService,public toastr:ToastrService, public niveauService:NiveauService,public quartierService:QuartierService) { }

  ngOnInit(): void {
    this.resetForm();
    this.niveauService.getNiveau();
    this.quartierService.getAllQuar();
  }
  public resetForm(form?:NgForm){
    if(form != null)
      form.resetForm();
    this.service.client = {
      codeClient:'',
      nomClient:'',
      prenomClient:'',
      age:'',
      sexeClient:'',
      phoneClient:'',
      codeQuartier:''
      
    }
  }
  public onSubmit(form:NgForm){
   if(!this.service.edit)
   {
      this.insertClient(form);
      
   }
    else
   {
     this.updateClient(form);
    }

}
public insertClient(form:NgForm){
  this.service.PostClient(form.value).subscribe(res => {
    
    this.resetForm(form);
    this.toastr.success('added successfully' ,'Client Detail');
    this.service.refreshList();
  },err => {
    this.toastr.error('error' ,'Client Detail');
    console.log(form.value);
  })
}
public updateClient(form:NgForm){
  this.service.PutClient(form.value).subscribe(res => {
    this.resetForm(form);
    this.toastr.info('updated successfully' ,'Client Detail');
    this.service.refreshList();
  },err => {
    this.toastr.error('error' ,'Client Detail');
  })
}


}