function merge(arr) {
    console.log("here start the recursion");
    
    const isSort = (arr) => arr.every((el, i, array) =>  el <= array[i + 1 >= array.length ? i : i + 1]) && arr.slice(arr.length / 2).every((el, i, array) =>  el <= array[i + 1 >= array.length ? i : i + 1])
    
    if(isSort(arr.slice(0, arr.length / 2)) && isSort(arr.slice(arr.length / 2))) {
        const left = arr.slice(0, arr.length / 2);
        const right = arr.slice(arr.length / 2);
        let newArr = [];
        console.log(arr);
        console.log(left);
        console.log(right);
        for (let i = 0; i <= arr.length; i++) {
            if(left.length === 0) {
                newArr = newArr.concat(right)
                console.log({right})
                console.log("l =0", newArr)
                break
            } else if (right.length === 0) {
                newArr = newArr.concat(left)
                console.log("r =0", newArr)
                break
            }
            if(left[0] < right[0]) {
                newArr.push(left[0]);
                left.shift()
                console.log("l <r", newArr)
            } else {
                newArr.push(right[0])
                right.shift()
                console.log("l > g", newArr)
            }
            
        }
        console.log(newArr)
        return newArr
    }

    while (!isSort(arr)) {
        
        arr = merge(arr.slice(0, arr.length / 2)).concat(merge(arr.slice(arr.length / 2)));
        arr = merge(arr)
    }
    console.log("after while",arr)
    return arr
}


const generateArray = () => {
    const array = []
    for (let i = 0; i < 111; i++) {
        array.push(Math.floor(Math.random() * 10000))
    }
    return array
}
const arrayOf100 = generateArray()

console.log(merge(arrayOf100));
console.log(arrayOf100);


