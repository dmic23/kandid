Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var UserView = Parse.View.extend({

	template: Handlebars.compile(	

		'<div class="container-top user-top">' +
			'<a class="settings" href="#">Settings</a>' +
			'<h3 class="user-userName">@{{curUserName}}</h3>' +
			'<a class="home" href="#/mykandids/recent">Home</a>' +
		'</div>' +
		'<section class="user-info">' +
			'<div class="user-info-layer">' +
	        	'<img class="img-circle user-img" src={{curUserImg}} />' +
	        	'<h2 class="user-FnLn">{{curUserFn}} {{curUserLn}}</h2>' +
        	'</div>' +
        '</section>' +
        '<div class="user-bottom">' +
        	'{{#each models}}<div class="user-kandid-container kandid-container">' +
				// '<a href="#" class="user-img" id=""><img class="img-circle" src={{attributes.userProfImg}} /></a>' +
				'<div class="user-kan-info">' +
					// '<h3>{{attributes.userFn}} {{attributes.userLn}}</h3>' +
					'<h3 class="user-event-desc">4:20<span>21st Oct</span></h3>' +
					'<p>{{attributes.fsLoc}}</p>' +
					'<a href="#" class="like" id=""><img src="img/liked.png"/></a>' +
				'</div>' +
			'<div class="image-container">' +
				'<a href="#" class="kandid-img" id=""><img src={{attributes.imageUrl}} class="img"/></a>' +
			'</div>' +
			'<div class="comment-container">' +
				'<p>{{attributes.userName}}: <span>{{attributes.comments}}</span></p>' +
			'</div>' +
			'</div>{{/each}}' +
        '</div>'		
	),

	initialize: function  () {

	},

	render: function () {

		this.curUser = { 
			curUserImg : Parse.User.current().get("profImg"),
			curUserFn : Parse.User.current().get("firstName"),
			curUserLn : Parse.User.current().get("lastName"),
			curUserName : Parse.User.current().get("userName")   
		};
		console.log(this.curUser);

		this.$el.html(this.template( $.extend({}, this.curUser, this.collection )));
		return this;
	},
});