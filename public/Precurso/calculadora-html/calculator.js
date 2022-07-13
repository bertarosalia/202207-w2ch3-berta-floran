let currentValue= "";
let previousValue= "";
const display = document.getElementById ('current-value');
const display2 = document.getElementById ('previous-value')
const numbersButtons = document.querySelectorAll ('.number');
const operatorButtons = document.querySelectorAll ('.operator');
const backButton = document.querySelector ('.back');
const eraserButton = document.querySelector ('.doubleButton');
const equalButton = document.querySelector ('.equal');
let result;
let operator;
const decimalButton= document.querySelector ('.comma');


numbersButtons.forEach((button) => {
button.addEventListener ('click',() => {currentValue = currentValue + button.innerText;
   display.innerText = currentValue;
   display2.innerText = "";
    });
});

operatorButtons.forEach((button) =>{
  button.addEventListener ('click',() =>{
    previousValue = currentValue;
    currentValue="";
    operator = button.innerText;
    display.innerText = previousValue + button.innerText;
  })
   });

const addListeners =(button) =>{
  backButton.addEventListener ('click',() => 
  {currentValue= currentValue.slice(0,-1).toString()
    display2.innerText = "";
    display.innerText = currentValue;
   });
 eraserButton.addEventListener ('click',() => 
 {currentValue= "";
   display.innerText = currentValue;
   display2.innerText = "";
});
equalButton.addEventListener ('click', ()=>{
  calculate();
    display2.innerText = result;
    currentValue= "";
    display.innerText = currentValue;
});
};
addListeners();

const floatingNumbers =(button) =>{
  decimalButton.addEventListener('click', () => { 
   if (!currentValue.includes(".")){
    currentValue= currentValue + ".";
      display.innerText =  currentValue;
    }else{
      return
    } 
})
};
floatingNumbers();

const calculate=()=>{
  switch(operator){
    case "+":
      result = +previousValue + +currentValue;
      display2.innerText = result;
          break;
    case "-":
        result = +previousValue - +currentValue;
        display2.innerText = result;
        break;
    case "X":
      result = +previousValue * +currentValue;
      display2.innerText = result;
      break;
    case "%":
      result = +previousValue / +currentValue;
      display2.innerText = result;
      break;
  }
 };




