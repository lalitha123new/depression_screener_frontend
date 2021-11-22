import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServerService} from '../server.service';
import { Company } from '../company';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  companyName;
  companyCode;
  phoneNumber;
  compnayMailId;
  companyAddress;
  company_info_id;
  currentDate;
  
  //company_id;
 
  companyList: Company ={} as any;

  company_id = sessionStorage.getItem("companyId");
  

  //companyCode = sessionStorage.getItem("companyCode");
  //companyAddress = sessionStorage.getItem("companyAddress");

  constructor(private serverService: ServerService,private router: Router,private datePipe: DatePipe) { }


  ngOnInit() {
    var date = new Date();
    this.currentDate= this.datePipe.transform(date,"yyyy-MM-dd h:mm:ss");
    this.getSelectedCompanyinfo();
  }
getSelectedCompanyinfo(){
  this.serverService.getSelectedCompanyInfo(this.company_id)
    .subscribe((companyList)=>{this.companyList=companyList
     console.log(this.companyList);
      this.companyName = this.companyList[0][3];
      this.companyCode = this.companyList[0][2];
      this.companyAddress = this.companyList[0][1];
      this.compnayMailId = this.companyList[0][4];
      this.phoneNumber = this.companyList[0][5];
      
      this.company_info_id = this.companyList[0][0];
      //this.router.navigate(['admin/edit_company']); 
       
       
    },
    (error) =>console.log(error)
    );
}

  // editCompany(company_id){
    
  //   if(this.companyName && this.companyCode &&  this.companyAddress){

  //     this.companyList.company_name =this.companyName;
  //     this.companyList.company_code =this.companyCode;
  //     this.companyList.company_address =this.companyAddress;
  //     this.companyList.company_info_id =0;
  //     this.companyList.created_at = this.currentDate;
  //     console.log(this.companyList.created_at);
     
  //     this.serverService.editCompany(this.companyList)
  //  .subscribe((response)=>{
  //  alert("Updated company successfully");
  //  this.router.navigate(['admin/list_company']);
   
     
  // },
  // (error) =>console.log(error)
  // );
     
  //   }else{
  //     alert("Please fill in all fields");
  //   }

  // }
  logOut(){
    this.router.navigate(['/admin']);
  }
  back(){
    this.router.navigate(['admin/list_company']);
  }
}
