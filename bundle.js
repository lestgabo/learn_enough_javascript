(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("beeftosino-palindrome");

let string = prompt("Please enter a string for palindrome:");

let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
}else{
  alert(`"${phrase.content}" is not a palindrome.`);
}
},{"beeftosino-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// 7.3 exercise - 
/*Add a blank method to the String object prototype that returns true if the 
string is empty or consists solely of whitespace (spaces, tabs, or newlines). 
Hint: Use a regular expression (Section 4.3.2). 
You will need the regex syntax for the start and end of a string (Figure 64). */
String.prototype.blank = function blank() {
  return /^\s*$/g.test(this);
}

// 7.3 exercise
/*Using whichever method you prefer (direct indexing or slicing), add a last 
method to the Array object prototype that returns the last element of an array. 
Hint: Refer to Section 3.3. */
Array.prototype.lastElement = function lastElement() {
  return this[this.length-1];
}


// Adds 'reverse' to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
} 


// exercise, returns an array of the username and domain for standard email address
function emailParts(email) {
  let lowerCasedEmail = email.toLowerCase();
  return lowerCasedEmail.split("@");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
    
  // 7.2 exercise - refactor the toLowerCase
  this.processor = function(string) {
    return string.toLowerCase();
  }
  
  // Returns content processed for palindrome testing.
  this.processedContent = function() {
    return this.processor(this.letters());
  }
  
  
  // Returns the letters in the content.
  this.letters = function letters() {
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
    // let theLetters = [];
    // const letterRegex = /[a-z]/gi;
    // Array.from(this.content).forEach(function(character) {
    //   if (character.match(letterRegex)) {
    //     theLetters.push(character);
    //   }
    // });
    // return theLetters.join("");
  }
  
  // returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // 7.1 exercise 
  /* By filling in the code in Listing 65, add a louder method 
  to the Phrase object that returns a LOUDER (all-caps) version of the content. 
  Confirm in the REPL that the result appears as in Listing 66. */
  this.louder = function() {
    return this.content.toUpperCase();
  }
}

// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
  
//   // Returns translation processed for palindrome testing.
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }
// }

// TranslatedPhrase.prototype = new Phrase();

//
},{}]},{},[1]);
