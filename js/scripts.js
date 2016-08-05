// Determines button clicked via id
function display(id) {
  document.calc.result.value+=id;
}

// Clears calculator input screen
function clearScreen() {
  document.calc.result.value="";
}

// Calculates input values
function calculate() {
  try {
    var input = eval(document.calc.result.value);
    document.calc.result.value=input;
  } catch(err){
      document.calc.result.value="Error";
    }
}

// Adds special message to the screen
function message() {
  if (document.calc.result.value!=""){
    document.calc.result.value="clear screen for message!";
    }
  else {
    document.calc.result.value="07734";
  }
}

function reset(){
  for (i=0; i<10; i++){
    var num = document.getElementById(i);
    num.innerHTML = i;
  }
}

function scramble(){
  for (i=0; i<10; i++){
    var scram = document.getElementById(i);
    scram.innerHTML = Math.floor(Math.random() * 10);
  }
}
