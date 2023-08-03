//var
var a = 50;
console.log("This is the value declared in var type before altering: " + a);
{
    var a = 7;
    console.log("This is the value declared in var type after altering: " + a);
}
console.log("This is the value declared in var type after block altering: " + a);

//let
let b = 10;
console.log("This is the value declared in let type before altering: " + b);
{
    let b = 15;
    console.log("This is the value declared in let type after altering: " + b);
}
console.log("This is the value declared in let type after block altering: " + b);

//const
const c = 20;
console.log("This is the value declared in const type: " + c);


//If else
a = 7
if(a>0){
    console.log("The number is positive")
}
else{
    console.log("The number is negative") 
}