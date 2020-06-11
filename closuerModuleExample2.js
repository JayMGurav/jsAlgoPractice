var users = {}

var User = function () {
  var username, password,fullname,age;
  

  function createUser(user, pass,fullName, age) {
    username = user;
    password = pass;
    fullname = fullName;
    age = age;
    users[username] = {
      username,
      password,
      fullname,
      age,
    };
  }

  function Login(user,pass) {
    user == username ? pass == password ? console.log("Logged in as",username,getMe()) : console.log("Wrong password!!") : console.log("Wrong Username !!");
  }

  function getMe() {
    return users[username];
  }

  return {
    signUp: createUser,
    login:Login
  };
}


var jay = User();
jay.signUp("Jay", "Jay2799","Mrithyunjay Gurav", 20);
jay.login("Jay", "Jay2799")