Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var Kandid = Parse.Object.extend("Kandid");


// var user = Parse.User.current();
// console.log(user);
// var userFn = Parse.User.current().get("firstName");
// console.log(userFn);
// var userLn = user.get("lastName");
// console.log(userLn);



// getUser: function(callback) {
// var user = Parse.User;
// var query = new Parse.Query(Kandid); 

// query.include("user");
// query.find({
// 	success: function(userArray) {
// 		console.log(userArray);
// 		for(user in userArray){
// 			console.log(userArray[user]);
// 			var users = userArray[user];
// 			console.log(users)
// 			var userdotname = users.get('user');
// 			console.log(userdotname);
// 			var un = userdotname.get('userName');
// 			console.log(un);
// 			var markup = {username: 'un'};
// 			console.log(un);
// 			console.log(markup);
// 			if(callback != null && callback != undefined){
// 				callback(markup);
// 			}
// 		}
// 	},
//     error: function(error){
//         console.log(error.message);
//     }
// });
// }, 
