import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServerService} from '../server.service';
import { Company } from '../company';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  companyName;
  companyCode;
  phoneNumber;
  compnayMailId;
  companyAddress;
  companyList: Company ={} as any;
  company_name;
  company_info_id;
  currentDate;
  phone_no;
  email;

  constructor(private serverService: ServerService,private router: Router,private datePipe: DatePipe) { }

  ngOnInit() {
    var date = new Date();
   this.currentDate= this.datePipe.transform(date,"yyyy-MM-dd h:mm:ss");
  }

  addCompany(){
    
    
    if(this.companyName && this.companyCode &&  this.companyAddress && this.phoneNumber && this.compnayMailId){
      
      
      this.companyList.company_name =this.companyName;
      this.companyList.company_code =this.companyCode;
      this.companyList.company_address =this.companyAddress;
      this.companyList.company_info_id =0;
      this.companyList.phone_no = this.phoneNumber;
      this.companyList.email = this.compnayMailId;
      //this.companyList.created_at = this.currentDate;
      

      this.serverService.addCompany(this.companyList)
   .subscribe((response)=>{
   //alert("Added company successfully");
   //window.location.reload();
   this.router.navigate(['admin/list_company']);
     
  },
  (error) =>console.log(error)
  );
      
      
    }else{
      alert("Please fill in all fields");
    }

  }
  logOut(){
    this.router.navigate(['/admin']);
  }
  back(){
    this.router.navigate(['admin/list_company']);
  }

}
