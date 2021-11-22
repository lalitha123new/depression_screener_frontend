import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServerService} from '../server.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-screener-page2',
  templateUrl: './screener-page2.component.html',
  styleUrls: ['./screener-page2.component.css']
})
export class ScreenerPage2Component implements OnInit {

  public register3_obj: any = {};
  public registernew_obj: any = {};
  public new_object: any = {};
  public final_data_object: any = {};
	 
  questions7_array = [];
  questions5_array = [];
  register3_array = [];
  thirdScreener;
  fourthScreener;
   
   	company_info_id = 7;
	totalScore2;
	company_id;


   		//totalScore2 is anxiety score and totalScore3 is current functionng score
		//thirdScreener is anxiety data and fourthScreener is current functioning data
		
		//anxiety screener
		depression0;
		depression1;
		depression2;
		depression3;
		depression4;
		depression5;
    	depression6;
    
    	function1;
		function2;
		function3;
		function4;
    	function5;
    	totalScore3;

		retrievedData1;
		register1_array;
		retrievedData2;
		register2_array;
		retrievedData3;

     	 str1 = "Mild";
		 str2 = "Moderate";
		 str3 = "Severe";
		
		 feedback1;
		 feedback2;
		 feedback3;
		 feedback4;
		 output;

		 age;
		 gender;
		 survey;
    

  constructor(private serverService: ServerService,private router: Router) { }

  ngOnInit() {
  }

  submitPage2(){
	 

	this.age = localStorage.getItem("age");
	this.gender = localStorage.getItem("gender");
	this.survey = localStorage.getItem("survey");

	console.log(this.age);
	console.log(this.gender);
	console.log(this.survey);


    	//totalScore2 is anxiety score and totalScore3 is current functionng score
		//thirdScreener is anxiety data and fourthScreener is current functioning data
		
		//anxiety screener
		this.depression0 =$('input[name=RESULT_RadioButton-5-'+0+']:checked').val();
		this.depression1 =$('input[name=RESULT_RadioButton-5-'+1+']:checked').val();
		this.depression2 =$('input[name=RESULT_RadioButton-5-'+2+']:checked').val();
		this.depression3 =$('input[name=RESULT_RadioButton-5-'+3+']:checked').val();
		this.depression4 =$('input[name=RESULT_RadioButton-5-'+4+']:checked').val();
		this.depression5 =$('input[name=RESULT_RadioButton-5-'+5+']:checked').val();
  		this.depression6 =$('input[name=RESULT_RadioButton-5-'+6+']:checked').val();
    
    if( this.depression0 && this.depression1 && this.depression2 && this.depression3  && this.depression4 && this.depression5 && this.depression6 ){
			
			this.thirdScreener=this.depression0+"#"+ this.depression1+"#"+ this.depression2+"#"+ this.depression3+"#"+ this.depression4+"#"+ this.depression5+"#"+ this.depression6;	
			this.questions7_array.push(this.depression0,this.depression1,this.depression2,this.depression3,this.depression4,this.depression5,this.depression6);
		}else{
			
			this.thirdScreener="";
    }
    

    this.register3_obj.register3_screener1_questions7 = this.questions7_array;

    this.totalScore2=0;
		
		for(var i=0;i<7;i++){
			
			if($('input[name=RESULT_RadioButton-5-'+i+']:checked').val()!=undefined){
				this.fourthScreener+=$('input[name=RESULT_RadioButton-5-'+i+']:checked').val()+"@";
				this.totalScore2+=parseInt($('input[name=RESULT_RadioButton-5-'+i+']:checked').val());
				
			}
			
      }
     
    this.registernew_obj.company_info_id=this.company_info_id;
	 
    this.register3_obj.register3_screener1_totalScore1=this.totalScore2;
    
    //end of third screener

	
	//fourth or current functioning screener
	this.totalScore3=0;
	this.function1 = parseInt($('#select_ability').find(":selected").val());
	this.function2 = parseInt($('#select_home').find(":selected").val());
	this.function3 = parseInt($('#select_leisure').find(":selected").val());
	this.function4 = parseInt($('#select_private').find(":selected").val());
    this.function5 = parseInt($('#select_maintain').find(":selected").val());
    
    this.questions5_array.push(this.function1,this.function2,this.function3,this.function4,this.function5);
    this.register3_obj.register3_screener2_questions5 = this.questions5_array;

    this.totalScore3+= this.function1 + this.function2 + this.function3 + this.function4 + this.function5;
	//object of second page response data
	//this.registernew_obj.reginfo=this.thirdScreener+"#@@#undefined@"+this.function1+"@"+this.function2+"@"+this.function3+"@"+this.function4+"@"+this.function5+"@";
	this.registernew_obj.reginfo=this.thirdScreener+"#@@#@"+this.function1+"@"+this.function2+"@"+this.function3+"@"+this.function4+"@"+this.function5+"$$##"+this.age+"#"+this.gender+"#"+this.survey;
	
    this.register3_obj.register3_screener2_totalScore2 = this.totalScore3;
    this.register3_array.push(this.register3_obj);

    localStorage.setItem("register3_array_localstorage", JSON.stringify(this.register3_array[0]));

		//new code added


		 this.retrievedData1 = localStorage.getItem("register1_array_localstorage");
		 this.register1_array = JSON.parse(this.retrievedData1);
	
		this.retrievedData2 = localStorage.getItem("register2_array_localstorage");
		this.register2_array = JSON.parse(this.retrievedData2);
		
	  	//newly added code to pass get the first page response object to pass along with the second page response object to the database
		this.new_object = localStorage.getItem("new_object");
		this.new_object = JSON.parse(this.new_object);

		//first page data
		//console.log(this.new_object);
		//second page data
		//console.log(this.registernew_obj);
		
		//assign the company_info_id
		this.company_id=sessionStorage.getItem("compnayId");
		this.final_data_object.company_info_id = this.company_id;
		this.final_data_object.responce = this.new_object.reginfo+"@@@@"+this.registernew_obj.reginfo;
		//object of first and second page combined data wihth @@@@ joining first page and second page data
		
		console.log(this.final_data_object);

     if((this.questions7_array.length == 7) && (this.function1 != 9) && (this.function2 != 9) && (this.function3 != 9) && (this.function4 != 9) && (this.function5 != 9)){
		$('#nextbutton2').prop('disabled',true);
      	//newly added code for displaying feedback
	  	
	  	this.serverService.saveResponse(this.final_data_object)
   		.subscribe((response)=>{
   
   			//console.log(response);
     
  },
  (error) =>console.log(error)
  );

        	//depression screener
        if(this.register2_array.register2_screener1_totalScore1==0){
          
        	//   $('#col1_new').addClass("color_class_new");
			//   $('#p1_new').removeClass("hidden");

			//latest_design
			$('#col1_new').addClass("color_class_latest");
			$('#p1_new').removeClass("hidden");
			$('#arrow1').removeClass("hidden");
			$('#icon1').removeClass("hidden");
			this.feedback1 = this.str1;
        }else if((this.register2_array.register2_screener1_totalScore1>0) && (this.register2_array.register2_screener1_totalScore1<=5)){
        	 //   this.feedback1 = this.str1;
        	 //   $('#col1_new').addClass("color_class_new");
        	 //   $('#col1').addClass("color_class");
			 //   $('#p1').removeClass("hidden");

			 //latest_design
			$('#col1').addClass("color_class_latest");
			$('#p1').removeClass("hidden");
			$('#arrow2').removeClass("hidden");
			$('#icon2').removeClass("hidden");
			this.feedback1 = this.str1;
        }else if(this.register2_array.register2_screener1_totalScore1 > 5 && this.register2_array.register2_screener1_totalScore1<=10){
        	//   $('#col1_new').addClass("color_class_new");
        	//   $("#col1").addClass("color_class");
        	//   $("#col2").addClass("color_class1");
			//   $('#p2').removeClass("hidden");

			//latest_design
			$("#col2").addClass("color_class_latest");
			$('#p2').removeClass("hidden");
			$('#arrow3').removeClass("hidden");
			$('#icon3').removeClass("hidden");
          	this.feedback1 = this.str2;
        }else{
        	//   $('#col1_new').addClass("color_class_new");
        	//   $("#col1").addClass("color_class");
        	//   $("#col2").addClass("color_class1");
        	//   $("#col3").addClass("color_class2");
			//   $('#p3').removeClass("hidden");

			//latest_design
			$("#col3").addClass("color_class_latest");
			$('#p3').removeClass("hidden");
			$('#arrow4').removeClass("hidden");
			$('#icon4').removeClass("hidden");
          	this.feedback1 = this.str3;
        }
     
      	/*self-rated suicidability thoughts score*/
		
		if(this.register2_array.register2_screener2_totalScore2=="Mild risk"){
			
			
			// $("#col7_new").addClass("color_class_new");
			// $("#col7").addClass("color_class");
			// $('#p7').removeClass("hidden");
			//$("#col7").addClass("color_class");

			//latest_design
			$("#col7").addClass("color_class_latest");
			$('#p7').removeClass("hidden");
			$('#arrow10').removeClass("hidden");
			$('#icon10').removeClass("hidden");
			this.feedback2 = this.str1;
		}else if(this.register2_array.register2_screener2_totalScore2=="Moderate risk"){

			
			// $("#col7_new").addClass("color_class_new");
			// $("#col7").addClass("color_class");
			// $("#col8").addClass("color_class1");
			// $('#p8').removeClass("hidden");
			//$("#col8").addClass("color_class1");

			//latest_design
			$("#col8").addClass("color_class_latest");
			$('#p8').removeClass("hidden");
			$('#arrow11').removeClass("hidden");
			$('#icon11').removeClass("hidden");
			this.feedback2 = this.str2;
			
		}else if(this.register2_array.register2_screener2_totalScore2=="High risk"){
			
			
			// $("#col7_new").addClass("color_class_new");
			// $("#col7").addClass("color_class");
			// $("#col8").addClass("color_class1");
			// $("#col9").addClass("color_class2");
			// $('#p9').removeClass("hidden");

			//latest_design
			$("#col9").addClass("color_class_latest");
			$('#p9').removeClass("hidden");
			$('#arrow12').removeClass("hidden");
			$('#icon12').removeClass("hidden");
			this.feedback2 = this.str3;
    }
    
    	/*anxiety screener score*/
		
		if(this.register3_array[0].register3_screener1_totalScore1 ==0){
			
			// $("#col4_new").addClass("color_class_new");
			// $('#p4_new').removeClass("hidden");

			//latest_design
			$("#col4_new").addClass("color_class_latest");
			$('#p4_new').removeClass("hidden");
			$('#arrow5').removeClass("hidden");
			$('#icon5').removeClass("hidden");
			this.feedback3 = this.str1;
		}else if((this.register3_array[0].register3_screener1_totalScore1>0) && (this.register3_array[0].register3_screener1_totalScore1<=5)){
			
			// $("#col4_new").addClass("color_class_new");
			// $("#col4").addClass("color_class");
			// $('#p4').removeClass("hidden");

			//latest_design
			$("#col4").addClass("color_class_latest");
			$('#p4').removeClass("hidden");
			$('#arrow6').removeClass("hidden");
			$('#icon6').removeClass("hidden");
			this.feedback3 = this.str1;
		}else if(this.register3_array[0].register3_screener1_totalScore1 >5 && this.register3_array[0].register3_screener1_totalScore1<=10 ){
			
			
			// $("#col4_new").addClass("color_class_new");
			// $("#col4").addClass("color_class");
			// $("#col5").addClass("color_class1");
			// $('#p5').removeClass("hidden");

			//latest_design
			$("#col5").addClass("color_class_latest");
			$('#p5').removeClass("hidden");
			$('#arrow7').removeClass("hidden");
			$('#icon7').removeClass("hidden");
			this.feedback3 = this.str2;
			}else {
        
			
			// $("#col4_new").addClass("color_class_new");
			// $("#col4").addClass("color_class");
			// $("#col5").addClass("color_class1");
			// $("#col6").addClass("color_class2");
			// $('#p6').removeClass("hidden");

			//latest_design
			$("#col6").addClass("color_class_latest");
			$('#p6').removeClass("hidden");
			$('#arrow8').removeClass("hidden");
			$('#icon8').removeClass("hidden");
			this.feedback3 = this.str3;
    }
    	/*current functioning*/
		
		
		if(this.register3_array[0].register3_screener2_totalScore2==0){
			
			// $("#col10_new").addClass("color_class_new");
			// $('#p10_new').removeClass("hidden");

			//latest_design
			$("#col10_new").addClass("color_class_latest");
			$('#p10_new').removeClass("hidden");
			$('#arrow13').removeClass("hidden");
			$('#icon13').removeClass("hidden");
			this.feedback4 = this.str1;
		}else if((this.register3_array[0].register3_screener2_totalScore2>0) && (this.register3_array[0].register3_screener2_totalScore2<=10)){
			
			// $("#col10_new").addClass("color_class_new");
			// $("#col10").addClass("color_class");
			// $('#p10').removeClass("hidden");

			//latest_design
			$("#col10").addClass("color_class_latest");
			$('#p10').removeClass("hidden");
			$('#arrow14').removeClass("hidden");
			$('#icon14').removeClass("hidden");
			this.feedback4 = this.str1;
		}else if(this.register3_array[0].register3_screener2_totalScore2 >10 && this.register3_array[0].register3_screener2_totalScore2<=20 ){
			
			// $("#col10_new").addClass("color_class_new");
			// $("#col10").addClass("color_class");
			// $("#col11").addClass("color_class1");
			// $('#p11').removeClass("hidden");

			//latest_design
			$("#col11").addClass("color_class_latest");
			$('#p11').removeClass("hidden");
			$('#arrow15').removeClass("hidden");
			$('#icon15').removeClass("hidden");
			this.feedback4 = this.str2;
		}else {
			
			// $("#col10_new").addClass("color_class_new");
			// $("#col10").addClass("color_class");
			// $("#col11").addClass("color_class1");
			// $("#col12").addClass("color_class2");
			// $('#p12').removeClass("hidden");
			$("#col12").addClass("color_class_latest");
			$('#p12').removeClass("hidden");
			$('#arrow16').removeClass("hidden");
			$('#icon16').removeClass("hidden");
			this.feedback4 = this.str3;
    }
    

    //displaying the recommendations from push-d team on the right side of the modal
   
	if(this.feedback1 == this.str3 && this.feedback2==this.str3 || this.feedback3 == this.str3 || this.feedback4 == this.str3){
		this.output = "We strongly recommend   you to seek face to face/direct professional help for   your mental health concerns. Mere reliance on PUSH-D will be very insufficient to help   you.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
		document.getElementById("recommend").innerHTML = this.output;
		document.getElementById("recommend").style.textAlign="justify";
		document.getElementById("recommend").style.padding="50px";
		document.getElementById("recommend").style.fontWeight="bold";
		}else if(this.feedback1 == this.str2 && this.feedback2==this.str2 || this.feedback3 == this.str2 || this.feedback4 == this.str2){
      this.output = "You may register for and use PUSH-D. But  we  would  strongly  recommend   you to use   it  as a supplement  /add-on to face  to face   professional  treatment.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
		document.getElementById("recommend").innerHTML = this.output;
		document.getElementById("recommend").style.textAlign="justify";
		document.getElementById("recommend").style.padding="50px";
		document.getElementById("recommend").style.fontWeight="bold";
		}else {
      this.output = "You may register   for PUSH-D for self-help.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
		document.getElementById("recommend").innerHTML = this.output;
		document.getElementById("recommend").style.textAlign="justify";
		document.getElementById("recommend").style.padding="50px";
		document.getElementById("recommend").style.fontWeight="bold";
		}
     $('#feedbackmodal').modal("show");
  }else{
			
    alert("all fields are mandatory");
    this.questions7_array=[];
    this.register3_array=[];
    return false;
    
  }
    

  }

  logOut(){
	  this.router.navigate(['/']);
  }

}
