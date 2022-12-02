// question 1
// let arr = new Array()
// for(let num=0; num<4;num++){
//     arr[num] = prompt("Enter a number")
//     arr[num]=parseInt(arr[num])
// }
// // console.log()
// console.log(arr)

// question 2

// let arr2 = new Array()
//while(num!=0)
// for(let num=0; num===0;num++){
//     arr2[num] = prompt("Enter a number")
//     arr2[num]=parseInt(arr2[num])
// }
// // console.log()
// console.log(arr2)


// question3 
// let num = [2,23,,34,40]

// for(let item in num){
//     if (item%10===0){
//         console.log(num[item])
//     }
// }

// question 4
// let num = [2,8,3,4]
// for(let item in num){
//     console.log(num[item]**2)
// }

// // question 5
// let num2 = [3,4,5, 6]
// -


// Guess number program

let number = Math.floor((Math.random())*100)
// console.log(number)
// let guess = prompt("Enter guees number")
let guess
let guessCount = 0
do {
  guess = prompt("Enter guees number")
    guess = parseInt(guess)
    if(guess<number){
        console.log("You Enter smaller value")
    }else if(guess>number){
        console.log("You enter greater value")
    }
guessCount +=1
} while (guess != number);
console.log("you guess number in ",guessCount + "")
document.write("ff")     