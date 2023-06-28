const calculateTemp = ()=> {
let tempInput = document.getElementById("temp").value;
let tempSelect = document.getElementById("temp-diff").value;

const calCelsius =(cel) => {
    let  Fahrenheit = Math.round(((cel * 9/5) + 32));
    return Fahrenheit; 
}

const calFahrenheit =(fahren) => {
    let  Celsius  = Math.round(((fahren - 32) * 5 / 9));
    return Celsius ; 
}


let tempResult;
if(tempSelect == "Celsius"){
  tempResult = calCelsius(tempInput);
  document.getElementById("resultContainer").innerHTML = ` = ${ tempResult} Fahrenheit`
}
else{
    tempResult = calFahrenheit(tempInput);
    document.getElementById("resultContainer").innerHTML = ` = ${ tempResult} Celsius`
}

}