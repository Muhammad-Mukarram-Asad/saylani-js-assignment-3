// Question:01

/*
Write a program to check whether the given input number is
divisible by 3 or else show a message “Number is not divisible
by 3”.
*/

// CODE: 01

var input = +prompt(
  "Enter a number for checking that either it is divisible by 3 or not: "
);
if (input % 3 == 0) {
  alert("Definitely the entered number " + input + " is divisible by 3.");
} else {
  alert("Sorry, the entered number is not divisible by 3.");
}

// Question:02

/*
Write a program that checks whether the given input is an even
number or an odd number.
*/

// CODE: 02
var input = +prompt(
  "Enter a number for hecking that either it is Even or ODD: "
);
if (input % 2 == 0) {
  alert("Definitely the entered number " + input + " is Even.");
} else if (input % 2 == 1) {
  alert("The entered number " + input + " is ODD.");
} else {
  alert("The entered number is neither even nor odd.");
}
// Question:03

/*
Write an if/else statement with the following condition:
If the variable age is greater than 18, output "Old enough",
otherwise output "Too young".
*/

// CODE: 03

var age = +prompt(" Enter the age plz:");
if (age > 18) {
  alert("You are old enough.");
} else {
  alert(" You are too young.");
}

// Question:04

/*
Write a program that prompts the user for their name, and then
displays a special greeting to that person if their name is the
same as yours. If the name entered by the user is anything
other than your name, your code should not produce any
output.
*/

// CODE: 04
var user_name = prompt("Enter your good name plz: ");
var my_name = "Mukarram";
if (user_name == my_name) {
  alert("As Salam U Alaikum Mr. " + user_name);
} else {
  alert("");
}

// Question:05

/*
Write a program to check whether the given input number is
divisible by 3 or not by using Switch Case statements. Show a
message “Number is not divisible by 3” or “Number is divisible
by 3”.
*/

// CODE: 05
var input = +prompt(
  "Enter a number for checking that either it is divisible by 3 or not: "
);
switch (input % 3 == 0) {
  case 1:
    alert(" The number is divisible by 3.");
    break;
  default:
    alert(" Number is not divisible by 3.");
}

// Question:06

/*
Write a program that takes a character(number or string) in a
variable & checks whether the given input is a number,
uppercase letter or lower case letter. (Hint: ASCII codes:-
A=65, Z=90, a=97, z=122)
*/

// CODE: 06
var number = prompt("Enter a number or uppercase or lowercase character: ");
if (number >= 1 && number <= 64) {
  alert(" You entered a number that is " + number);
} else if (number >= 65 && number <= 90) {
  alert(" You enetered an UpperCase character code.");
} else if (number >= 97 && number <= 122) {
  alert(" You enetered an LowerCase character code.");
} else {
  alert("You entered a number that is " + number);
}

// Question:07

/*
Write a program to create a calculator for +, -, *, /, % using
switch case statements. (number1, number2 and operator will
be input)
*/

// CODE: 07

var num_1 = +prompt(" Enter the first number: ");
var num_2 = +prompt(" Enter the second number: ");
var operator = +prompt(" Enter the operator: ");
alert("Enter 1 for Addition. \n Enter 1 for Subtraction. \n Enter 3 for Multiplication. \n " +
" Enter 4 for Divition. \n Enter 5 for Modulus.")

switch (operator) {
  case 1:
    if (operator == "1") {
      alert("So you want to addition.");
      alert("The SUM of the above two numbers is = " + (num_1 + num_2));
    }
    break;

  case 2:
    if (operator == "2") {
      alert("So you want to subtraction.");
      alert("The difference of the above two numbers is = " + (num_1 - num_2));
    }
    break;
  case 3:
    if (operator == '4') {
      alert("So you want to division.");
      alert("The division of the above two numbers is = " + num_1 / num_2);
    }
    break;
  case 4:
    if (operator == '3') {
      alert("So you want to multiplication.");
      alert("The multiplication of the above two numbers is = " + (num_1 * num_2));
    }
    break;
   case 5:
    if (operator == '5') {
      alert("So you want to modulus.");
      alert(
        "The modulus of the above two numbers is = " + (num_1 % num_2)
      );
    }
    break;
    default: alert(" Something is wrong at somewhere.");

}

// Question:08

/*
Write a program that takes time as input from user in 24 hours
clock format like: 1900 = 7pm. Implement the following case
using if, else & else if statements
*/

// CODE: 08
var time = prompt(" Enter the time in 24-hours format plz: ");
if(time >= '00:00' && time < '12: 00')
{
    alert("Good Morning.");
}
else if(time >='12:00' && time < '17: 00')
{
    alert("Good Afternoon.");
}if(time >= '17:00' && time < '21: 00')
{
    alert("Good Evening.");
}if(time >= '21:00' && time <= '23:59')
{
    alert("Good Night.");
}



// Question:09

/*
Write a program that takes a calendar year in YYYY format in
a variable. Check & notify the user whether it is a leap year or
not.
*/

// CODE: 09

var year = prompt("Enter the year plz only in YYYY format: ");
if(year % 4 == 0 || year % 100 == 0)
{
    alert(" The entered year is Leap Year.");
}
else{
    alert(" The entered year is not a  Leap Year.");

}