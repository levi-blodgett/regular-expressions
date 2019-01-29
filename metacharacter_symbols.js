
let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols, there are different types of metacharacters, these are just symbols
re = /^h/i; // Must start with (carrot symbol is what the symbol is called)
re = /World$/i; // Must end with (all these can be letters or more, like words, like cmd)
re = /^hello$/i // Must begin and end with
re = /h.llo/i // Matches any ONE character
re = /h*llo/i // Matches any character 0 or more times (including nothing at all)
re = /gre?a?y/i; // Optional character
re = /grey\?/i; // Escape character


// String to match
const str = 'grey?';

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