const readLineSync = require("readline-sync");
let idade = readLineSync.question('ditige sua idade ');
console.log(typeof idade);
if(idade >=18)
    console.log('voce é maior de idade ')
else    
    console.log("menor ")
