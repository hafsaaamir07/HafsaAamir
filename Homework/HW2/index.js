

//1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers (a , b){
  if ( a > b){
    return a;
  }
  else if (b > a){
    return b;
  }
  return a+" and "+b+" are equal";
};
maxOfTwoNumbers(7,8);

//2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
function maxOfThree ( a, b , c) {
  // ADD YOUR CODE HERE
  if ( a > b && a > c){
    return a;
  }
  else if (b > a && b > c){
    return b;
  }
  else{
    return c;
  }
};
maxOfThree( 12, 16 ,10);

//3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isCharacterAVowel (str) {
  // ADD YOUR CODE HERE
  let string ="aeiou";
  if (string.includes(str)){
    return true;
  }
  else{
    return false;
  }
};
isCharacterAVowel("e");
isCharacterAVowel("x");

//4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
function sumArray (arr) {
  // ADD YOUR CODE HERE
  let num = 0;
  for ( let i=0; i < arr.length; i++){
    num += arr[i];
  }
  return num;
};
sumArray([2,4,6,8,10])

function multiplyArray(arr){
  // ADD YOUR CODE HERE
  let num = 1;
  for (let i = 0; i < arr.length; i++){
    num *= arr[i];
  }
  return num;
};
multiplyArray([2,4,6,8,10])

//5.Write a function that returns the number of arguments passed to the function when called.
function args (...value){
  return value.length;
 }
args("hello","hi", 7, "yo");

//6. Define a function  reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
function reverseString (str) {
  // ADD YOUR CODE HERE
  let string ="";
  for (let i = str.length-1; i >= 0; i--){
    string += str[i];
  }
  return string;
};
reverseString("jag testar");


//7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
function findLongestWord (arr) {
  // ADD YOUR CODE HERE
  let len= 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > len){
      len = arr[i].length;
    }
  }
  return "the longest word length is: "+len;
};
findLongestWord(["hello","cat","great","superfly","awesome"])


//8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
function filterLongWords (arr, a) {
  // ADD YOUR CODE HERE
  let array = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > a){
      array.push(arr[i]);
    }
  }
  return array;
}
filterLongWords(["hello","bye","wow","great"],3);

//*****************************BONUS**********************************
//1. Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
String.prototype.reverseString = function (str){
    let string ="";
    for (let i = str.length-1; i >= 0; i--){
      string += str[i];
    }
    return string;
}
"Per Scholas".reverseString("Per Scholas");

//*******not sure if you wanted us to rewrite the code insisde but another way could be this
String.prototype.reverseString = function (str){
  return reverseString(str);
}
"Per Scholas".reverseString("Per Scholas");

//2. Write a function that takes a string as argument and returns an object where:
          //the keys are the characters that occur in the string
          //the values are the number of occurrences for each letter, regardless of the case
function occur (str){
  str = str.toLowerCase();
  let obj ={};
  for (let i = 0; i < str.length; i++){
    if (str[i] in obj){
      obj[str[i]] += 1;
    }
    else{
      obj[str[i]] = 1;
    }
  }
  return obj;
}
console.log(occur("PerScholas"));