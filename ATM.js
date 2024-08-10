
const readLineSync = require('readline-sync');

let Belence = 10000;
const your_Password = "Praful123";
var card = readLineSync.question("enter your card : - ");
var uppercard = card.toLowerCase();
var storcard = "enter";
let storlanguage1 = "hindi";
let storlanguage2 = "english";
let option1 = "CHECKBALANCE";
let option2 = "DIPOSITE";
let option3 = "WITHDROW";



if(uppercard==storcard){
    let language = readLineSync.question("select one Hindi / English : - ");
    let lowercase = language.toLowerCase()
    
    if(lowercase==storlanguage1 || lowercase==storlanguage2){
        let select_option= readLineSync.question(" checkbalance / diposite / Withdrow : - ");
        let upperoption = select_option.toUpperCase();
       
        if(upperoption==option1){
            let Password = readLineSync.question("enter password : - ")
            if(Password == your_Password){
                console.log(Belence,"you account balance")
            }
            else{console.log("wrong password")}

        }else if(upperoption==option2){
            let diposite_amount = parseInt(readLineSync.questionInt( " enter your amount : - "))
            let Password = readLineSync.question("enter password : - ")
            if(Password == your_Password){
                let stor = diposite_amount+Belence
                console.log(stor,"Total Balenc")
            }
            else{console.log("wrong password")}

        }else if(upperoption==option3){
            let Withdrow_amount = parseInt(readLineSync.questionInt( " enter your amount : - "))
            let Password = readLineSync.question("enter password : - ")
            if(Password == your_Password){
                if(Withdrow_amount<=Belence && Withdrow_amount >= "1000"){
                    let stor = Belence-Withdrow_amount
                    console.log(stor,"Total Balenc")
                }else{ console.log('enter valid amount')}

            }
            else{console.log("wrong password")}
        }else{ console.log("select option")}
    }
    else{ console.log("enter your language")}
}
else{console.log("plz say enter")}
