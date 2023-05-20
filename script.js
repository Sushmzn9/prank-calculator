


const btns =document.querySelectorAll(".btn");


//importing audio

const audioFile = new Audio("./aa.wav");


const displayElem = document.querySelector(".display");
let stringToDisplay="";
let latestOperator="";
const operators=["+","-","*","/","%",];
btns.forEach(btn=>{
   
    // console.log("btn", btn.innerHTML);

    btn.addEventListener("click", ()=>{
let clickedButton =btn.innerText;
// console.log("clickedButton",clickedButton);
if(operators.includes(clickedButton) && !stringToDisplay.length){
    return;
}                                   

if(clickedButton==="AC"){
    stringToDisplay="";
    return displayResult("");
}
if(clickedButton==="←"){
    stringToDisplay=stringToDisplay.slice(0,-1);
    return displayResult(stringToDisplay);
}
if(operators.includes(clickedButton)){
    latestOperator=clickedButton;
  const lastCharacter=stringToDisplay.slice( -1);
  console.log(lastCharacter);


if(operators.includes(lastCharacter)){
stringToDisplay=stringToDisplay.slice(0,-1);
}

}
if (clickedButton === ".") {
    const indexOflastOperator = stringToDisplay.lastIndexOf(latestOperator);
    const lastNumberSet = stringToDisplay.slice(indexOflastOperator);
  
    if (lastNumberSet.includes(".")) {
      return;
    }
  
    if (!latestOperator && stringToDisplay.includes(".")) {
      return;
    }
  
    displayResult(stringToDisplay); // Update display after adding decimal point
  }
  
if (clickedButton==="="){
    const lastCharacter= stringToDisplay.slice(-1);

    if (operators.includes(lastCharacter)){
        stringToDisplay=stringToDisplay.slice(0,-1);
        
    }
return displayTotal(stringToDisplay);
}

stringToDisplay+=clickedButton;
displayResult(stringToDisplay);
    });
    
});

const displayResult =(value)=>{
    displayElem.innerText = value || "0"
}


const displayTotal =(value)=>{
    const PrankData= sendRandom();
    if (PrankData){
        audioFile.play();
        displayElem.style.background="#f53030bd"
        setTimeout(()=> displayElem.style.background= "", 2000)

    }
let totalValue =eval(value).toString();
stringToDisplay=totalValue;
displayResult(totalValue)

}

 const sendRandom = () => {
   let randomNumber= Math.round( Math.random()*10)
//    if (randomNumber < 3)
//     return randomNumber
//    }
//    else{
//     return 0;
//    }
return randomNumber < 3 ? randomNumber : 0
}

sendRandom(); 