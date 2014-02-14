Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showLocation);
	}else{
		alert("Geolocation not supported or turned off");
	}
}
getLocation();

function showLocation(position){
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	localStorage.setItem('lat', lat); 
	localStorage.setItem('lng', lng); 
	console.log("lat: "+lat);
	console.log("lng: "+lng);
}

var AppRouter = Backbone.Router.extend({
	routes: {
		"": "recent",
		"mykandids/featured": "featured",
		"mykandids/recent": "recent",
		"mykandids/nearMe": "nearMe",
		"mykandids/photo": "photo",
		"mykandids/customize": "customize",
		"mykandids/new": "newKandid",
		"mykandids/user": "user"
	},

	initialize: function () {
		this.kandidColl = new KandidColl();
		this.kandidColl.fetch();

		this.kandid = new Kandid();
		this.featuredView = new FeaturedView( {model: this.kandid} );

		this.recentView = new RecentView({ collection: this.kandidColl });
		this.userView = new UserView({ collection: this.kandidColl });
		this.nearMeView = new NearMeView({ model: new Kandid() });
		this.photoView = new PhotoView({ model: new Kandid() });
		this.customizeView = new CustomizeView({ model: this.kandid }); 
		this.newKandidView = new NewKandidView({ model: this.kandid });
	},

	featured: function () {
		$('#app').html(this.featuredView.render().el);
	},

	recent: function () {
		$('#app').html(this.recentView.render().el);
	},

	photo: function () {
		$('#app').html(this.photoView.render().el);
	},

	nearMe: function () {
		$('#app').html(this.nearMeView.render().el);
	},

	customize: function () {
		$('#app').html(this.customizeView.render().el);
	},

	newKandid: function () {
		$('#app').html(this.newKandidView.render().el);
	},

	user: function () {
		$('#app').html(this.userView.render().el);
	}

});

var app = new AppRouter();

$(function() {
	Backbone.history.start();

});

// $(document).ready(function(){

// 	function fbUserInfo(){
// 		var name = fbUser.name
// 		var imgSrc = 'https://graph.facebook.com/'+fbUser.username+'/picture?type=small';
// 		$('#user-img').append($ ('<img class="img-circle user-img"/>').attr('src',imgSrc));
// 		console.log(imgSrc);
// 		console.log(name);
// 	};
// 	fbUserInfo();

// });

