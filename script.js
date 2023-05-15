/*HINTS FOR CALCULATOR 

1. GRAB ALL THE BUTTONS FIRST



2. GRAB THE DISPLAY ELEMENT and make display element as 0(zero)
3. LOOP THROUGH ALL THE BUTTONS 
4. ADD CLICK EVENT LISTNER TO THE BUTTON (inside the lopp)
5. GET THE CONTENT OF THE BUTTON and CHECK WHAT BUTTON IS BEING PRESSED
6. EX: IF USER PRESSED THE AC BUTTON, CLEAR THE CONTENT OF THE DISPLAY
7. EX: IF USER PRESSED THE DEL BUTTON, REMOVE THE LAST CHARACTER FROM THE DISPLAY TEXT
8. TRICKY: TO CONTROL THE POINT AND EQUALS TO OPERATOR 
9. CREATE A FUNCTION THAT CALCULATES THE TOTAL VALUE OF THE OPERATION
10. CREATE A FUNCTION THAT HANDLES THE DISPLAY OF THE ELEMENT ON THE SCREEN

*/


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
if (clickedButton==="."){
    console.log("clicked")

  
}
if (clickedButton==="="){
    const lastCharacter= stringToDisplay.slice(-1);

    if (operators.includes(lastCharacter)){
        stringToDisplay=stringToDisplay.slice(0,-1);
        
    }
return displayTotal(stringToDisplay);
}

stringToDisplay=stringToDisplay+clickedButton;
displayResult(stringToDisplay);
    })
    
})

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