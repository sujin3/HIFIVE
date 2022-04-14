$(document).ready(function(){
	$("nav ul.gnb > li").hover(function(){
		$("ul.submenu").stop().slideDown();
	},function(){
		$("ul.submenu").stop().slideUp();
	});
});
/* $(function () {
            $("#gnb > li").on({  //on은 그룹이벤트 핸들러
                click: function(){
                    //클릭했다.
                    console.log($(this).text());
                },
                mouseenter: function(){
                    //마우스가 닿았다.
                    console.log("마우스가 닿았다.");
                }, 
                mouseleave: function(){
                    //마우스가 닿았다가 떠났다.
                }
            });
        }) */

/* $(document).ready(function(){
	$('.hero').bxSlider({
		mode: 'fade'
	});
  }); */
