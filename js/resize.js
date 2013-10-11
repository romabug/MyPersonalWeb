 
  //###################网页缩放时候#####################

function Re_size () { 
 
  $(window).resize(function() {
	  
// 菜单移动到右边

  // ipad portrait view
   if ($(window).width() < 769   ) {
	   
 $("#menu_list ul li").removeClass("offset1").removeClass("span2").addClass("span3");
   $("#menu_list").insertBefore("#strolltext");
		  
   };
    
   
   if ($(window).width() > 800 ) {  
   
   $("#menu_list ul li").removeClass("span3");
    $("#menu_list ul li:first").addClass("offset1");
	$("#menu_list ul li").addClass("span2");
  $("#menu_list").insertBefore("#boxlist1");
   
   }; 
	   
	  
	  
// 闪烁 提示框  
	 var str ="<p>Resizing...</p>"+ "<p>W:" +$(window).width() +"</p><p>H:" +$(window).height() +"</p>"
  
   $( ".showsth" ).html( str)
  $( ".showsth" ).css( "display", "block" ).fadeOut(2000);	 	
	
//  图片框 宽高变化
  var flexwidth = $(".picbox").width();
  $(".picbox").css("height",flexwidth*0.618); 	
	
  
 //摄影 幻灯片 宽高 变化
  var tempw = $("#mywork").width() * 0.8;
    $("#mywork").css("height",tempw);
	

 
    
});

};