$(function(){
	$("footer span").click(function(){
		$("body,html").stop().animate({scrollTop:0},300);
	})
	$(".cons .right_").click(function(){
		$("body").css({"overflow":"hidden"});
		$(".cons .right_").hide();
		$(".cons .left_").show();
		$(".con").show();
		$(".cons").css({"left":"0","box-shadow":"4px 0px 4px rgba(0,0,0,0.5)"});
	})
	let CW = $(".cons").width();
	let CWPX = "-" + CW + "px"
	console.log(CW, CWPX);
	$(".con,.cons .left_").click(function(){
		$("body").css({"overflow":"auto"});
		
		$(".cons .left_").hide();
		$(".cons .right_").show();
		$(".con").hide();
		$(".cons").css({"left":CWPX,"box-shadow":"4px 0px 4px rgba(0,0,0,0)"});
	})
	console.log("%cGanto | ganto.cn","background-color:#3742FA;color:white;border-radius:4px;")
})
