Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var ShareView = Parse.View.extend({

	template: Handlebars.compile(

		'<div id="customize" class="container">' +
		'<canvas id="" width="600" height="600"></canvas>' +		
		'<button type="button" id="" class="btn btn-default" ><a href="#/mykandids/share">share</a></button>' +
		'<button type="button" id="test" class="btn btn-default" >test</a></button>' +
		'</div>'		
	),

	initialize: function  () {
		//this.listenTo(this.model, "change", this.render);
		//this.model.on('load', this.render, this);

	},

	render: function () {

		this.delegateEvents({
			'onload': 'drawPic',
			'click #test': 'drawPic' 
		});
		this.$el.html(this.template(this.model.attributes));
		// this.$el.on('load', function() { this.drawPic(); console.log('testload') });
		console.log('render1');
		this.testmeth();
		return this;
		console.log('render2');
				
	},

	drawPic: function () {
			console.log("test1");
			var photo;
			if (localStorage.getItem('photo')) {
				photo = localStorage.getItem('photo');
			}
			console.log(photo);
			var dataURL = photo,
				c = document.querySelector('canvas'), 
				ctx = c.getContext('2d'),
				img = new Image();
				console.log("test2");

			img.onload = function() {
				console.log('test3');
				ctx.drawImage(img, 0, 0, 600, 600);
				console.log('test4');
			};
			console.log(dataURL);
			img.src = dataURL;
			console.log('test6');
	}
});
