// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// the word "let" is the command say we are doing something with a variable
// the word "name" is the comand to asign the actual name of the variable we are creating
// the "=" is the comand that states we are assigning a value to the varaible we are creating
// 'Dane' is the value we are asigning to the varaible we are creating. it is a STRING beacuse of the quotes
//  ";" closes out the variable creating line
// "if" starts the conditional, saying IF the next thing is true...
// "===" means EXACTLY equal. So the conditional in the parenthesis is: if the varialbe called "name" is exactly equal too 'Mary
// curly bracket starts the "Then do this" kind of command
//"console.log" writes to the console
// '( Hi, mary!)' is what is write to the console, IF the condition is true. So if the the variable called "name" is exactly equal to the value of 'Mary' then the console will log/write "Hi Mary!"
//else comand says if the previous condition is not met or true, then do this next thing. Which is to again console.lot "how do you do?" instead of "Hi mary!"
//curly bracket ends the whole thing
// this whole could shoulf console.log 'Hi, Mary!'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//  "let secret"  means we are creating a variable and naming it "secret". We are not asigning it a value apparently though.
// "let code" means we are creating a variable and naming it "code", and "= 123" means we are asigning it the value of 123. withch is a number vlaue.
//if(code === 123) means if the value of the variable called "code" is EXACTLY EQUAL to the value(number) 123, then do the next thing.
//the next thing is to asign the value 'super' to the varialble called "secret". 
//code = code * 2; means to then also take the value of the varaible "code" and asign it a new value, which is it's self(code) times 2. Which would be 246. (123 times 2 is 246)

//if (code > 250) means IF the value of "code" is LESS THAN 250, then do the next thing.
//secret = 'duper' means change/asign the value 'duper' to the varaible named 'secret'
//console.log(secret) just writes the new value of the varaible called secret
//should console log the value of 'secret' as: 'super'. This is because it was originaly 123, and then multiplied by 2 equalling 246. And since 246 is still NOT "greater than" 250. 
//Aka less than, but technically it says its not greater than. So that's why i said it that way.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper' 
}

console.log(secret)
console.log( code );






// 3. WRITE YOUR DESCRIPTION HERE
// let isStudent = true; means we are creating a varaiable using "let", naming it "isStudent" and asigning it the value of true.
// let age = 34; means we are creating a varaiable using "let", naming it "age" and asigning it the value of 34.
// let zip = 55407; means we are creating a varaiable using "let", naming it "zip" and asigning it the value of 55407.
// if (isStudent === true && zip > 80000 )  -  means we are saying IF the condition: isStudnet is EXACTLY EQUAL(===) tp the value of true, AND(&&) the value of variable "zip" is GREATER THAN 8000. Curly bracket closes condition.
// then do this: right to console (via console.log): `You're a student on the West Coast!`);
// else if (isStudent === false || age < 30) { - means if the previous condition is not ture, then check this condtion: which is if the variable 'isStudent' is EXACTLY EQUAL to false,  OR(||) if the variable 'age' is LESS THAN 30
//then console.log out 'What are your hobbies?'.
//else if (else if (isStudent === true) { - means if the previous condition is not ture, then check this new condition. New condition is check if 'isStudent' is EXACTLY EQUAL to true.
//} else { says if the previous condition is not true then do the next thing.
//the next thing is to jjst console.log "How about the weather?"
//it the first COMPUND CONDITION (two or more conditions) is false, and the second commpound condition is alos false.
/// the third conditional IS true, and the last conditional is false.
//so the conly conditional that is true and that will console.log anything is the thrid one, "else if (isStudent === true)", because isStudent does exactly equal true, and that is all it asks for. 
//so the at the end it should console.log: "Welcome to Prime!"


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/


let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {   //so if I understand this right, you can have as many "else if" conditionals in a thing as you want. 
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {                                    // but you can only have one(ending) "else" conditional. Does that sounds right?
  console.log('How about the weather?')
}

console.log( isStudent );
console.log( age );
console.log( zip );




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//  FIX - sets variable to "red" 
// should set variable to "blue" let colorOne = 'blue';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

