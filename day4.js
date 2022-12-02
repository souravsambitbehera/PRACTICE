// var changeLi = document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild
// changeLi.innerHTML = "sourav"

// javscript practice
// var str = "123"
// console.log(typeof(str))
/*
let str ="sourav"
let num = 5
console.log(str+num)
// const str = "123"
console.log(typeof(str+num))*/
// ques 1
/*
let str = " sourav"
let num = 6
document.write(str+num,"<br>");

// que 2
document.write(typeof(str+num,"<br>"));
document.write("<br>")

// ques 3

const stu = {
    sourav :  "123",
    sambit : '233',
    babu : '3233'

}
document.write(stu.sourav)
// const stu =4 (you can't re assign const value)
stu["name"] = "any"
document.write(stu[2])
*/

//question 1

/*
let age = prompt("Enter your age: ")
age = parseInt(age)
if (age>=10 && age<=20){
    alert("the lies between 10-20")
}else{
    alert("person does not match")
}
*/

//question2
/*
let num = prompt("enter a number ")
num = parseInt(num)
if(num%2==0 && num%3==0){
    alert("it si divisible")
}else{
    alert("it is not divisible")
} 

*/

//question3

/*
let num = prompt("enter a number ")
num = parseInt(num)
if(num%2==0 || num%3==0){
    alert("it si divisible")
}else{
    alert("it is not divisible")
} 
*/

//question 4
age = 2
let drive = (age>=18)? "drive" : "not drive"
alert(drive)