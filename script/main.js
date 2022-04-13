$(document).ready(function(){

	$('.nav .submenu1').hide();

	$('.nav li a').mouseover(function(){
		$('.submenu1').slideDown();

	});
	$('.nav li a').mouseleave(function(){
		$('.submenu1').hide();
	});
});
