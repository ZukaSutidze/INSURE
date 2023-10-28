const brg = document.getElementById("logo");
const brg1 = document.querySelector('.Burgermenu'); 

brg.addEventListener('click', function() {
    brg1.classList.toggle('active'); 
});







console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

console.log("Task N:1")


let y = 1;
while (y != 11) {
    console.log(y * 3)
    y++
}

console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

console.log("Task N:2")

let g = 10;
while (g != 0) {
    console.log(g)
    g--
}

console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

console.log("Task N:3")

let x = 100
let sum = 0
while (x != 0) {
    sum += x
    x--
}
console.log(sum)


console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

console.log("Task N:4")

let i = 16
for (let str = 0; str < i; str++) {
    if (str % 5 === 0 && str % 3 === 0) {
        console.log(" FizzBuzz")
    } else if (str % 3 === 0) {
        console.log("Fizz")
    } else if (str % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(str)
    }
}


console.log("")
console.log("")
console.log("")
console.log("")
console.log("")


console.log("Task N:5")

let l = 1235    
let answer = 0

while( l != 0) {
    answer += l % 10
    l = Math.floor(l / 10)
}

console.log(answer)

