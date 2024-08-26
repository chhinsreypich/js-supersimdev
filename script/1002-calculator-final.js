//let calculator = '';

let calculator = localStorage.getItem('calculator') || '';

function updateCalculator(numOrOperator){
  
  calculator += numOrOperator;
  console.log (calculator);

  localStorage.setItem('calculator', calculator);

  displayCalculator()

}

function saveCalculation(){
  localStorage.setItem('calculator', calculator);
}

function displayCalculator(){
  document.querySelector('.display').innerHTML = calculator ;
}
