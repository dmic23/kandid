Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var CustomizeView = Parse.View.extend({

	template: Handlebars.compile(	

		'<div class="container-top capture-top">' +
		'<a class="back" href="#/mykandids/photo">Back</a>' +
		'<a class="next" href="#/mykandids/new">Share</a>' +
		'</div>' +
		'<section class="img-control">' +
        '<canvas id="canvas" class="img-responsive img" width="600" height="600"></canvas>' +
        '</section>' +
        '<div class="capture-bottom">' +
        '</div>'		
	),

	initialize: function  () {

	},

	render: function () {
		this.$el.html(this.template(this.model.attributes));
		setTimeout(this.drawPic, 0);
		return this;
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
				// ctx = c.getContext('2d'),
				img = new Image();
				console.log("test2");

			img.onload = function() {
				console.log('test3');
				var MAX_WIDTH = 600;
				var MAX_HEIGHT = 600;
				var width = img.width;
				var height = img.height;
				 
				if (width > height) {
				  if (width > MAX_WIDTH) {
				    height *= MAX_WIDTH / width;
				    width = MAX_WIDTH;
				  }
				} else {
				  if (height > MAX_HEIGHT) {
				    width *= MAX_HEIGHT / height;
				    height = MAX_HEIGHT;
				  }
				}
				c.width = width;
				c.height = height;
				ctx = c.getContext('2d');
				ctx.drawImage(img, 0, 0, width, height);
				localStorage.setItem('photo',c.toDataURL()); 
				console.log('test4');
			};
			console.log(dataURL);
			img.src = dataURL;
			console.log('test6');
	}
});
