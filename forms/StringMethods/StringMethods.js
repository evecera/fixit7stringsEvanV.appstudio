/* 
// Create a variable named quoteString && put this String in it ;
*/

let quoteString= ("Failure is simply the opportunity to begin again this time more intelligently.");
console.log(quoteString);


/*
//Using a String method, Change the text in quoteString To all upper case && save it
in a new variable named upperCaseString.
*/

let upperCaseString = quoteString.toUpperCase();
console.log(upperCaseString);

/*
//Create a new variable named authorString && put this text in it.
*/

var authorString= ("- Henry Ford");
console.log(authorString);

/*
//Then use a String method To put the authorString value On the End of the quoteString value, saving the new String in a variable named completeString.
*/

let completeString = quoteString.concat(authorString);
console.log(completeString);

/*
Now create a new string variable named secondQuote and put this string in it: 
Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King
*/

let secondQuote = ("Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King");

/*
Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString.
*/

let lowerCaseString = secondQuote.toLowerCase();
console.log(lowerCaseString);

/*
Find the character at the 3rd position of secondQuote.
*/

let character = secondquote.charAt(2);
console.log(character);

/*
Create a new variable named findString. Using a string method, remove this part of the secondQuote string and put it in findString variable:
*/

let findString = secondQuote.replace ("What separates the talented individual from the successful one is a lot of hard work.","")
console.log(findString)
