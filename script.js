//Just declaring a var, not yet assigning a particular value. i.e. "let user_input be nothing".
/*
var user_Input;
user_Input = prompt("Input an even number. An even number is 2k, where k is any positive integer or 0.");
if ( parseInt(user_Input, 10)%2 == 0 ) {
    user_Input = parseInt(user_Input, 10);
    alert("Awesome, " + user_Input + " is an even number!");
} else {
    alert("Eh, " + user_Input + " is not an even number.");    
};
*/




//2. Prompt the user once for an even number and save their answer to the variable user_input. Be sure to convert it to an integer.

//3. Using a do...while loop, keep asking the user for an even number until they enter an even number. At this point, there should be only one prompt() call in your code.

//WORKS! FINALLY!
/*
var user_input;
user_input = prompt("enter an even number. And even number is 2k, where k is any positive integer or zero.");
user_input = parseInt(user_input, 10);
console.log(user_input);
*/

var user_input;
do {
    user_input = prompt("Enter an even number. And even number is 2k, where k is any positive integer or zero.");
    user_input = praseInt(user_input, 10);
} while ( user_input % 2 != 0 );

let anSwer; 
do{
    anSwer = prompt("Enter 10. Or pop-up will keep asking.");
    anSwer = parseInt(anSwer, 10); 
} while(anSwer != 10);



/*
do{
    unser_input = prompt("Input an even number. An even number is 2k, where k is any positive integer or 0.");
    unser_input = parseInt(unser_input, 10); 
} while(parseInt(user_input, 10)%2 != 0);
*/



//4. Prompt the user once for an odd number and save their answer to the variable user_input. Be sure to convert it to an integer.

//5. Using a while loop, keep asking the user for an odd number until they enter an odd number. At this point, there should be only two prompt() call in your code; one for the even, and one for the odd.

//6. Using a for loop, prompt the user 10 times to enter a fruit. Push each answer to a fruit array.

//7. Prompt the user to enter a fruit to find in the array. Using a for loop and break, find the index of the fruit they are searching for. If it's in the array, output to the console the index of where that fruit is. Otherwise output to the console that it is not in the array.

//8. Be sure to test your code before turning it in.

console.log("메롱", user_Input);