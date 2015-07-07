/**
Prompt for a number value (provide a default of 10)
Prompt for another number value (provide a default of 10)
Convert the promped values into integers.
Make sure that the input from steps 1 and 2 are numbers.
If they are numbers, add the numbers together and log the value to the console.
If either of the prompted values are not numbers, alert someting to the user that they must input nubmers only.
*/

var num1 = prompt("please input a number.", 10),
	int1 = parseInt(num1),
    num2 = prompt("please input another number", 10),
	int2 = parseInt(num2);

if(isNaN(int1) || isNaN(int2) ){
	alert('I need numbers not strings!')
} else {
	alert(int1 + int2);
	console.log('thanks for paying attention')
	
}
