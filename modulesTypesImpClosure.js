// //Modules

// //reveling module 
// var SomeModule = function SomeModuleIs(messageToSend) {
//   var message = messageToSend;
//   var data = [1, 2, 3, 4];

//   function send(){
//     console.log(message, data);
//   }

//   function JoinNSend() {
//     console.log(message + data.join(","));
//   }

//   var publicApi = { 
//     broadcastMessage: send,
//     encryptNSend: JoinNSend
//   }
  

//   // As this revels the api that is to be made public
//   return publicApi;
// }

// //can be called multiple times as required
// var foo = SomeModule("Hey Man");
// foo.broadcastMessage();
// foo.encryptNSend();

// var bar = SomeModule("Cool Nice");
// bar.broadcastMessage();
// bar.encryptNSend();
// // ------------------------------------------------------------------------



// // Singleton module pattern
// var SingletonSomeModule = (function SomeModuleIs(messageToSend) {
//   var message = messageToSend;
//   var data = [1, 2, 3, 4];

//   function send() {
//     console.log(message, data);
//   }

//   function JoinNSend() {
//     console.log(message + data.join(","));
//   }

//   // As this revels the api that is to be made public
//   return {
//     broadcastMessage: send,
//     encryptNSend: JoinNSend,
//   };
// })("hello");
// //as can be called once
// SingletonSomeModule.broadcastMessage();
// SingletonSomeModule.encryptNSend();




// ---------------------------------------------------------------

// MODERN MODULES

var MyModules = (function Manager() {
  var modules = {};

  function define(nameOfModule, dependencies, implementation) {
    let depLength = dependencies.length;
    for (var i = 0; i < depLength; i++) {
      dependencies[i] = modules[dependencies[i]];
    }
    modules[nameOfModule] = implementation.apply(implementation, dependencies);
    // invoking the defination wrapper function for a module(passing in any dependencies)
    // and storing the return value in modules as the properity with name of the module
  }

  function get(name) {
    return modules[name];
  }

  return {
    define,
    get,
  };
})();

// Usage

MyModules.define("foo", [], function () {
  function hello(name) {
    return `Hey ${name}`;
  }
  
  return {
    hello
  }
});


MyModules.define("bar", ["foo"], function (foo) {
  var user = "Jay";

  function ha() {
    console.log(foo.hello(user));
  }

  return {
    ha
  }
});

var foo = MyModules.get("foo");
var bar = MyModules.get("bar");

bar.ha();



