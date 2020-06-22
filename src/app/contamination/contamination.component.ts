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
  filter:string ;
  ngOnInit(): void {
    this.serviceContamination.getAllContaminations();
  }
  public delete(codeContamination)
  {
    if(confirm('are u sure to delete  this contamination')){
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
  search(){   
    if(this.filter != ""){
      this.serviceContamination.Contaminations =this.serviceContamination.Contaminations .filter(res=>{
         return res.codeContamination.toLocaleLowerCase().match(this.filter.toLocaleLowerCase());
       })
    }else if(this.filter == "") {
      this.serviceContamination.getAllContaminations()
    }
  }
}
