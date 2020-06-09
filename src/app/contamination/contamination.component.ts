import { Component, OnInit } from '@angular/core';
import { ContaminationService } from '../services/contamination.service';
import { Contamination } from '../models/contamination';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contamination',
  templateUrl: './contamination.component.html',
  styleUrls: ['./contamination.component.css']
})
export class ContaminationComponent implements OnInit {

  constructor(public serviceContamination:ContaminationService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.serviceContamination.getAllContaminations();
  }
  public delete(codeContamination)
  {
    if(confirm('are u sure to delete  this contaminatino')){
       this.serviceContamination.deleteContamination(codeContamination).subscribe(res => {
           this.toastr.warning('deleted');
           this.serviceContamination.getAllContaminations();
       },err => {
         this.toastr.error('error');
       })
    }
  }
  public list(conta:Contamination){
    this.serviceContamination.contamination = Object.assign({},conta);
    this.serviceContamination.edit = true;
  }
}
