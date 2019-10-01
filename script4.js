function go(){
  var testType = document.getElementById("testType").value;
  var input = document.getElementById("textBox").value;

  console.log(input);

  if(testType == "0"){
    document.getElementById("output").innerHTML = countTriangle(+input);
  }
  if(testType == "1"){
    document.getElementById("output").innerHTML = countFibonacci(input);
  }
  if(testType == "2"){
    document.getElementById("output").innerHTML = countHI(input);
  }
  if(testType == "3"){
    document.getElementById("output").innerHTML = sumDigits(input);
  }
  if(testType == "4"){
    document.getElementById("output").innerHTML = factorial(input);
  }
  if(testType == "5"){
    document.getElementById("output").innerHTML = countX(input);
  }
  if(testType == "6"){
    document.getElementById("output").innerHTML = countAbc(input);
  }
  if(testType == "7"){
    document.getElementById("output").innerHTML = bunnyEars(input);
  }

}
//Triangle

function countTriangle(rows){
  if(rows == 0){
    return 0;
  }
  return rows + countTriangle(rows - 1);
}


//Fibonacci

function countFibonacci(num){
  if(num == 1){
    return 0;
  }
  if(num == 2){
    return 1;
  }
  return countFibonacci(num - 1) + countFibonacci(num - 2);
}


//countHI

function countHI(string){

  //base case
  if(string.length == 0) {
    return 0;
  }

  //recursive cases
  if(string.substring(string.length - 2) == "hi"){
    return 1 + countHI(string.substring(0, string.length - 2));
  }

  return countHI(string.substring(0, string.length - 1));
}

//sumDigits

function sumDigits(num){
if(num < 10){
  return num;
}
  return sumDigits(Math.floor(num / 10)) + num % 10 ;
}

function factorial(n){
  if(n == 0){
    return 1;
  }
  return n * factorial( n - 1);
}

function countX(string){
  if(string.length == 0){
    return 0;
  }
  if(string.substring(string.length - 1) == "x" ){
  return 1 + countX(string.substring(0, string.length - 1));
  }
  return countX(string.substring(0, string.length - 1));
}

function countAbc(string){
  if(string.length == 0){
    return 0;
  }
  if(string.substring(string.length - 3 ) == "abc"){
    return 1 + countAbc(string.substring(0, string.length - 3 ));
  }

  return countAbc(string.substring(0, string.length -1 ));
}

function bunnyEars(num){
  if(num == 0){
    return 0;
  }
  return bunnyEars(num - 1) + 2;
}
