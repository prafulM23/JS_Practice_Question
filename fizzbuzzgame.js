 /*let readLineSync = require("readline-sync")
var _number = readLineSync.questionInt("enter int : - ");
if (_number % 3==0 && _number %5==0){
    console.log("fizzbuzz")
  }
 else if(_number % 3==0){
    console.log("fizz")
       }
  else if(_number %5==0){
    console.log("buzz")
      }
 else {
     console.log("not divide both 3 and 5")
    }*/
               const readLineSync=require("readline-sync");

                var _new1 = readLineSync.question("enter string : - ");
                if(_new1.length>=8 && /[A-Z]/.test(_new1) && /[a-z]/.test(_new1) && /[0-9]/.test(_new1)){
                    console.log("right ")
                }else{
                    console.log("wrong")
                }

                
