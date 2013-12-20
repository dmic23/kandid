// kandid js //


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
	console.log("lat: "+lat);
	console.log("lng: "+lng);
}


// function upload(file) {
// 	localStorage.setItem('file',JSON.stringify(file)); 
// 	console.log("file:"+file);           
// };

// function displayAsImage(file) {
// 	var imgURL = URL.createObjectURL(file),
// 		img = document.createElement('img'); img.className='img-responsive';
// 	img.onload = function() {
// 		URL.revokeObjectURL(imgURL);
// 	};
// 	img.src = imgURL;
// 	console.log(imgURL);
// 	document.body.appendChild(img);
// }

// function drawOnCanvas(file) {
// 	var reader = new FileReader();

// 	reader.onload = function (e) {
// 		var dataURL = e.target.result,
// 			c = document.querySelector('canvas'), 
// 			ctx = c.getContext('2d'),
// 			img = new Image();

// 		img.onload = function() {
// 			ctx.drawImage(img, 0, 0, 600, 600);
// 			localStorage.setItem('photo',c.toDataURL());                        
// 		};
// 		img.src = dataURL;
// 	};
// 	reader.readAsDataURL(file);
// }

$(document).ready(function(){

function fbUserInfo(){
	var name = fbUser.name
	var imgSrc = 'https://graph.facebook.com/'+fbUser.username+'/picture?type=small';
	$('#user-img').append($ ('<img class="img-circle"/>').attr('src',imgSrc));
	console.log(imgSrc);
	console.log(name);
};
fbUserInfo();

});