var map;
var lat;
var lng;

console.log(lat);
console.log(lng);
// Get user lat/lng position
function userPos(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
		function(position){
		var user_lat = parseFloat(position.coords.latitude);
		var	user_lng = parseFloat(position.coords.longitude);
		console.log(user_lat);
		console.log(user_lng);
		initialize(user_lat, user_lng);
		});
	} else {
	alert("Geolocation is not supported or turned off");
	}
}
userPos();

//initialize map passing user lat/lng
function initialize(user_lat, user_lng){
	var latlng = new google.maps.LatLng(user_lat,user_lng);
	var mapOptions = {
		zoom: 13,
		center: latlng,
		mapTypeId: 'roadmap'
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	marker = new google.maps.Marker({
	position: latlng,
	map: map,
});

}
google.maps.event.addDomListener(window, 'load', initialize);