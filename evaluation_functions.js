let re;
// Below is a literal regular expression, an h/e/l/l/o
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search, searches for all instances of hello
console.log(re);
console.log(re.source);

// Functions used to evaluate expressions

// exec() - Return results in an array if there is a match or null if there isn't
let result = re.exec('asdfhellosadfas world'); // Has to have the exact kind of characters here
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - Returns true or false if there is a match
result = re.test('hello');
result = re.test('Hello'); // Uppercase vs lowercase DOES matter... unless you use an i flag on the variable itself
console.log(result);

// match() - Return result array or null
let str = 'Levi Hello There';
result = str.match(re);
console.log(result);

// search() - Returns index of the first match, if not found then it returns -1
result = str.search(re);
console.log(result);

// replace() - return new string with some or all matches of a pattern
str = 'Hello There';
let newStr = str.replace(re, 'Hi');
console.log(newStr);