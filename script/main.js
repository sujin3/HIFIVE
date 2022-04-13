$(document).ready(function(){

	$("nav ul.gnb > li").hover(function(){
		$("ul.submenu").stop().slideDown();
	},function(){
		$("ul.submenu").stop().slideUp();

	});
});

/* $(document).ready(function(){
	$('.hero').bxSlider({
		mode: 'fade'
	});
  }); */
