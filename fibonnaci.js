#!/usr/bin/node

function fibsRec(n) {
    if(n === 1) return [0];
    if(n === 2) return [0, 1];
    let arr = [];
    return fibsRec(n - 1).concat(fibsRec(n - 1)[fibsRec(n - 1).length -1] + fibsRec(n - 2)[fibsRec(n - 2).length -1])
}

const va = fibsRec(20);
console.log(va);
