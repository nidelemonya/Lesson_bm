function filter_list(l) {
    return l.filter((e) => {return (typeof e) !== 'string'})
    // Return a new array with the strings filtered out
}

console.log(filter_list([1,2,3,'s',3,'b']));
console.log(filter_list([1,2,'aasf','1','123',123]));