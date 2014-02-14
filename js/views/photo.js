Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var PhotoView = Parse.View.extend({

	template: Handlebars.compile(

		'<div class="container-top capture-top">' +
        '<a class="next" href="#/mykandids/customize">Next</a>' +
		'</div>' +
		'<section class="img-control">' +
        '<canvas id="canvas" class="img-responsive img" width="600" height="600"></canvas>' +
        '</section>' +
        '<div class="capture-bottom">' +
		'<div class="capture">' +
        '<input type="file" id="kandid-pic" class="" name="image" accept="image/*" capture>' +
        '</div>' +
        '</div>'

	),

	initialize: function  () {

	},

	render: function () {

		this.delegateEvents({
			'change input[type=file]': 'getPic'
		});
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	getPic: function () {

		var input = $('input[type=file]')[0]; 

		if (input.files.length > 0) {
			var file = input.files[0];
			// var name = "kandid.jpg";
			// var kandidPic = new Parse.File(name, file);
			drawOnCanvas(file); 			
			upload(file);
			console.log(file);
			// this.model.set('imageFull', kandidPic);
			// this.model.save(null, {
			// 	success: function(model) {
			// 		alert('pic saved');
			// 		app.navigate('mykandids/customize', {trigger: true});

			// 	},
			// 	error: function(model, error) {
			// 		alert('pic not saved');
			// 	}
			// });
		};

		function upload(file) {
			localStorage.setItem('file',JSON.stringify(file)); 
		};

		function drawOnCanvas(file) {
			var reader = new FileReader();

			reader.onload = function (e) {
				var dataURL = e.target.result,
					c = document.querySelector('canvas'), 
					ctx = c.getContext('2d'),
					img = new Image();

				img.onload = function() {
					ctx.drawImage(img, 0, 0, 600, 600);
					localStorage.setItem('photo',c.toDataURL()); 
					console.log(photo);
				};
				img.src = dataURL;
			};
			reader.readAsDataURL(file);
		};		
	}

});