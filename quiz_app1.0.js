


const question_display=document.getElementById("question_display");
const submit =document.querySelector(".submit");
const subco=document.getElementById("sub_container");
       const questions =[{
    question:"What is the TCP port for FTP",
    answer:[
        {text:"Port 21" , correct:true},
        {text:"Port 443", correct:false},
        {text:"Port 22", correct:false
        }
        
    ]

  },{ question:"What is the TCP port for telnet",  
     answer:[
        {text:"Port 43", correct:false},
        {text:"Port 23", correct:true},
        {text:"Port 53", correct:false}
       
    ]

  },{ question:"What is the TCP port for HTTP",
     answer:[
        {text:"Port 21", correct:false},
        {text:"Port 23", correct:false},
        {text:"Port 80", correct:true}
        
    ]

  }
];


 
let index=1;
let  current_index=0;
let current_answers=questions[index];

 let count2=0;
//question3.innerHTML=questions[0].answer[0].text;
 
submit.addEventListener("click",()=>{
   restart_state();
          let current_question =questions[current_index].question;
           question_display.innerHTML=current_question;
        
         const current_answers=questions[current_index];
         current_answers.answer.forEach(Element=> {
        const options= document.createElement("button");
        options.classList.add("btn");
            options.innerHTML=Element.text;
            subco.appendChild(options);
            });
          current_index++;
   });
 


     function restart_state(){
     //let subco=document.getElementById("sub_container");
     while(subco.firstChild){
        subco.removeChild(subco.firstChild);
     }
   }
    indexx+=1;
    console.log(indexx);

