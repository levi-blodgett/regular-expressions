
let re;

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be one of the characters inside the bracket
re = /[GF]r[ae]y/; // Brackets can also be case sensitive
re = /[^GF]ray/; // Must be anything except for the characters inside of the bracket
re = /^[GF]ray/; // Must begin with the characters inside of the bracket
re = /[A-Z]ray/; // Match any upper-case letters
re = /[a-z]ray/; // Match any lower-case letters
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /hel{2}o/i; // Looks at the character before the braces, must occur exactly that {n} amount of times
re = /hel{2,4}o/i; // Must be between and including a and b {a, b}
re = /hel{2,}o/i; // Must occur at least {n} times

// Parenthesis () - Grouping
re = /([0-9]x){3}/i; // Basically multiplication with quantifiers and character sets


// String to match
const str = '3x3x3x';

// Log Results
const result = re.exec(str);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);