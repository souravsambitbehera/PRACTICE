//string
//concatenation
// document.write("sourav" + " how are you !")
// var a =prompt("Your name: ")
// alert('hello ' + a)
// let a = prompt("enter a long sting")
// var tweet = a.length
// alert("you have written " + tweet + ", and remaining charecter left is " + (140-tweet))
// you have do your calc in paranthesis
// var str ="sourav"
// console.log(str[2])
// let str = prompt("Enter a long paragraph ")
// var sl = str.slice(0,140)
// alert("Your max tweet is " + (sl.toUpperCase()))
//problem 1
/*
var nam = prompt("Enter your name: ")
var up = (nam.slice(1,nam.length)).toLowerCase()
var fr = (nam.slice(0,1)).toUpperCase()
alert("hello " +fr+up)
*/
// var dogAge = prompt("Enter your dog age ")
// var dogAgeInt = parseFloat(dogAge)
// var humanAge = (dogAgeInt-2)*4+21
// alert(humanAge)

/*
var a=function add(a,b) {
    
    document.write(a+b)
}*/
/*
function getMilk(bottles) {
  var cost = bottles * 1.5;
  // document.write(cost)
  // console.log(cost)
  document.write(cost);
  document.write('<br>')

  var money = 200;

  var bottleGet = money / cost;

  document.write("User will get ", Math.round(bottleGet));
}
getMilk(5);
// console.log(cost)
*/
function lifeInWeeks(age) {
    var days = (90-age)*365
    var weeks = (90-age)*52
    var months = (90-age)*365
    console.log('You have '+ days + " days " + weeks + " weeks" + ", and " + months + " months left")
    
}
lifeInWeeks(40)