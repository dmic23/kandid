var input = document.querySelector('input[type=file]'); 

input.onchange = function () {
	var file = input.files[0];
	upload(file);
	drawOnCanvas(file); 
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
		};
		img.src = dataURL;
	};
	reader.readAsDataURL(file);
};



