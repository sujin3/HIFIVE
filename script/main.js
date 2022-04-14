$(document).ready(function(){

	$('.nav .submenu1').hide();

	$('.nav li a').mouseover(function(){
		$('.submenu1').slideDown();

	});
	$('.nav li a').mouseleave(function(){
		$('.submenu1').hide();
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
