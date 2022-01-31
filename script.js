let numberButtons = document.querySelectorAll('.calc-button');
let opButtons = document.querySelectorAll('.op-button');
let equalsButton = document.querySelector('.equals-button');
let delButton = document.querySelector('.del-button');
let clearButton = document.querySelector('.clear-button');
let prevOutput = document.querySelector('.prev-output');
let currentOutput = document.querySelector('.current-output');


function clear() {
    currentOutput = '';
    prevOutput = '';
    opButtons = '';
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNum(button.innerText);
        console.log(currentOutput);
        currentOutput.innerHTML = currentOutput;
    });
})

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerHTML);
    });
})

delButton.addEventListener('click', () => {
    console.log(delButton.innerHTML);
});


clearButton.addEventListener('click', () => {
    console.log(clearButton.innerHTML);
    clear();
});

equalsButton.addEventListener('click', () => {
    console.log(equalsButton.innerHTML);
   
});

function appendNum(number) {
    return currentOutput += number;
}



function add(a, b) {
    return(Number(a)+Number(b));
}

function subtract(a, b) {
    return(a-b);
}

function multiply(a, b) {
    return(a*b);
}

function divide(a, b) {
    if(b == 0) {
        return("Can't divide by 0")
    }
    return(a/b);
}

function operate(a, op, b) {
    switch(op) {
        case('+'):
            console.log(add(a, b));
            return add(a, b);
        case '-':
            console.log(subtract(a, b));
            break;
        case multiply:
            console.log(multiply(a, b));
            break;
        case divide:
            console.log(divide(a, b));
            break;
    }
    currentOutput = '';
}

clear();

// function getValue(buttonValue) {
//     displayValue = buttonValue.target.value;
   
//     if(isNaN(displayValue) == false) {
//         a = output.innerHTML + displayValue;
//         output.innerHTML = a;
//     }
    
//     if (displayValue == '+') {
//         op = displayValue;
//         b = a;
//         a = prev.innerHTML;
//         prev.innerHTML = operate(a, op, b);
        
//         output.innerHTML = '';
//     }
//     if(displayValue == 'Clear') {
//         output.innerHTML = '';
//         a = '';
//         b = '';
//         op = '';
//         prev.innerHTML = '';
//         console.log("clear");
//     }

// }

// function updateOutput(displayValue) {
    
    
    
    
//     // // if (displayValue == 'Del') {
//     // //     displayValue = a.slice(0, -1);
//     // //     output.innerHTML = displayValue;
//     // //     console.log(displayValue);
//     // // }
//     // if (displayValue == '=') {
//     //     operate(a, op, b);
//     //     console.log('equals')
//     // }
//     // console.log(output.innerHTML);
    
    
// }





