//loop already gets executed by the time the timer function is called
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000)
}


//we need a way to remember the values even after execution of the loop 
//so we create a new lexical scope and a variable to close(remember) upon
for (var i = 1; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  }())
}


//OR rather a easy way would be to use let
//which creates a new scope and initialises every iteration
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

