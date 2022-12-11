var input = require('readline-sync')
var points = 0

function CLIquiz(question,answer) {
    console.log(i+1+"."+question)
    let ans = input.question("")
    if (answer == ans){
        console.log("Right");
        points++
    }
    else{
        console.log("Wrong");
    }
    console.log("-----------$$-----------");
}


let data = [{
    question:"What is my name?",
    answer:"Nigm"
},{
    question:"How old am I?",
    answer:"18" 
},{
    question:"What motivates me to work hard?",
    answer:"Money"
},{
    question:"If I could live anywhere, where would it be?",
    answer:"private island"
},{
    question:"Who is my favourite character in MCU?",
    answer:"Tony Stark"   
}]

console.log("How much do you know me");
for (var i = 0;i<data.length;i++){
    CLIquiz(data[i].question,data[i].answer)
}
console.log("your score:",points);