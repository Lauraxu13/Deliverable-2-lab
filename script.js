function myFunction() {
  var eventType = prompt("Please enter Event type", "casual, semi-formal, formal");
  var tempFarh = prompt("What is the Temperature", "Temperature in F");
      
//     var eventType = document.getElementById('inputEvent').value;
//     var tempFarh = document.getElementById('inputNumber').value;
  var result = "";
  var eventClothing = "";
  var tempClothing = "";
  var resultElement = document.getElementById('outputResult');
  
  
  if (eventType == "casual"){
    eventClothing = "something comfy";
  }
  else if (eventType == "semi-formal"){
    eventClothing = "polo";
  }
  else if (eventType == "formal"){
    eventClothing = "suit";
  }
  
  if (tempFarh < 54){
    tempClothing = "a coat";
  }
  else if ((tempFarh >= 54) && (tempFarh <= 70)){
    tempClothing = "a jacket";
  }
  else if (tempFarh > 70){
    tempClothing = "no jacket";
  }
  
  result = "Since it is " + tempFarh + " degrees and you are going to a " + eventType + " event, you should wear " + eventClothing + " and " + tempClothing;
//     resultElement.innerHTML = result;
  console.log(result);
  document.getElementById("demo").innerHTML = result;
    
  }
    
    
    