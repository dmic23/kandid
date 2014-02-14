Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var NearMeView = Parse.View.extend({

	template: Handlebars.compile(

		'<header>' +
		'<div class="header-content">' +	
		'<a href="#" class="user-img" id=""><img class="img-circle user-img"" src={{userImg}} /></a>' +	
		'<h1>KANDID</h1>' +
		'</div>' +
		'<nav id="main-nav" class="btn-group nav-btns" data-toggle="buttons">' +
		      '<button type="radio" id="featured" class="btn btn-lg"><a href="#/mykandids/featured">Featured</a></button>' +
		      '<button type="radio" class="btn btn-lg"><a href="#/mykandids/recent">Recent</a></button>' +
		      '<button type="radio" class="btn btn-lg"><a href="#/mykandids/nearMe">Near Me</a></button>' +
		'</nav>' +
		'</header>' +
		'<div id="map-container" class="container">'+
        '<div id="map-canvas" style="width: 100%; height: 600px;"></div>'+
        '</div>'+
        '<script type="text/javascript" src="js/map.js"></script>'
	),

	initialize: function  () {

	},

	render: function () {
		this.curUserImg = { userImg : Parse.User.current().get("profImg") };

		this.$el.html(this.template($.extend({}, this.curUserImg, this.model.attributes)));
		return this;
	}
});