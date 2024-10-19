let  numbers = [2,5,90,7,10]
numbers.sort(descending)
console.log(numbers)

function ascending (x,y){
    return x-y
}
function descending (x,y){
    return y-x
}
function tripled(a){
    return a *3
}
let tripled_numbers = numbers.map(tripled)
console.log(tripled_numbers)

let arr = ["Biology", "Chemistry", "Agric", "Economics", "Computer"]
//arr.reverse()
//console.log(arr)
function capitals(x){
    return x.toUpperCase()
}
arr.sort()
uppercasedarray = arr.map (capitals)
console.log (uppercasedarray)

let result = eval(400**0.5)
console.log(result)