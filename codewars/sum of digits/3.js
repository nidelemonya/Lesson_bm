// best solution
function digital_root(n) {
    return  (n - 1) % 9 + 1;
    // ...
}

console.log(digital_root(125))
console.log(digital_root(16))
console.log(digital_root(456))