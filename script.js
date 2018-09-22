//2. Prompt the user once for an even number and save their answer to the variable user_input. Be sure to convert it to an integer.
//3. Using a do...while loop, keep asking the user for an even number until they enter an even number. At this point, there should be only one prompt() call in your code.

//Just declaring a var, not yet assigning a particular value. i.e."let user_input be nothing".
var user_input;

do {
    user_input = prompt("Enter an even number. An even number is 2k, where k is any integer.");
    user_input = parseInt(user_input, 10);
} while ( user_input % 2 != 0 );
                          

//4. Prompt the user once for an odd number and save their answer to the variable user_input. Be sure to convert it to an integer.
//5. Using a while loop, keep asking the user for an odd number until they enter an odd number. At this point, there should be only two prompt() call in your code; one for the even, and one for the odd.

while (user_input % 2 == 0) {
    user_input = prompt("Enter an odd number. An odd number is 2k+1, where k is any integer.");
    user_input = parseInt(user_input, 10);
}


//6. Using a for loop, prompt the user 10 times to enter a fruit. Push each answer to a fruit array.

//7. Prompt the user to enter a fruit to find in the array. Using a for loop and break, find the index of the fruit they are searching for. If it's in the array, output to the console the index of where that fruit is. Otherwise output to the console that it is not in the array.

//8. Be sure to test your code before turning it in.

console.log("메롱", user_input);