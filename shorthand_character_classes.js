
let re;

// Shorthand Character Classes
re = /\w/; // Word character - Alphanumeric character, can be any letter, number, or an _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character - opposite of word character, any non-alphanumeric character
re = /\d/; // Digit - Match any digit (singular)
re = /\d+/; // Digit - Match any digits 0 or more (plural), just like difference between w+ and +
re = /\s/; // Match whitespace character
re = /\S/; // Match non-whitespace character
re = /Hell\b/i; // Word boundary, make it so only that word will be flagged, not just the characters being found before it as well, like 'Hell'o

// Assertions
re = /x(?=y)/; // Match x only if followed by y, so if it is 'x' then 'y' right after it, like 'xy'
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
const str = 'x y';

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