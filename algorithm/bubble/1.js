let arr = [1, 4, 5, 6, 7, 8, 9, 3, 2]

function bubble(array) {
    let n = array.length - 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= n - i; j++) {
            if (array[j + 1] > array[j]) {
                let t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
            }
        }
    }
    return array;
}

console.log(bubble(arr));