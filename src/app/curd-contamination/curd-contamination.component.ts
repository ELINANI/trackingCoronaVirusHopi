import { Component, OnInit } from '@angular/core';
import { ContaminationService } from '../services/contamination.service';
import { ToastrService } from 'ngx-toastr';
import { NiveauService } from '../services/niveau.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curd-contamination',
  templateUrl: './curd-contamination.component.html',
  styleUrls: ['./curd-contamination.component.css']
})
export class CurdContaminationComponent implements OnInit {

  constructor(public contaminationServic:ContaminationService,public toastr:ToastrService,public niveauService:NiveauService) { }

  ngOnInit(): void {
    this.resetForm();
    this.contaminationServic.getAllContaminations();
    this.niveauService.getNiveau();
    
  }
  public resetForm(form?:NgForm){
   if(form != null){
     this.resetForm();
    }
  this.contaminationServic.contamination = {
      codeContamination:'',
      codeClient:'',
      codeHopitale:'',
      codeNiveau:'',
      dateContamination:''
     }
   
  }
  public onSubmit(form:NgForm){
     if(!this.contaminationServic.edit){
       this.addContamination(form);
     }
     else{
       this.editContamiantion(form);
     }
  }
  public addContamination(form:NgForm){
    this.contaminationServic.postContamination(form.value).subscribe(res => {
      this.contaminationServic.getAllContaminations();
      this.resetForm();
      this.toastr.success("added succesfuly" ,'contamination');
    },err => {
       this.toastr.error('error' , 'contamination');
    })
  }
  public editContamiantion(form:NgForm){
    this.contaminationServic.putContamination(form.value).subscribe(res => {
      this.contaminationServic.getAllContaminations();
      this.resetForm();
      this.toastr.success("updauted succesfuly" ,'contamination');
    },err => {
       this.toastr.error('error' , 'contamination');
    })
  }

}
