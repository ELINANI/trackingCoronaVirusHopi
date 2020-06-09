import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLoginServiceService } from '../services/user-login-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
public formModel = {
   login :'',
   pwd :''
}
  constructor(public servce:UserLoginServiceService,public router:Router,public toastr:ToastrService) { }

  ngOnInit(): void {
  }

 public onSubmit(form:NgForm){
   this.servce.login(form.value).subscribe((res:any) =>{
     localStorage.setItem('token',res.token);
     //this.router.navigateByUrl('/home');
     this.router.navigate(['home']);
     
   },err => {
        if(err.status == 400){
          this.toastr.error('Incorrect login or pwd','Authentification failed');
        }
   })
    
 }
}
