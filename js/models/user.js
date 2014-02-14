Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var user = new Parse.User();
user.set("username", "Daniel");
user.set("password", "mysecret");
user.set("email", "dmic23@gmail.com");
  
// other fields can be set just like with Parse.Object
user.set("phone", "650-555-0000");
  
user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});