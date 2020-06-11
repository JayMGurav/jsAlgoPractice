function User() {
  var username, password;

  function loginUser(user,pwd) {
    username = user;
    password = pwd;
    console.log("Logged in!!");
  }

  function getUser() {
    console.log(`Username : @${username}`);
  }

  var publicApi = {
    Login: loginUser,
    Profile: getUser
  }

  return publicApi;
}


var jay = User();

jay.Login("Jay", "Jay2799");
jay.Profile();



