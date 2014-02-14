
var $ = jQuery.noConflict();
	$(function() {
		console.log('ready');
		$('#activator').click(function(){
			$('#box').animate({'top':'0px'},500);
		});
		$('#boxclose').click(function(){
			$('#box').animate({'top':'-700px'},500);
		});
	});
	$(document).ready(function(){
		console.log('ready');
		$('.show-menu').click(function() {
		$('.box').slideToggle("fast");
	});	
//Hide (Collapse) the toggle containers on load
	$(".toggle_container").hide(); 

	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	$(".trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false; //Prevent the browser jump to the link anchor
	});

});	
