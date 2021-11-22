import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServerService} from '../server.service';
import { Company } from '../company';

@Component({
  selector: 'app-list-compony',
  templateUrl: './list-compony.component.html',
  styleUrls: ['./list-compony.component.css']
})
export class ListComponyComponent implements OnInit {
  company_info;
  companylist: Company[]=[];
  

  constructor(private serverService: ServerService,private router: Router) { }

  ngOnInit() {
    this.getCompanyInfo();
  }

  getCompanyInfo(){

  this.serverService.getCompanyInfo()
  .subscribe((companyList)=>{this.companylist=companyList
    console.log(this.companylist);
   
     
     
  },
  (error) =>console.log(error)
  );
  
  }

  add(){

    this.router.navigate(['admin/add_company']); 
  }

  edit(company_id){
    
   
    sessionStorage.setItem("companyId",company_id);
    this.router.navigate(['admin/edit_company']); 
  }

  view(company_id){
    
   
    sessionStorage.setItem("companyId",company_id);
    this.router.navigate(['admin/view_company']); 
  }

  logout(){
    this.router.navigate(['/admin']);
  }


  displayUsers(id,company_name){
   
    sessionStorage.setItem("companyId",id);
    sessionStorage.setItem("companyName",company_name);
    this.router.navigate(['admin/user_data']); 
    
  }
  responseData(){

    this.router.navigate(['admin/user_data']); 

  }
}
