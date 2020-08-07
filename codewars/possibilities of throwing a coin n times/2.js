function coin(n, acc = '') {
    if (n === 0) {
      return [acc];
    }
    return [
      ...coin(n - 1, acc + 'H'), 
      ...coin(n - 1, acc + 'T')
    ];
}
console.log(coin(0))
console.log(coin(1))
console.log(coin(2))
console.log(coin(3))