var a = 2;
var b = 9/10
console.log(b)

var num = 123; 
var sum = 0; 

while (num>0){
    let stor = num%10 // 123 % 10 = 3
    sum = sum*10+stor // 0*10+3 = 3
    num = Math.floor(num/10) // 123 /10 = 12.3 = 12
}
console.log(sum)
