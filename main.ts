#! /usr/bin/env node
import inquirer from "inquirer" ;
import chalk from "chalk" ;


let todo:string[]=[];
let condition=true

console.log(chalk.bold.bgCyan("\t TODO LIST"));
while(condition){

let todoquestion=await inquirer.prompt([{
    name:"firstquestion",
    type:"list",
    message:"what do you want to do",
    choices:["add","delete"]
}]);
if( todoquestion.firstquestion==="add"){
    let adding=await inquirer.prompt({
        name:"addlist",
        type:"input",
        message:"what do you want to add"
    });
    todo.push(adding.addlist);
    console.log(todo);
    
    let ques=await inquirer.prompt({
        name:"question",
        type:"confirm",
        message:"would you like to add more?",
        default:"true"
    })
    condition=ques.question;

}
else if (todoquestion.firstquestion==="delete"){
    todo.pop();
    console.log(todo);
}
else{
    console.log("try again");
    
}
}