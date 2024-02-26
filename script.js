function calc(){
    const height=document.getElementById("height").value
    console.log(height);
    const weight=document.getElementById("weight").value
    const result=document.getElementById("result")
   
 result.innerHTML=Math.round(((weight)/(height*height)*100))/100
 const heightt=document.getElementById("height-indicator")
 const weightt=document.getElementById("weight-indicator")
    if(height==0){
       
        heightt.innerHTML="please enter your weight"
        result.innerHTML="oopss!!"
    }
    else{
        heightt.innerHTM=" "
    }
    if(weight==0){
         weightt.innerHTML="please enter your weight"
    }
    else{
        weightt.innerHTML=" "
    }
  

    const display=document.getElementById("display")
    if(result.innerHTML<=18.5){
        display.innerHTML="\"you are under weight\" <span style='font-size:50px;'>&#128566;</span>"
        display.style.color="red"
    }
   
    else if(result.innerHTML<=24.9){
        display.innerHTML="\"you have normal BMI\" <span style='font-size:50px;'>&#128077;</span> "
        display.style.color="green"
    }
    else if(result.innerHTML<=29.5){
        display.innerHTML="\"you are Over weight\"<span style='font-size:40px;'>&#128559;</span>  "
        display.style.color="blue"
    }
    else if(result.innerHTML>30){
        display.innerHTML="\"you have obesity\"<span style='font-size:50px;'>&#128556;</span> "
        display.style.color="red"

    }
    else {
        display.innerHTML=" "
    }
} 