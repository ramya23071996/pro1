function isPalindrome(str) {
    // Remove spaces and special characters
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the string is the same forward and backward
    return cleanedStr === cleanedStr.split('').reverse().join('') ? "Palindrome" : "Not a Palindrome";
}

// Example usage
let userInput = prompt("Enter a word or sentence:");
let result=(isPalindrome(userInput));
console.log(result);



