Parse.initialize("xSiBgaOaMjITtQkGrxR2okOU79j3rO1LVTaD8JGF", "5FPajyGf1LJkkbBpuaQvH0rEEDv8eBombFtLZpFE");

var NewKandidView = Parse.View.extend({

	template: Handlebars.compile(

		'<script type="text/javascript" src="js/4sqacplugin.js"></script>' +
		'<script type="text/javascript" src="js/fsLoc.js"></script>' +
		'<div class="container-top share-top">' +
			'<a class="back" href="#/mykandids/customize">Back</a>' +
			'<a class="cancel" href="#/mykandids/recent">X</a>' +
		'</div>' +
		'<section class="share-img">' +
			'<canvas id="" class="img-responsive img" width="600" height="600"></canvas>' +
		'</section>' +
		'<div class="newKan-bottom" >' +
		'<form id="form-horizontal" class="newKan-form">' +
			'<div id="" class="form-group">' +
				'<textarea id="kandid-comment" class="form-control newKan-comment" rows="6" placeholder="leave a comment"></textarea>' +
			'</div>' +
			'<button id="activator" class="btn btn-primary show-fsLoc show-menu">Add a location</button>'+
			'<button id="activator2" class="btn btn-primary show-friends">Add a friend</button>'+
			// '<div id="" class="form-group">' +
			//         '<input type="search" id="tag-friend" class="form-control" placeholder="who got kandid?"></input>' +
			// '</div>' +
			'<div class="menu">' +																
				'<div class="box" id="box" style="display: none;">' +
					'<div class="box-content">' +        					                         
						'<div class="box-content-center">' +
							'<div class="form-content">' +
								'<div class="menu-box-list">' +
									'<div id="" class="form-group ui-widget">' +
										'<label>Where\'d you get Kandid?</label>' +
										'<input type="search" id="venue" class="form-control" placeholder="search"></input> ' +
									'</div>' +
									'<div>'+
										'<input type="hidden" id="venue-id"/>' +
											'<div id="venue-name" class="autocomplete-name"></div>' +
											'<div id="venue-address" class="autocomplete-detail"></div>' +
											'<div id="venue-cityLine" class="autocomplete-detail"></div>' +
									'</div>' +
								'</div>' +
								'<a class="boxclose" id="boxclose">Close</a>' +	
							'</div>' +
							'<div class="clear"></div>' +
						'</div>' +                
					'</div>' +
				'</div>' +
				'<div class="clear"></div>' +
			'</div>' +
		'</form>' +
		'<button type="button" id="share-kandid" class="btn btn-default done">all done?</button>' +
		'</div>' +
		'<script type="text/javascript" src="js/toggle_stuff.js"></script>' 
		// '<script src="js/classie.js"></script>'
		// '<script>' +
		// 	'$(function () {' +
		// 	    '$("#venue").foursquareAutocomplete({' +

		// 	        '"latitude": lat,' +
		// 	        '"longitude": lng,' +
		// 	        '"minLength": 2,' +
		// 	        '"search": function (event, ui) {' +
		// 	            '$("#venue-name").html(ui.item.name);' +
		// 	            '$("#venue-id").val(ui.item.id);' +
		// 	            '$("#venue-address").html(ui.item.address);' +
		// 	            '$("#venue-cityLine").html(ui.item.cityLine);' +
		// 	            'return false;' +
		// 	        '},' +
		// 	        '"onError" : function (errorCode, errorType, errorDetail) {' +
		// 	        	'var message = "Foursquare Error: Code=" + errorCode + ", errorType= " + errorType + ", errorDetail= " + errorDetail;' +
		// 	        	'log(message);' +
		// 	        '}' +
			        
		// 	   ' });' +
		// 	'})(jQuery);' +
		// 	'function log(message) {' +
		// 	    '$("<div/>").text(message).prependTo("#log");' +
		// 	    '$("#log").scrollTop(0);' +
		// 	'}' +
		// '</script>'
	  	// '<script type="text/javascript" src="js/fsLoc.js"></script>' 
	),
	
	initialize: function () {
		
	},

	render: function  () {
		this.$el.html(this.template());
		this.delegateEvents({
			'click #share-kandid': 'save'
		});
		setTimeout(this.drawPic, 0);
		// this.loadImg();
		return this;
	},

	save: function () {
		this.setModelData();

		this.model.save(this.model.attributes, 
			{
				success: function (model) {
					app.kandid.add(model);
				}
			}
		);
		// this.imageUrl();
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
				console.log('test4');
			};
			console.log(dataURL);
			img.src = dataURL;
			console.log('test6');
	},	

	// loadImg: function () {
	// 	var photo;
	// 	if (localStorage.getItem('photo')) {
	// 		photo = localStorage.getItem('photo');
	// 	}
	// 	console.log(photo);
	// 	var name = "kandid.jpg";
	// 	kandidPic = new Parse.File(name, { base64: photo });
	// 	console.log(kandidPic);
	// 	kandidPic.save().then(function() {
	// 			console.log("pic saved");
	// 		}, function(error) {
	// 			console.log("pic save error");
	// 	});
	// 	this.model.set('imageFull', kandidPic);
	// 	this.model.save(null, {
	// 		success: function(model) {
	// 			console.log('New pic created and saved');
	// 		},	
	// 		error: function(model, error) {
	// 			alert('Failed to create new pic, with error code: ' + error.description);
	// 		}	
	// 	});
	// },

	// imageUrl: function (){
	// 	var pic = this.model.get('imageFull');

	// 	console.log(pic);
	// 	console.log(pic.url());

	// 	picUrl = pic.url();
	// 	console.log(picUrl);
	// 	this.model.set('imageUrl', picUrl);
	// 	this.model.save(null, {
	// 		success: function(model) {
	// 			alert('picUrl saved');
	// 			app.navigate('mykandids/featured', {trigger: true});

	// 		},
	// 		error: function(model, error) {
	// 			alert('picUrl not saved');
	// 		}
	// 	});
	// },

	setModelData: function  () {
		this.model.set({
			userProfImg: Parse.User.current().get("profImg"),
			userFn: Parse.User.current().get("firstName"),
			userLn: Parse.User.current().get("lastName"),
			userName: Parse.User.current().get("userName"),
			user: Parse.User.current(),
			eventId: this.$el.find('#tag-friend').val(),
			comments: this.$el.find('#kandid-comment').val(),
			fsLoc: this.$el.find('#venue').val()
		});
	}

	// autoComplete: function () {
	// 	$(function () {	
	// 		$("#venue").foursquareAutocomplete({

	// 			'latitude': lat,
	// 			'longitude': lng,
	// 			// 'oauth_token': "INSERT YOUR KEY",
	// 			'minLength': 2,
	// 			'search': function (event, ui) {
	// 			    $("#venue-name").html(ui.item.name);
	// 			    $("#venue-id").val(ui.item.id);
	// 			    $("#venue-address").html(ui.item.address);
	// 			    $("#venue-cityLine").html(ui.item.cityLine);
	// 			    $("#venue-icon").attr("src", ui.item.photo);
	// 			    return false;
	// 			},
	// 			'onError' : function (errorCode, errorType, errorDetail) {
	// 				var message = "Foursquare Error: Code=" + errorCode + ", errorType= " + errorType + ", errorDetail= " + errorDetail;
	// 				log(message);
	// 			}
	// 	    });
	// 	});
	// 	function log(message) {
	// 	    $("<div/>").text(message).prependTo("#log");
	// 	    $("#log").scrollTop(0);
	// 	}
	// }


});