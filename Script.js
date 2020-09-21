
function printOutput(output) {
    document.getElementById("output").innerText=output;
}

function getFormattedNumber(num){
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

let expression = "";
let signs = '';
function calculate(value){
  if((Number.isInteger(parseInt(value))) || value==='.') {
    if(signs !== ''){
      expression += signs;
      signs = '';
    }
    expression += value;
    printOutput(expression);

  } else if(value === '=') {
    try{
      eval(expression);
    }
    catch(error){
      printOutput('Error');
    }
    let result = eval(expression);
    printOutput(getFormattedNumber(result));
    expression = '';
    return result;

  } else if(value === '/' || value ==='*' || value === '-' || value === '+'){
    signs = value;
    printOutput(expression+signs);

  } else if(value === 'C'){
    expression = '';
    signs = '';
    printOutput('');
  }
}


let buttons = document.getElementsByClassName("button");
for(let i=0; i<buttons.length;i++){
  buttons[i].addEventListener('click',function(e){
    let result = calculate(this.value);
    console.log(result);
  })
}
