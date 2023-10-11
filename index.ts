#! /usr/bin/env node

import inquirer from "inquirer"  ;
import chalk from "chalk"  ;
import chalkAnimation from "chalk-animation" ; 


const sleep =()=>{
    return new Promise((res)=>{
    setTimeout(res,2000)
})}
async function welcome() {
  let rainbowTitle=  chalkAnimation.rainbow("Lets Start Calculation")
  await sleep();
  rainbowTitle.stop()
  console.log(`
    _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`)
}
welcome();

await sleep()
async function askQuestion() {

const answers=await  inquirer
.prompt([
    
    {
        type:"list",
        name:"operator",
        message:chalk.bgCyan("Which operation you want to do? \n"),
        choices:["Addition","Subtraction","Multiplication","Division"]
    },
    {
       type:"number" ,
       name:"num1",
       message:"Enter Number 1:"  },
       {
        type:"number" ,
        name:"num2",
        message:"Enter Number 2:"   } 
  ])
    //console.log(answers)
    if
    (answers.operator=="Multiplication"){
    console.log(chalk.blue(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`))
}
 else if
 (answers.operator=="Addition"){
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`))
    }
 else if
 (answers.operator=="Subtraction"){
            console.log(chalk.yellow(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`))
        }
  else if
  (answers.operator=="Division"){
                console.log(chalk.redBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`))
            }
  };
  
async function letscomeagain() {
    do{
        await askQuestion()
var again =     await   inquirer.prompt({
    type:"input" ,
    name:"restart",
message:"Do You Want to Continue? Press y or n:" 

    })
    }while(again.restart=="Y" ||again.restart=="YES"|| again.restart=="yes" || again.restart=="y") 
}
letscomeagain() 