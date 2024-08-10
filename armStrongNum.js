
const readLineSync = require('readline-sync');

var num = parseInt(readLineSync.question("enter a num : - "));
let numstor = num;
var add = 0;
while(num>0){
    let stor = num%10 
    let sum = stor**3
    add = add+sum
    num = Math.floor(num/10)
}
console.log(add)
if(add==numstor){
    console.log(numstor,"armstrong number")
}
else{
    console.log(numstor,"not armstrong")
}