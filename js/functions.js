 
 ///////////主函数，网页载入 //////////////////////// 
  
 $(document).ready(function(e) {
// 初始化， 预先载入 IFRAME 里的内容，网页速度块
 //$("#mywork").load("")
 
 $("#pointbar").change(function(e) {
	 var pointval = "#" + $(this).val();
	// alert (pointval);
 	 $("#colorbox").css("background-color", pointval );
	 
 	$("#cover").removeClass("mybg0 mybg1 mybg2 mybg3 mybg4 mybg5");
 	$("#cover").css("background-color", pointval );
    
});
 
 
 
// COVER BACKGROUND COLORS CHANGE 
 $("#mycolor").change(function(e) {
	 var sel_color =  $(this).val();
	// alert (  sel_color );
	$("#colorbox").css("background-color", sel_color );
	$("#cover").removeClass("mybg0 mybg1 mybg2 mybg3 mybg4 mybg5");
	$("#cover").css("background-color", sel_color );
     
});
 
 
 
 
function add_bar () {
	var str =" <div  class='span6 offset1' style=' border-bottom:1px gray dotted; margin-top:30px; margin-bottom:30px;'  >   </div>  "
	return str;
 
	};	 
	
 
var  get_click ="";  // 记录点击

 
	 
//点击myWEB后 的动作	 
 $(".myweb").bind("click",function() {

if (get_click == "myweb"){
	return false;
	}	 else {
	 
get_click ="myweb";	 
		 
  var tempw = $("#myweb").width() * 0.8;
    $("#myweb").css("height",tempw);
	
$("#myweb").insertAfter("#start");	 //插入到那边
      $("#myweb").delay(500).hide().slideDown().fadeOut(10).fadeIn(500); 

   $(add_bar ()).insertAfter(  $("#myweb"));
	  
	};  }); 
 
	
//点击 摄影后 的动作	 
 $(".mywork").bind("click",function() {

if (get_click == "mywork"){
	return false;
	}	 else {
	 
get_click ="mywork";
		 
  var tempw = $("#mywork").width() * 0.8;
    $("#mywork").css("height",tempw);
	
$("#mywork").insertAfter("#start");	 //插入到那边
	
     $("#mywork").delay(500).hide().slideDown().fadeOut(10).fadeIn(500);
	 
// var str_bar = add_bar ();
  $(add_bar ()).insertAfter(  $("#mywork"));
  
	};
 
 		 });
	 

		 

//点击MY PLAY 后 的动作	 
 $(".myplay").bind("click",function() {

if (get_click == "myplay"){
	return false;
	}	 else {
	get_click = "myplay";
		 
  var tempw = $("#myplay").width() * 0.8;
    $("#myplay").css("height",tempw);
	
$("#myplay").insertAfter("#start");	 //插入到那边
	
     $("#myplay").delay(500).hide().slideDown().fadeOut(10).fadeIn(500); 
	    $(add_bar ()).insertAfter(  $("#myplay"));
	};  
	});
	 		 


//点击MY CONTACT 后 的动作	 
 $(".mycontact").bind("click",function() {
 
if (get_click == "mycontact"){
	return false;
	}	 else {
	get_click = "mycontact";	 
	 
		 
  var tempw = $("#mycontact").width() * 0.8;
    $("#mycontact").css("height",tempw);
	
$("#mycontact").insertAfter("#start");	 //插入到那边
	
     $("#mycontact").delay(500).hide().slideDown().fadeOut(10).fadeIn(500); 
	     $(add_bar ()).insertAfter(  $("#mycontact"));
	 
	};   });	 
	 
 

	 
	 
	 
//********END TEST FUNCTIONS ***********************//
	 
	 
	 
	 
	 
//~~~~~~~~Start Load Functions~~~~~~~~~~~~~~~~~ // 
 
Fit_text();  // 自动缩放文字
Cover_open (); //打开封面的函数 已经包含运行--- Menu_flyin(); 
Change_skin () ; //菜单 鼠标移入MENU 换肤动作
Mykeyboard();  // 键盘事件

// Menu_flyin();  开场后，菜单 一个个 先后出现
 
 
///~~~~~~~~~~~~~Load Refresh~~~~~~~~~~~~~~~~~~~~//// 
Refresh ();  
 
//~~~~~~~~~~~Load Re Sizing ~~~~~~~~~~~~~~~~~~~~////
Re_size ();
  
      
  
  });

 
 /////////// END 网页载入 ////////////////////////    
  
/****************  FUNCTIONS ***************************/  
  
  
 // 菜单 一个个 出现
function Menu_flyin() {
//  $("#menu_list ul li").
  // window.setTimeout(testit(i+1), 800);
  $("#menu_list ul li").hide();
  
  var num =0;
     window.setInterval( function() {
  	  var numstr= "eq(" + num +")"  ;
	 var oLi = $("#menu_list ul li:" + numstr);  
   if (num < 5) {
	 
	 oLi.slideDown();
	//  oLi.animate({height:"1px"} ,500, "linear"  );
 	  };  
       num = num +1;
	   
  }, 200);  
 };
   
   
   
//菜单 鼠标移入 换肤动作

function Change_skin () {

 $("#menu_list ul li").bind(
 {
  mousedown: function()
  {
  var skin_name = "mybg" + $(this).index();
 $("#cover").removeClass();
$("#cover").addClass("cover_last"); 
$("#cover").addClass("cover_bg"); 
 
 $("#cover").addClass(skin_name);
 $("#cover").fadeOut(100).fadeIn(900);
   $("#cover").css("background-color","");
  }, 
  
  click: function () {

	  
  $("#menu_list ul li").each(function(index, element)      {
        $(this).removeClass("li_mybg" + index);
	//	$(this).removeClass("bgopacity");
 		$(this).find("a").removeClass("active");
	 
    });
	  
 	 var skin_name = "li_mybg" + $(this).index();
	 $(this).addClass(skin_name);
//	 $(this).addClass("bgopacity");
	 $(this).find("a").addClass("active");
 	  }
 	  
		}); 
		
};





// 键盘事件
 function  Mykeyboard() {
$(document).keydown(function(event){ 
 
if(event.keyCode == 16){ 
  $(".gridscol").slideToggle();
//do somethings; 
}else if (event.keyCode == 27){ 
 $(".gridscol").slideUp();
//do somethings; 
} 
/* 
   ALT: 18,
    SHIFT: 16,
    SPACE: 32,
    TAB: 9,
    UP: 38, 
	ESCAPE: 27,
	 CONTROL: 17,
	 UP: 38, RIGHT: 39,
	 */

});   };




//COVER ANIMATE	打开封面的函数

function Cover_open () {
	 
 $("#cover").click(function(e) {
    var Theight = 20 - $("#cover").height();	
  var Bheight = 1- $("#cover_footer").height();
  
  //点击进入后，解除 元素的 隐藏 cover_footer 后的所有元素
  
  $("#cover_footer ~ div ").show();
  $("#menu_list ul li").hide();
  
  // 封面上部 开始移动
  
   $("#cover").animate({top:Theight+'px'},600, "linear", function () {
	  // alert ("fly ends")
	  $("#cover").removeClass("cover_first");
	  $("#cover").addClass("cover_last");
	  $("#cover").css("top",0);
	  
	  // 菜单飞入	 
  Menu_flyin();
	  
	   }  );  
   
  // 封面底部 开始移动
   
   $("#cover_footer").animate({bottom: Bheight + 'px'}, function () {
	 $("#cover_footer").hide();   
	   });
  
     }); 
	
};



 // COVER FONT RESPONSIVE

function Fit_text() { 
 
 $("#cover .text1  ").fitText(0.8);
 $("#cover_footer .footp").fitText(0.8);
 
};

 //  $("#cover_footer .footp").fitText(1, { minFontSize: '118px', maxFontSize: '170px' }); 
	
// $("#bb").fitText(0.6 );  
 // 默认参数是 1， 参数越小，文字越大， 可以用这个参数控制 文字 初始字体,原来CSS 定义的 文字大小 失效。
 // $("#cc").fitText(1.1, { minFontSize: '28px', maxFontSize: '75px' });
     // $("#cover .text1 h3").fitText(  ); 
   //  默认字体大小：Font-size = 1/10th of the element's width.
  // $("#cover_footer  span").fitText(0.2); 
