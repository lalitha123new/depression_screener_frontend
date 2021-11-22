import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-screener-page1',
  templateUrl: './screener-page1.component.html',
  styleUrls: ['./screener-page1.component.css']
})
export class ScreenerPage1Component implements OnInit {

   register2_array = [];
   public register2_obj: any = {};
   public new_object: any = {};
	  
	 feedback;
	 firstscreenStr;
   select_prevent1;
   new_array=[];
   totalScore1=0;
    

    symptom11;
		symptom12;
		symptom13;
		symptom14;
    symptom15;
    new_array2=[];
    secondscreenStr;

    new_reginfo;
    srs_id = 123;
    newArr1;
    age;
    gender;
    survey;
    
   //$('#prevent_harm').prop('disabled',true);

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  enbfield(){
		
		this.select_prevent1 = $('#select_prevent').find(":selected").text();
		if(this.select_prevent1 == "Yes"){
			
			$('#prevent_harm').prop('disabled',false);
		}else{
			
			$('#prevent_harm').prop('disabled',true);
		}
		
	}
	
  submitPage1(){
    
    this.age = $("#num1").val();
    this.gender = $('input[name=radio_gender]:checked').val();
    this.survey = $('input[name=radio_survery]:checked').val();

    
  //  console.log($("#num1").val());
  //  console.log($('input[name=radio_gender]:checked').val());
  //  console.log($('input[name=radio_survery]:checked').val());
  //  this.age = 40;
  //  this.gender="female";
  //  this.survey="yes";

    //first screener
    for(var i=0;i<9;i++){
			
      if($('input[name=RESULT_RadioButton-4-'+i+']:checked').val()!=undefined){
        this.totalScore1+=parseInt($('input[name=RESULT_RadioButton-4-'+i+']:checked').val());
        this.firstscreenStr+=$('input[name=RESULT_RadioButton-4-'+i+']:checked').val()+"#"
        this.new_array.push($('input[name=RESULT_RadioButton-4-'+i+']:checked').val());
      }
      
      }
      
    this.register2_obj.register2_screener1_options=this.new_array;
    this.register2_obj.register2_screener1_totalScore1 =this.totalScore1;
    //end of first screener
    


    //second screener or p4 screener
    this.symptom11 = $('#select_hurt').find(":selected").text();
		this.symptom12 = $('#select_hurt_yourself').find(":selected").text();
		this.symptom13 = $('input[name=radio_difference]:checked').val();
		this.symptom14 = $('#select_prevent').find(":selected").text();
		this.symptom15 = $('#prevent_harm').val();
    
    this.secondscreenStr  = this.symptom11+"@"+ this. symptom12+"@"+ this.symptom13+"@"+ this.symptom14+"@"+ this.symptom15+"#@@#"+this.register2_obj.radio_long+"#@@#"+this.register2_obj.radio_months;
    
    this.new_array2.push(this.symptom11,this.symptom12,this.symptom13,this.symptom14,this.symptom15);
    
    this.register2_obj.register2_screener2_options = this.new_array2;
    

      //p4 screener new2 algorithm
      if(this.symptom13==="Somewhat likely" || this.symptom13==="Very likely" ||  (this.symptom13==="Not at all likely" && this.symptom14==="No")){
      
        this.feedback="High risk";
      
      
      }else if(this.symptom11==="No" && this.symptom12==="No" && this.symptom13==="Not at all likely" && this.symptom14==="Yes"){
              
        this.feedback="Mild risk";
        
            
      }else{
      
        this.feedback="Moderate risk";
      
      }
  
   this.register2_obj.register2_screener2_totalScore2  = this.feedback;
  //end of second screener

   
		this.new_object.reginfo=this.firstscreenStr+"#@@#"+this.secondscreenStr;
    this.new_object.id=this.srs_id;
    this.register2_array.push(this.register2_obj);
    this.new_reginfo= this.register2_obj.toString();

    this.register2_array.push(this.register2_obj);
	
    localStorage.setItem("register2_array_localstorage", JSON.stringify(this.register2_array[0]));
    localStorage.setItem("new_object", JSON.stringify(this.new_object));
    localStorage.setItem("age", this.age);
    localStorage.setItem("gender", this.gender);
    localStorage.setItem("survey", this.survey);
   

    if(this.age && this.gender && this.survey && this.register2_obj.radio_long && this.register2_obj.radio_months && this.symptom13 && (this.new_array.length == 9) && (this.symptom11 != "Select") && (this.symptom12 != "Select")){
      if((this.symptom14 == "Yes" && this.symptom15 != "") || this.symptom14 == "No"){
					
             this.router.navigate(['screener_page2']);

             //shows top of next page
             document.body.scrollTop = 0; // For Safari
             document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            
			}else{
				
				alert("all fields are mandatory");
				this.new_array=[];
				return false;
				
			}
			
		}else{
			
			alert("all fields are mandatory");
			this.new_array=[];
			return false;
			
		}
 

}

logOut(){
  this.router.navigate(['/']);
}
}
