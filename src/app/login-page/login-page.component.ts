import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServerService} from '../server.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userName;
  pwd;

  constructor(private serverService: ServerService,private router: Router) { }

  ngOnInit() {
  }

  login(){
    
    if(this.userName && this.pwd ){

      this.serverService.loginAdmin(this.userName,this.pwd)
   .subscribe((response)=>{
     
     if(response > 0){
      this.router.navigate(['admin/list_company']);
      }else{
      alert("Please enter the User name and password");
      }
     
   
    
     
  },
  (error) =>console.log(error)
  );

        } 
    else{
      alert("Invalid username and password");
    }
    

  }
  

}
