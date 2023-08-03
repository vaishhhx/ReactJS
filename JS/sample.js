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
d = 0
if(d===0){
    console.log("The number is zero and adding 1 to it to make it positive")
    d=d+1
}
if(d>0){
    console.log("The number is positive")
}
else{
    console.log("The number is negative") 
}

//looping, for, foreach, forin, forof while, do..while

//for loop
for(i = 0; i<a;i++){
    console.log(i)
}

//while loop
i = 0
while(i <=a){
    console.log(i)
    i++
}

//foreach
array = [10,20]
array.forEach(element => console.log(element));