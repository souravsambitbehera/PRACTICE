// question1 
/*
let marks = {
    harry : 98,
    rohan : 70,
    akash : 7
}
for (var i=0 ; i > obj.length ; i++){
    alert(obj[i])
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
// */

//question 3
/*
let num = 5;
for (var i=0; i<=num; i++){
    if (num===i){
        alert("got it")
        break
    }else{
        alert("try again")
    }
}*/
//  question 4
// let arr = [2,2,1,4,1]
// let sum =0
// let len = arr.length
// // for(var i=0; i<=arr.length; i++){
// //     sum = sum+i
// // } 
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// // let mean = sum/len
// // alert(mean)


// // question 1
// let marks = {
//     harry : 98,
//     rohan : 70,
//     aakash : 7

// }
// for(let mark in marks){
//     document.write(marks[mark],"<br>")
// }

// // question 2
// //   question 4
// let arr = [2,2,1,4,1]
// let sum = 0
// let len = arr.length
// for(let i of arr ){ 
//     sum = sum +i
 
// }
// let mean = sum/arr.length
// document.write(mean)

// // question

// let actualNumber = 66
// let i 
// while(i != actualNumber){
//     i = prompt("Enter another number")
// }
// document.write("you guess correct") 


// stings method

// let str = "   How are you";
// // document.write(str.length,"<br>")
// // document.write(str.toLowerCase())
// // console.log(str.toUpperCase())  
// let rep = str.replace("How", "Who");
// // console.log(str.trim());
// console.log(str.split()) 

// Sting question set

// question 1
// console.log("sou\"".length)


// queston2 
// let str = "sourav, where are you"
// console.log(str.startsWith("sa"))
// console.log(str.endsWith("you"))
// console.log(str.includes('souraj'))

// question3

let str = "HELLO SOURAV"
console.log(str.toLowerCase())

// question 4

let statement = "Please give RS 1000"
console.log(statement.slice(15))
let rep =statement.slice(3,4)

console.log(statement.replace(rep,"s"))