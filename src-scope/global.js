// variables

var a;  //declarando 

var b = "b" //decalaramos y asignamos

b= 'bb'; // reasignando una variable

var a = 'aa' // redeclarar una variable



// global scope

var fruit = 'Apple'; //global

console.log(fruit)
function bestFruit(){
    console.log(fruit)
}

bestFruit();

function countries(){
  country = 'Colombia';//asignando un valor global
    console.log(country);
}

countries();
console.log(country);
