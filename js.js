
const calcScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calcScreen.value = number;
};


const numbers = document.querySelectorAll(".number");


numbers.forEach( (number) => {
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);           
        updateScreen(currentNumber);                
    });
}); 


let prevNumber = ''
let calcOperator = ''
let currentNumber = '0'     

const inputNumber = (number) => {   
    if (currentNumber === '0'){
        currentNumber = number;     
    }
    else{
     currentNumber += number;       
    }
};                                   

//------------------------------------------------------------


const operators = document.querySelectorAll(".operator")


operators.forEach( (operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) => {
    if(calcOperator === ''){
        prevNumber = currentNumber;     
    }
    calcOperator = operator;
    currentNumber = '0';                 
};

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener ('click', () => {
    calculate();                    
    updateScreen(currentNumber);        
    clearAll();                     
});                                

 
const calculate = () => {
    let result = '';
    switch (calcOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat(currentNumber);
            break;      

        case "-":
            result = parseFloat (prevNumber) - parseFloat(currentNumber);
            break;

        case "/":
            result = parseFloat (prevNumber) / parseFloat(currentNumber);
            break;
        
        case "*":
            result = parseFloat (prevNumber) * parseFloat(currentNumber);
            break;
        
        case "%":
            result = parseFloat (prevNumber) / 100;     
            break;
        
        default:
            break;
    };
    currentNumber = result;     
    calcOperator = '';          
};

//--------------------------------------------------


const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = '';
    calcOperator = '';
    currentNumber = '0';
};

//---------------------------------------------------


const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal (event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    };
    currentNumber += dot;
};

//-------------------------------------------------
const percentages = document.querySelector(".percentage");

percentage.addEventListener("click", (event) =>{
    percenting()
});
percenting = () =>{
    if (prevNumber === "") {
        currentNumber = currentNumber/100;
        updateScreen(currentNumber);
    }
    if (prevNumber !== "") {
        currentNumber = (prevNumber*currentNumber)/100;
        updateScreen(currentNumber);
    }
};
