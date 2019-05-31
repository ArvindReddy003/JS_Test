const sub = s => /\(([^()]*)\)/i.exec(s)[1];

// Process one block.
const block = s => s.replace(/\(([^()]*)\)/i, [...sub(s)].reverse().join(''));

// Reverse parentheses.
const reverse = s => s.includes('(') ? reverse(block(s)) : s;

// Demo.
const test1 = "foo(bar)";
const test2 = "(bar)";

console.log(reverse(test1));
console.log(reverse(test2));

