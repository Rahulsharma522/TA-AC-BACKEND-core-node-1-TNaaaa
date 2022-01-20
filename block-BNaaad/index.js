function square(a) {
  console.log('Welcome to node.js');
  return a ** a;
}

console.log(square(3));

var sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);