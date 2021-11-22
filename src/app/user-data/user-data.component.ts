import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServerService} from '../server.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';


declare var jquery:any;
declare var $ :any;



@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  dataArray = [];
  public Responselist: {[k: string]: any} = {};
  
  container1;
  table;
  tr;
  td1;td2;td3;td3_a;td4;td5;td6;td7;td8;td9;td10;td11;td12;td13;td14;td15;td16;td17;td18;td19;td20;
  td21;td22;td23;td24;td25;td26;td27;td28;td29;td30;td31;td32;td33;td34;td35;td36;td37;td38;td39;td40;
  td41;td42;td43;td44;td45;td46;td47;
  feedback1;feedback2;feedback3;feedback4;
  output;
  
  res =[];
  res1=[];
  res2=[];
  res2_a=[];
  res2_b=[];
  res3=[];
  res3_a=[];
  res3_b=[];
  score1=0;score3=0;score4=0;
  str1;
  str2;
  str3;
  str4;
  id=0;
  public allItems: {};
  arr_1;
  arr_2;
  arr_3;
  arr_4;

  

  company_id = sessionStorage.getItem("companyId");
  company_name = sessionStorage.getItem("companyName");
  
  

  constructor(private serverService: ServerService,private router: Router) { }

  ngOnInit() {

    this.getUsersOfCompany();
    console.log(this.company_name);

  
  }


  getUsersOfCompany(){
    this.serverService.getUsersOfCompany(this.company_id)
    .subscribe((response)=>{
    
      if(response.length == 0){
        this.container1 = document.getElementById('divID_new');
        this.table = document.getElementById('table1');
        this.table.setAttribute("style", "border: 1px solid black;");
             this.tr = document.createElement('tr'); 
            //  this.td1 = document.createElement('td'); 
            //  this.td1.setAttribute('class', 'className');
            //  this.td1.innerHTML = "No message to display";
            alert("No data to display !!");
             
     
             this.tr.appendChild(this.td1);
             this.table.appendChild(this.tr);
             this.container1.appendChild(this.table);
      }else{
       
        for (var i=0;i<response.length;i++){
          this.Responselist={}
          this.res = response[i][2].split("@@@@");
        


          //first and second screeners
          this.res1 = this.res[0].split("undefined");
          this.res2 = this.res1[1].split("#@@#");
          this.res2_a = this.res2[0].split("#");
          this.res2_a = (this.res2_a);
          this.res2_b = this.res2[1].split("@");
           
           //third and fourth screeners
          
           this.res3 = this.res[1].split("#@@#");
           this.res3_a = this.res3[0].split("#");
           this.res3_b = this.res3[1].split("@");
        
        //date
        //this.Responselist.data1 ="06-11-2019";
          //serial no.
        this.Responselist.data2 =response[i][0];
       
        //depression res
        this.Responselist.data3 =this.res2_a[0];
        this.Responselist.data4 =this.res2_a[1];
        this.Responselist.data5 =this.res2_a[2];
        this.Responselist.data6 =this.res2_a[3];
        this.Responselist.data7 =this.res2_a[4];
        this.Responselist.data8 =this.res2_a[5];
        this.Responselist.data9 =this.res2_a[6];
        this.Responselist.data10 =this.res2_a[7];
        this.Responselist.data11 =this.res2_a[8];

       
        //depression score
        this.score1 = Number( this.res2_a[0]) + Number( this.res2_a[1]) + Number( this.res2_a[2]) + Number( this.res2_a[3]) + Number( this.res2_a[4]) + Number(this. res2_a[5]) + Number( this.res2_a[6]) + Number( this.res2_a[7]) + Number( this.res2_a[8]);
        if(this.score1 == 0){
		  		this.Responselist.data12 ="None Reported";	
		  		this.str1="Mild";
		  	}else if(this.score1>0 && this.score1<=5){
          this.Responselist.data12 ="Mild";	
		  		this.str1="Mild";	
		  	}else if(this.score1 > 5 && this.score1 <= 10){
		  		this.Responselist.data12 ="Moderate";
          this.	str1="Moderate";
		  	}else{
		  		this.Responselist.data12 ="Severe";
		  		this.str1="Severe";
        }
        
        //p4 screener res
        this.Responselist.data13 = this.res2_b[0];
        this.Responselist.data14 = this.res2_b[1];
        this.Responselist.data15 = this.res2_b[2];
        this.Responselist.data16 = this.res2_b[3];

        if((this.res2_b[3] === "Yes") && (this.res2_b[4] ==undefined)){
          this.Responselist.data17 = "No data";
       }else if(this.res2_b[3] === "No" && this.res2_b[4] == undefined){
        this.Responselist.data17 = "";
       }else
       this.Responselist.data17 = this.res2_b[4];


       //p4 screener score - new algo
		     
       if(this.res2_b[2]==="Somewhat likely" || this.res2_b[2]==="Very likely" ||  (this.res2_b[2]==="Not at all likely" && this.res2_b[3]==="No")){
		    	 
		    	
        this.Responselist.data18="High";
        this.str2="Severe";
      
       }else if(this.res2_b[0]==="No" && this.res2_b[1]==="No" && this.res2_b[2]==="Not at all likely" && this.res2_b[3]==="Yes"){
                
          
        this.Responselist.data18 = "Minimal";
        this.str2="Mild";
            
      }else{
         
          
        this.Responselist.data18="Low";
        this.str2="Moderate";
         
      }
        
      //anxiety res
      this.Responselist.data19 = this.res3_a[0];
      this.Responselist.data20 = this.res3_a[1];
      this.Responselist.data21 = this.res3_a[2];
      this.Responselist.data22 = this.res3_a[3];
      this.Responselist.data23 = this.res3_a[4];
      this.Responselist.data24 = this.res3_a[5];
      this.Responselist.data25 = this.res3_a[6];
     

      //anxiety score
      this.score3 = Number(this.res3_a[0]) + Number(this.res3_a[1]) + Number(this.res3_a[2]) + Number(this.res3_a[3]) + Number(this.res3_a[4]) + Number(this.res3_a[5]) + Number(this.res3_a[6]); 
		    
		     
       if(this.score3 == 0){
        this.Responselist.data26 ="None Reported";
        this.str3="Mild";
       }else if(this.score3 > 0 && this.score3<=5){
        this.Responselist.data26 ="Mild";
        this.str3="Mild";
       }else if(this.score3 > 5 && this.score3 <= 10){
        this.Responselist.data26 ="Moderate";
        this.str3="Moderate";
       }else{
        this.Responselist.data26 ="Severe";
        this.str3="Severe";
       }

       //current functioning res
       this.Responselist.data27 = this.res3_b[1];
       this.Responselist.data28 = this.res3_b[2];
       this.Responselist.data29 = this.res3_b[3];
       this.Responselist.data30 = this.res3_b[4];
      
       this.arr_1 = this.res3_b[5].split("$$##");
       this.Responselist.data31 = this.arr_1[0];

       //age,gender and survey
       if(this.arr_1[1] != null){
       this.arr_2 = this.arr_1[1].split("#");
       this.Responselist.data34 = this.arr_2[0];
      this.Responselist.data35 = this.arr_2[1];
      this.Responselist.data36 = this.arr_2[2];
      }else{
        
        this.Responselist.data34 = "NYA";
        this.Responselist.data35 = "NYA";
        this.Responselist.data36 = "NYA";
      }
     
       //current functioning score
		   
		    this.score4 = Number(this.res3_b[1]) + Number(this.res3_b[2]) + Number( this.res3_b[3]) + Number( this.res3_b[4]) +  Number(this.arr_1[0]); 
		    console.log(typeof this.score4);
		    if(this.score4 == 0){
		    	this.Responselist.data32 = "None Reported";
		    	this.str4="Mild";
		    }else if(this.score4>0 && this.score4<=10){
          this.Responselist.data32 = "Mild";
          this.str4="Mild";
		  	}else if(this.score4 > 10 && this.score4 <= 20){
		  		this.Responselist.data32 ="Moderate";
		  		this.str4="Moderate";
		  	}else{
		  		this.Responselist.data32 ="Severe";
		  		this.str4="Severe";
        }

        //overall feedback
        if(this.str1 == "Severe" && this.str2 == "Severe" || this.str3 == "Severe" || this.str4 == "Severe"){
          this.Responselist.data33 ="We strongly recommend   you to seek face to face/direct professional help for   your mental health concerns. Mere reliance on PUSH-D will be very insufficient to help   you.";
          }else if((this.str1 == "Moderate" && this.str2=="Moderate") || this.str3 == "Moderate" || this.str4 == "Moderate"){
            this.Responselist.data33 = "You may register for and use PUSH-D. But  we  would  strongly  recommend   you to use   it  as a supplement  /add-on to face  to face   professional  treatment.";
          }else{
            this.Responselist.data33 = "You may register   for PUSH-D for self-help.";
          }

        this.dataArray.push(this.Responselist);
        
          
        }
        
      }
       
       
       
    },
    (error) =>console.log(error)
    );
  }
  displayResponseOfUser(res_id){
    this.serverService.displayResponseOfUser(res_id)
    .subscribe((response)=>{

      $('#feedbackmodal').modal("show");
     

          //first and second screeners
          this.id = response[0][0];
          this.res = response[0][2].split("@@@@");
          this.res1 = this.res[0].split("undefined");
          this.res2 = this.res1[1].split("#@@#");
          this.res2_a = this.res2[0].split("#");
          this.res2_a = (this.res2_a);
          this.res2_b = this.res2[1].split("@");
           
           //third and fourth screeners
          
           this.res3 = this.res[1].split("#@@#");
           this.res3_a = this.res3[0].split("#");
           this.res3_b = this.res3[1].split("@");

           //depression score
           this.score1 = Number( this.res2_a[0]) + Number( this.res2_a[1]) + Number( this.res2_a[2]) + Number( this.res2_a[3]) + Number( this.res2_a[4]) + Number(this. res2_a[5]) + Number( this.res2_a[6]) + Number( this.res2_a[7]) + Number( this.res2_a[8]);
        if(this.score1 == 0){
		  		this.Responselist.data12 ="None Reported";	
          this.str1="Mild";
          this.feedback1 = this.str1;
					// $('#col1_new').addClass("color_class_new");
          // $('#p1_new').removeClass("hidden");

          //latest_design
          $('#col1_new').addClass("color_class_latest");
			    $('#p1_new').removeClass("hidden");
			    $('#arrow1').removeClass("hidden");
			    $('#icon1').removeClass("hidden");
		  	}else if(this.score1>0 && this.score1<=5){
          this.Responselist.data12 ="Mild";	
          this.str1="Mild";	
          this.feedback1 = this.str1;
					// $('#col1_new').addClass("color_class_new");
					// $('#col1').addClass("color_class");
          // $('#p1').removeClass("hidden");

          //latest_design
          $('#col1').addClass("color_class_latest");
			    $('#p1').removeClass("hidden");
			    $('#arrow2').removeClass("hidden");
			    $('#icon2').removeClass("hidden");
		  	}else if(this.score1 > 5 && this.score1 <= 10){
		  		this.Responselist.data12 ="Moderate";
          this.	str1="Moderate";
          this.feedback1 = this.str1;

          //latest_design
          $("#col2").addClass("color_class_latest");
			    $('#p2').removeClass("hidden");
			    $('#arrow3').removeClass("hidden");
			    $('#icon3').removeClass("hidden");
				
		  	}else{
		  		this.Responselist.data12 ="Severe";
          this.str1="Severe";
          this.feedback1 = this.str1;
          // $('#col1_new').addClass("color_class_new");
					// $("#col1").addClass("color_class");
					// $("#col2").addClass("color_class1");
					// $("#col3").addClass("color_class2");
          // $('#p3').removeClass("hidden");

          //latest_design
          $("#col3").addClass("color_class_latest");
			    $('#p3').removeClass("hidden");
			    $('#arrow4').removeClass("hidden");
		    	$('#icon4').removeClass("hidden");
				 
        }

        //anxiety screener score
      this.score3 = Number(this.res3_a[0]) + Number(this.res3_a[1]) + Number(this.res3_a[2]) + Number(this.res3_a[3]) + Number(this.res3_a[4]) + Number(this.res3_a[5]) + Number(this.res3_a[6]); 
		    
		     
      if(this.score3 == 0){
          this.Responselist.data26 ="None Reported";
          this.str3="Mild";
          // $("#col4_new").addClass("color_class_new");
          // $('#p4_new').removeClass("hidden");

          //latest_design
          $("#col4_new").addClass("color_class_latest");
			    $('#p4_new').removeClass("hidden");
			    $('#arrow5').removeClass("hidden");
			    $('#icon5').removeClass("hidden");
					this.feedback3 = this.str3;
      }else if(this.score3 > 0 && this.score3<=5){
            this.Responselist.data26 ="Mild";
            this.str3="Mild";
            // $("#col4_new").addClass("color_class_new");
						// $("#col4").addClass("color_class");
            // $('#p4').removeClass("hidden");

            //latest_design
            $("#col4").addClass("color_class_latest");
			      $('#p4').removeClass("hidden");
			      $('#arrow6').removeClass("hidden");
			      $('#icon6').removeClass("hidden");
						this.feedback3 = this.str3;
      }else if(this.score3 > 5 && this.score3 <= 10){
       this.Responselist.data26 ="Moderate";
       this.str3="Moderate";

            //latest_design
            $("#col5").addClass("color_class_latest");
		      	$('#p5').removeClass("hidden");
			      $('#arrow7').removeClass("hidden");
			      $('#icon7').removeClass("hidden");
					  this.feedback3 = this.str3;
      }else{
            this.Responselist.data26 ="Severe";
            this.str3="Severe";
            this.feedback3 = this.str3;
			  	  // 	$("#col4_new").addClass("color_class_new");
					  // $("#col4").addClass("color_class");
					  // $("#col5").addClass("color_class1");
					  // $("#col6").addClass("color_class2");
            // $('#p6').removeClass("hidden");

            //latest_design
            $("#col6").addClass("color_class_latest");
			      $('#p6').removeClass("hidden");
			      $('#arrow8').removeClass("hidden");
			      $('#icon8').removeClass("hidden");
      }

      /*self-rated suicidability thoughts score*/
		     
      if(this.res2_b[2]==="Somewhat likely" || this.res2_b[2]==="Very likely" ||  (this.res2_b[2]==="Not at all likely" && this.res2_b[3]==="No")){
		    	 
		    	
            this.Responselist.data18="High";
            this.str2="Severe";
            // $("#col7_new").addClass("color_class_new");
				    // 	$("#col7").addClass("color_class");
				    // 	$("#col8").addClass("color_class1");
				    // 	$("#col9").addClass("color_class2");
            // 	$('#p9').removeClass("hidden");

            //latest_design
            $("#col9").addClass("color_class_latest");
			      $('#p9').removeClass("hidden");
			      $('#arrow12').removeClass("hidden");
            $('#icon12').removeClass("hidden");
            
      
       }else if(this.res2_b[0]==="No" && this.res2_b[1]==="No" && this.res2_b[2]==="Not at all likely" && this.res2_b[3]==="Yes"){
                
          
            this.Responselist.data18 = "Minimal";
            this.str2="Mild";
            // $("#col7_new").addClass("color_class_new");
            // $("#col7").addClass("color_class");
            // //$("#col8").addClass("color_class1");
            // $('#p7').removeClass("hidden");
            //$("#col8").addClass("color_class1");

            //latest_design
            $("#col8").addClass("color_class_latest");
			      $('#p8').removeClass("hidden");
			      $('#arrow11').removeClass("hidden");
			      $('#icon11').removeClass("hidden");
            
      }else{
         
          
            this.Responselist.data18="Low";
            this.str2="Moderate";
            // $("#col7_new").addClass("color_class_new");
            // $("#col7").addClass("color_class");
            // $("#col8").addClass("color_class1");
            // $('#p8').removeClass("hidden");
            //$("#col7").addClass("color_class");

            //latest_design
            $("#col7").addClass("color_class_latest");
			      $('#p7').removeClass("hidden");
			      $('#arrow10').removeClass("hidden");
			      $('#icon10').removeClass("hidden");
        
         
      }

      //current functioning
		    
      this.score4 = Number(this.res3_b[1]) + Number(this.res3_b[2]) + Number( this.res3_b[3]) + Number( this.res3_b[4]) + Number( this.arr_1[0]); 
		    
      if(this.score4 ==0){
            this.Responselist.data32 = "None Reported";
            this.str4="Mild";
            // $("#col10_new").addClass("color_class_new");
            // 		$('#p10_new').removeClass("hidden");

            //latest_design
            $("#col10_new").addClass("color_class_latest");
			      $('#p10_new').removeClass("hidden");
			      $('#arrow13').removeClass("hidden");
			      $('#icon13').removeClass("hidden");
      }else if(this.score4>0 && this.score4<=10){
            this.Responselist.data32 = "Mild";
            this.str4="Mild";
            // $("#col10_new").addClass("color_class_new");
            // 		$("#col10").addClass("color_class");
            // 		$('#p10').removeClass("hidden");

            //latest_design
            $("#col10").addClass("color_class_latest");
			      $('#p10').removeClass("hidden");
			      $('#arrow14').removeClass("hidden");
			      $('#icon14').removeClass("hidden");
      }else if(this.score4 > 10 && this.score4 <= 20){
            this.Responselist.data32 ="Moderate";
            this.str4="Moderate";
            // $("#col10_new").addClass("color_class_new");
            // 		$("#col10").addClass("color_class");
            // 		$("#col11").addClass("color_class1");
            // 		$('#p11').removeClass("hidden");

            //latest_design
            $("#col11").addClass("color_class_latest");
			      $('#p11').removeClass("hidden");
			      $('#arrow15').removeClass("hidden");
			      $('#icon15').removeClass("hidden");
      }else{
            this.Responselist.data32 ="Severe";
            this.str4="Severe";
            // $("#col10_new").addClass("color_class_new");
            // 		$("#col10").addClass("color_class");
            // 		$("#col11").addClass("color_class1");
            // 		$("#col12").addClass("color_class2");
            // 		$('#p12').removeClass("hidden");

            //latest_design
            $("#col12").addClass("color_class_latest");
			      $('#p12').removeClass("hidden");
			      $('#arrow16').removeClass("hidden");
			      $('#icon16').removeClass("hidden");
      }

      if(this.str1 == "Severe" && this.str2 == "Severe" || this.str3 == "Severe" || this.str4 == "Severe"){
					    
        //this.output = "We strongly recommend   you to seek face to face/direct professional help for   your mental health concerns. Mere reliance on PUSH-D will be very insufficient to help   you.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
      
        //latest feedback
        this.output="We strongly recommend you to seek face to face/direct professional help for your mental health concerns. Mere reliance on self-help tools will be very insufficient to help you.";
        document.getElementById("recommend").innerHTML = this.output;
      document.getElementById("recommend").style.textAlign="justify";
      document.getElementById("recommend").style.padding="50px";
      document.getElementById("recommend").style.fontWeight="bold";    
      }else if((this.str1 == "Moderate" && this.str2=="Moderate") || this.str3 == "Moderate" || this.str4 == "Moderate"){
        

        //this.output = "You may register for and use PUSH-D. But  we  would  strongly  recommend   you to use   it  as a supplement  /add-on to face  to face   professional  treatment.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
      
        //latest feedback
        this.output="You may use structured self-help tools such as PUSH-D. But we would strongly recommend you to use it as a supplement/add-on to face-to-face professional treatment.";
        document.getElementById("recommend").innerHTML = this.output;
      document.getElementById("recommend").style.textAlign="justify";
      document.getElementById("recommend").style.padding="50px";
      document.getElementById("recommend").style.fontWeight="bold";    
      }else{
      
        //this.output = "You may register   for PUSH-D for self-help.<br>This feedback is based on a brief screening of your current depressive and anxiety symptoms. This is not meant to diagnose depression/anxiety disorder which is best done by meeting a health professional.";
     
        //latest feedback
        this.output="You may use structured self-help tools  such as PUSH-D for self-help.";
        document.getElementById("recommend").innerHTML = this.output;
      document.getElementById("recommend").style.textAlign="justify";
      document.getElementById("recommend").style.padding="50px";
      document.getElementById("recommend").style.fontWeight="bold";
        }
      
    });

  }
  close_modal(){
	   		
    $('#feedbackmodal').modal('hide');
    window.location.reload();
  }
  logOut(){
    this.router.navigate(['/admin']);
  }

  back(){
    this.router.navigate(['admin/list_company']);
  }
  download(){
    this.allItems = this.dataArray;

    var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    headers: ['Date','Response_Id','DepressQ1','DepressQ2','DepressQ3','DepressQ4','DepressQ5','DepressQ6','DepressQ7','DepressQ8','DepressQ9',
  'Depress Score','P4Q1','P4Q2','P4Q3','P4Q4','P4Q4 if Any','P4 Score','AnxietyQ1','AnxietyQ2','AnxietyQ3','AnxietyQ4','AnxietyQ5','AnxietyQ6',
  'AnxietyQ7','Anxiety Score','Current.FuncQ1','Current.FuncQ2','Current.FuncQ3','Current.FuncQ4','Current.FuncQ5','Current.Func Score','Overall Score'] 
    };
    new Angular2Csv(this.allItems, 'Screener Report',options);

      }
}
