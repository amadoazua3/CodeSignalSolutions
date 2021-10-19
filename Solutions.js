// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//
//     Example
//
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.
//
// 7 and 3 produce the largest product.
//
//     Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] array.integer inputArray
//
// An array of integers containing at least two elements.
//
//     Guaranteed constraints:
//     2 ≤ inputArray.length ≤ 10,
//     -1000 ≤ inputArray[i] ≤ 1000.
//
//     [output] integer
//
// The largest product of adjacent elements.

// Solution:

function adjacentElementsProduct(inputArray) {


    let product;
    let largestProduct = -100;

    for(let i = 0; i < inputArray.length; i++){

        product = inputArray[i] * inputArray[i + 1];


        if(product > largestProduct){
            largestProduct = product;
        }
    }

    return largestProduct;

}

// Given the string, check if it is a palindrome.
//
// Example
//
// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] string inputString
//
// A non-empty string consisting of lowercase characters.
//
// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 105.
//
// [output] boolean
//
// true if inputString is a palindrome, false otherwise.

// Solution:

function checkPalindrome(inputString) {

    let palindrome = inputString.split('').reverse().join('');

    if(inputString == palindrome){
        return true;
    } else {
        return false;
    }

}


// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
//
//     Example
//
// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.
// Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] integer year
//
// A positive integer, designating the year.
//
//     Guaranteed constraints:
//     1 ≤ year ≤ 2005.
//
//     [output] integer
//
// The number of the century the year is in.

// Solution:

function centuryFromYear(year) {


    if(year >= 0 && year <= 100){
        return 1;
    }

    else if(year >= 101 && year <= 200){
        return 2;
    }
    else if(year >= 201 && year <= 300){
        return 3;
    }
    else if(year >= 301 && year <= 400){
        return 4;
    }
    else if(year >= 401 && year <= 500){
        return 5;
    }
    else if(year >= 501 && year <= 600){
        return 6;
    }
    else if(year >= 601 && year <= 700){
        return 7;
    }
    else if(year >= 701 && year <= 800){
        return 8;
    }
    else if(year >= 801 && year <= 900){
        return 9;
    }
    else if(year >= 901 && year <= 1000){
        return 10;
    }
    else  if(year >= 1001 && year <= 1100){
        return 11;
    }
    else  if(year >= 1101 && year <= 1200){
        return 12;
    }
    else  if(year >= 1201 && year <= 1300){
        return 13;
    }
    else if(year >= 1301 && year <= 1400){
        return 14;
    }
    else  if(year >= 1401 && year <= 1500){
        return 15;
    }
    else   if(year >= 1501 && year <= 1600){
        return 16;
    }

    else if(year >= 1601 && year <= 1700){
        return 17;
    }

    else if(year >= 1701 && year <= 1800){
        return 18;
    }
    else if(year >= 1901 && year <= 2000){
        return 20;
    }
    else if(year >= 2001 && year <= 2100){
        return 21;
    }

    else if(year >= 2101 && year <= 2200){
        return 22;
    }


}

// You are given a two-digit integer n. Return the sum of its digits.
//
// Example
//
// For n = 29, the output should be
// addTwoDigits(n) = 11.
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] integer n
//
// A positive two-digit integer.
//
// Guaranteed constraints:
// 10 ≤ n ≤ 99.
//
// [output] integer
//
// The sum of the first and second digits of the input number.


// Solution:

function addTwoDigits(n) {


    let num = n.toString();

    let numArr = num.split('');

    let sum;

    for(let i = 0; i < numArr.length; i++){

        if(i == 0){
            sum = parseInt(numArr[i]) + parseInt(numArr[i + 1]);
        }

    }

    return sum;

}

