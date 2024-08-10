var num = 90;
var i = 4;
while(i>0){
    var user = readLineSync.questionInt(" guess number : - ");
 
    if(user == num ){
        console.log("right")
       break 
    } 
    else if(i>1){ 
        console.log("wrong") 
    }

    i--
   if(i > 0){
        console.log(`You have ${i} attempt left`)
    }  
    else{ console.log( " you have no more attempt")}
    
}
