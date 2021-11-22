import { Injectable } from '@angular/core';
import { Headers, Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpRequest, HttpEvent} from '@angular/common/http';
import { Company } from './company';

@Injectable()
export class ServerService
{
   
    
    constructor(private http: Http,private https:HttpClient){
        
    }

    
    
    //url to connect to backend
    //AWS server and db
    //private baseUrl= 'http://13.232.16.87:8080/Lab_Tracker';

     //local server and db
    private baseUrl= 'http://localhost:8080';
   //ehrc apps server
    //private baseUrl= 'http://113.30.156.80:8080/screenerRest';
    data: any= {};
    obj:any={};
    username;
    password;
    company_id;
    CreatedAt;
    company1=null;
    company2 = null;
    company3:any;
    public companyObject: any = {};
    

    getCompanyInfo()
    {
       
       return this.http.get(this.baseUrl+'/company/getCompanyInfo')
      .map((res: Response) => res.json()).catch(this.errorHandler);
      
    }

    getSelectedCompanyInfo(company_id)
    {
      
       return this.http.get(this.baseUrl+'/company/editCompany?company_info_id='+company_id+'')
      .map((res: Response) => res.json()).catch(this.errorHandler);
      
    }

    loginUser(companyCode)
    {
      
       return this.http.get(this.baseUrl+'/company/checkCompanyCode?company_code='+companyCode+'')
      .map((res: Response) => res.json()).catch(this.errorHandler);
      
    }

    loginAdmin(user_name, pwd)
    {
      this.obj.username = user_name;
      this.obj.password = pwd;
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post(this.baseUrl + '/company/login',this.obj,{headers: headers})
     .map((res: Response) => res.text()).catch(this.errorHandler);
      
    }

    addCompany(company: Company)
    {
      
            console.log(company);
            const headers = new Headers({'Content-Type': 'application/json'});
             return this.http.post(this.baseUrl + '/company/saveCompanyInfo',company,{headers: headers})
            .map((res: Response) => res.text()).catch(this.errorHandler);
      
    }

    editCompany(company: Company)
    {
      
            this.company_id = sessionStorage.getItem("companyId");
          
            this.companyObject.company_name = company.company_name;
            this.companyObject.company_code = company.company_code;
            this.companyObject.company_address = company.company_address;
            this.companyObject.company_info_id = company.company_info_id;
            this.companyObject.phone_no = company.phone_no;
            this.companyObject.email = company.email;

            //this.companyObject.created_at = company.created_at;

        
            this.company2 = JSON.stringify(this.companyObject);
            console.log( "type is--"+typeof this.companyObject.created_at+"--date is--"+this.companyObject.created_at);
            
            const headers = new Headers({'Content-Type': 'application/json'});
             return this.http.post(this.baseUrl + '/company/updateCompanyInfo?company_info_id='+this.company_id+'',this.company2,{headers: headers})
            .map((res: Response) => res.text()).catch(this.errorHandler);
      
    }

    saveResponse(data){
console.log(data);
      const headers = new Headers({'Content-Type': 'application/json'});
             return this.http.post(this.baseUrl + '/company/saveResponce',data,{headers: headers})
            .map((res: Response) => res.text()).catch(this.errorHandler);

    }

    getUsersOfCompany(company_id){

      return this.http.get(this.baseUrl+'/company/getResBycompany?company_info_id='+company_id+'')
      .map((res: Response) => res.json()).catch(this.errorHandler);

    }
    displayResponseOfUser(res_id){

      return this.http.get(this.baseUrl+'/company/getResByResId?scr_responce_id='+res_id+'')
      .map((res: Response) => res.json()).catch(this.errorHandler);
    }

    errorHandler(error:Response){

            return Observable.throw(error||"SERVER ERROR");
       }

}
