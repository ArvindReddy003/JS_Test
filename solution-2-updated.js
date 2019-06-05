String.prototype.replaceBetween = function(start, end, what) {
  return this.substring(0, start) + what + this.substring(end);
};

console.log("foo(bar)".replaceBetween(3, 8, "rab"));
console.log("foo(foo(bar))blim".replaceBetween(3, 13, "baroof"));