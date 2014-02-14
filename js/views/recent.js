Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var RecentView = Parse.View.extend({

	template: Handlebars.compile(

		'<header>' +
			'<div class="header-content">' +	
				'<a href="#/mykandids/user" class="user-img" id=""><img class="img-circle user-img" src={{userImg}} /></a>' +	
				'<h1>KANDID</h1>' +
			'</div>' +
			'<nav id="main-nav" class="btn-group nav-btns" data-toggle="buttons">' +
				'<button type="radio" id="featured" class="btn btn-lg"><a href="#/mykandids/featured">Featured</a></button>' +
				'<button type="radio" class="btn btn-lg"><a href="#/mykandids/recent">Recent</a></button>' +
				'<button type="radio" class="btn btn-lg"><a href="#/mykandids/nearMe">Near Me</a></button>' +
			'</nav>' +
		'</header>' +
		'<div class="event-container">' +
			'<a href="#" class="event-btn prev" id=""><img src="img/prev.png"/></a>' +
			'<h2 class="event-desc">4:20<span>21st Oct</span></h2>' +
			'<a href="#" class="event-btn next" id=""><img src="img/next.png"/></a>' +
		'</div>' +
		'<div class="display-help"></div>' +
		'{{#each models}}<div class="kandid-container">' +
			'<a href="#" class="user-img" id=""><img class="img-circle" src={{attributes.userProfImg}} /></a>' +
			'<div class="name-loc">' +
				'<h3>{{attributes.userFn}} {{attributes.userLn}}</h3>' +
				'<p>{{attributes.fsLoc}}</p>' +
			'</div>' +
			'<a href="#" class="like" id=""><img src="img/liked.png"/></a>' +
			'<div class="image-container">' +
				'<a href="#" class="kandid-img" id=""><img src={{attributes.imageUrl}} class="img"/></a>' +
			'</div>' +
			'<div class="comment-container">' +
				'<p>@{{attributes.userName}}: <span>{{attributes.comments}}</span></p>' +
			'</div>' +
		'</div>{{/each}}'
	),

	initialize: function () {

	},

	render: function () {
		this.curUserImg = { userImg : Parse.User.current().get("profImg") };

		this.$el.html(this.template( $.extend({}, this.curUserImg, this.collection )));
		return this;
	},

	// getUser: function(callback) {
	// 	this.user = Parse.User;
	// 	var query = new Parse.Query(Kandid); 
	// 	console.log(this.user);
	// 	query.include("user");
	// 	query.find({
	// 		success: function(userArray) {
	// 			console.log(userArray);
	// 			for(user in userArray){
	// 				console.log(userArray[user]);
	// 				var users = userArray[user];
	// 				console.log(users)
	// 				var userdotname = users.get('user');
	// 				console.log(userdotname);
	// 				var un = userdotname.get('userName');
	// 				console.log(un);
	// 				var markup = {username: un };
	// 				console.log(un);
	// 				console.log(markup);
	// 				return markup;
	// 				if(callback != null && callback != undefined){
	// 					console.log(this.markup);
	// 					callback(this.markup);
							
	// 				}
	// 			}
	// 		},
	// 	    error: function(error){
	// 	        console.log(error.message);
	// 	    }
	// 	});
	// }, 

});