function merge(arr) {
    console.log("here start the recursion");
    
    const isSort = (arr) => arr.every((el, i, array) =>  el <= array[i + 1 >= array.length ? i : i + 1]) && arr.slice(arr.length / 2).every((el, i, array) =>  el <= array[i + 1 >= array.length ? i : i + 1])
    /*if(arr.length === 2 && !arr.every((el, i ,array) => el <= array[i + 1 >= array.length ? i : i + 1])) {
        if (arr[0] < arr[1]) return arr;
        else return arr.reverse();
    }*/
    console.log("2nd if",arr.slice(0, arr.length / 2).every((el, i, array) =>  el <= array[i + 1 >= array.length ? i : i + 1]) && arr.slice(arr.length / 2).every((el, i, array) =>  el <= array[i + 1 >= array.length ? i : i + 1]));
    //if(isSort(arr)) return
    if(arr.slice(0, arr.length / 2).every((el, i, array) =>  el <= array[i + 1 >= array.length ? i : i + 1]) && arr.slice(arr.length / 2).every((el, i, array) =>  el <= array[i + 1 >= array.length ? i : i + 1])) {
        const left = arr.slice(0, arr.length / 2);
        const right = arr.slice(arr.length / 2);
        let newArr = [];
        console.log(arr)
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
            if(left[i] < right[i]) {
                newArr.push(left[i]);
                left.shift()
                console.log("l <r", newArr)
            } else {
                newArr.push(right[i])
                right.shift()
                console.log("l > g", newArr)
            }
            
        }
        console.log(newArr)
        return newArr
    }
    //console.log(merge(arr.slice(0, arr.length / 2)))
    //while (!arr.every((el, i ,array) => el <= array[i + 1 >= array.length ? i : i + 1])) {
    console.log("in while", arr);
    //console.log("in while", !arr.every((el, i ,array) => el <= array[i + 1 >= array.length ? i : i + 1]));
        
        arr = merge(arr.slice(0, arr.length / 2)).concat(merge(arr.slice(arr.length / 2)))
    //}
    console.log("after while",arr)
    return arr
}

console.log(merge([3, 2, 1, 13, 8, 5, 0, 1]));
console.log([
  2, 3, 1, 13,
  5, 8, 0,  1
].every((el, i, array) =>  {
    //console.log(el <= array[i + 1 >= array.length ? i : i + 1]);
    //console.log(i);
    
    return el <= array[i + 1 >= array.length ? i : i + 1]
}));

