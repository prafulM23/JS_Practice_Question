var a = 0;
var b = 1;
var i = 2;
while (i <= 10){
    
    var sum = a+b // 0+1 = 1
    console.log(sum)
    a = b // b = 1
    b = sum // sum = 1
    i++
}
