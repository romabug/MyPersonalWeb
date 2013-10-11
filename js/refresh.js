 
//一切网页刷新时候，需要调整的 参数变化，放到 document.ready 里头
 function Refresh () {
 
// $("#cover_footer ~ div ").hide();   //   初始化 隐藏掉 FOOTER 后面的所有元素
//$("#cover").hide(); $("#cover_footer").hide(); $(".gridscol").hide();   





// 菜单移动到右边   ipad portrait view

   if ($(window).width() < 769   ) {
	   
 $("#menu_list ul li").removeClass("offset1").removeClass("span2").addClass("span3");
   $("#menu_list").insertBefore("#strolltext");
		  
   };


// get height of window and set the grids height 网格高度
 var screengao = $(document).height() ;
 $(".gridscol").css("height",  (screengao -5) ); 
  // show grids
  $(".tempbtn").click(function(e) {
   $(".gridscol").slideToggle();
});

      
 //摄影 幻灯片 宽高 变化
  var tempw = $("#mywork").width() * 0.8;
    $("#mywork").css("height",tempw);
	

//图片框的 宽高 重设置
    var flexwidth = $(".picbox").width();
  $(".picbox").css("height",flexwidth*0.618);
  

 
 
  //提示滚动条滚动

 $( window ).scroll(function() {
  $( ".showsth" ).html("<p>Strolling...</p>"); $( ".showsth" ).css( "display", "block" ).fadeOut(500);
});
                      
	
	
	
	};