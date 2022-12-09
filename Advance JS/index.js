// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let text = "";

// list: {
//   text += cars[0] + "<br>"; 
//   text += cars[1] + "<br>"; 
//   break list;
//   text += cars[2] + "<br>"; 
//   text += cars[3] + "<br>"; 
// }

// document.getElementById("list").innerHTML = text;

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  
//   document.getElementById("demo").innerHTML = fruits.get("bananas");


function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }