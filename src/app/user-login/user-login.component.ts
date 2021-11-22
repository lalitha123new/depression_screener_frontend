import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  companyCode;

  constructor(private serverService: ServerService,private router: Router) { }

  ngOnInit() {
  }


  userLogin(){
    if(this.companyCode){

      this.serverService.loginUser(this.companyCode)
   .subscribe((response)=>{
  
      sessionStorage.setItem("compnayId",response);
      
     if(response > 0){
      this.router.navigate(['screener_page1']);
      }else{
      alert("Please enter the Company Code");
      }
     
  },
  (error) =>console.log(error)
  );

    
    }
  }
}
