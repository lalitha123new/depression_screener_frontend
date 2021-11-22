import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  disabledAgreement: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeCheck(event){
    
    this.disabledAgreement = !event.target.checked;
   
  }
 nextPage(){
   
  this.router.navigate(['login']);
  

  }
}
