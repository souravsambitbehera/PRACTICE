// // // // // Function with the return value
// // // // function getMilk (money){
// // // //     return money*1.5
// // // // }
// // // // alert(getMilk(20)) 

// // // function getMilk(money){
// // //     document.write('The bottles you will get '+ getBottles(money,1.5) + ' and change remain is ' + changeReamin(money,1.5))
// // // }
// // // function getBottles(startingAmount, costPerBottle){
// // //     var getBottles = Math.floor(startingAmount/costPerBottle)
// // //     return getBottles
// // // }
// // // function changeReamin(startingAmount,costPerBottle){
// // //     var changeReamin = startingAmount%costPerBottle
// // //     return changeReamin
// // // }
// // // getMilk(20)
// // function bmiCalculator(weight,height){
// //     var bmi= Math.floor (weight/(height*height));
// //     return bmi
// // }



// // // /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

// // alert(bmiCalculator(65, 1.8))


// // //RANDOM NUMBER (Math.random)
// // // it generate 16 decimal n 0-0.999999999999999

// function loveCalculator(name1,name2){
   
//     var lovePercentage = Math.random()
//         lovePercentage = Math.floor(lovePercentage*100)
//     return lovePercentage
// }
// var name1 = prompt("Enter your name")
// var name2 = prompt("enter your name")
// document.write(loveCalculator(name1,name2))



//bmi calculator with 

// function bmiCalculator (weight, height) {
//     var bmi = Math.floor(weight/(height*height));
//     return bmi
//     if (bmi<18.5){
//         return  ("Your BMI is" + bmi + ", so you are underweight.")
//     }else if(bmi>18.5 && bmi<24.9){
//         return  ("Your BMI is" + bmi + ", so you have a normal weight.")
//     }else{
//         return  ("Your BMI is" + bmi + ", so you have a overweight.")
        
//     }
    
// }
// alert(bmiCalculator(70,1.55448))


// LEAP YEAR OR NOT
/*
function isLeap(year) {
    if ((year%4===0)) {
        return ("Leap year.")
    }else if(year%4===0 && year%100===0){
        return ("Not leap year.")
        
    }else if(year%4===0 && year%100===0 && year%400===0){
        return("Leap year.")
    }
    
    else {
        return("Not leap year.")
    }
}  
alert(isLeap(2000))*/
/*
var guestLists =['sourav','sambit','babu']
var guestCheck= prompt("Enter your name")
if (guestLists.includes (guestCheck)){
    alert("welcome")
}else{
    alert("you are not welcome")
}*/
/*
function whosPaying(names) {

        var namesLength = names.length;
        var randomNo = Math.floor(Math.random()*namesLength);
        var namesChoose =names[randomNo];
        return(namesChoose + " is going to buy lunch today!");

    }*/

/*
i = 1
while (i<=50) {
    if (i%5===0 && i%3===0){
        document.write("FizzBuzz <br>")
    }else if(i%3===0){
        document.write("Fizz<br>")
    }else if(i%5===0){
        document.write("Buzz<br>")
    }else{
        document.write(i,"<br>")
    }
    i=i+1
}
*/

/*
i=100
function beer() {
    while (i>1) {
        document.write(i," bottles of beer on the wall,",i," bottles of beer. Take 1 down, pass it around ",i-1," bottles of beer on the wall.<br>")
        i--
    }
}
beer()

*/

//for loop

function fibonacciGenerator(n) {

    var output =[]
    if (n===1){
        output = [0]
    }else if (n===2){
        output = [0,1]
    }else{
        output = [0,1]
        for( var i =2; i<n; i++){
            output.push(output[output.length-2]+output[output.length-1])

        }
    }
    return output;
}
document.write(fibonacciGenerator(4))