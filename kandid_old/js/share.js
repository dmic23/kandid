$(document).ready(function(){

	if($('#pic-preview').length) {
			console.log(photo);
			var dataURL = photo,
				c = document.querySelector('canvas'), 
				ctx = c.getContext('2d'),
				img = new Image();

			img.onload = function() {
				ctx.drawImage(img, 0, 0, 600, 600);
			};
			img.src = dataURL;
		};
});