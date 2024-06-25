
$(function(){
    
    //dott
    $(window).on("scroll", function(){
        var ht = $(window).height();

        var scroll = $(window).scrollTop();

        for(var i=0; i<6;i++){
            if(scroll>=ht*i && scroll< ht*(i+1)){
                $(".dott li").removeClass();
                $(".dott li").eq(i).addClass("on");
            };
        }
    });


    //section위에서 마우스 휠을 움직이면
$("section").on("mousewheel",function(event,delta){    
		
    //마우스 휠을 올렸을때	
      if (delta > 0) {  
        //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
         var prev = $(this).prev().offset().top;
         //문서 전체를 prev에 저장된 위치로 이동
         $("html,body").stop().animate({"scrollTop":prev},500);
         
    //마우스 휠을 내렸을때	 
      }else if (delta < 0) {  
        //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
         var next = $(this).next().offset().top;
         //문서 전체를 next에 저장된 위치로 이동
         $("html,body").stop().animate({"scrollTop":next},500);                                         
      }
      
 });


     /* 스크롤 부드럽게*/
$('nav a').click(function(e){
    $.scrollTo(this.hash || 0, 300);
    e.preventDefault();
  });


    //box2


    //box3
    jQuery(document).ready(function ($) {

        var jssor_1_options = {
          $AutoPlay: true,
          $SlideDuration: 800,
          $SlideEasing: $Jease$.$OutQuint,
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
          },
          $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
          }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*responsive code begin*/
        /*you can remove responsive code if you don't want the slider scales while window resizing*/
        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 1920);
                jssor_1_slider.$ScaleWidth(refSize);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        /*responsive code end*/
    });

    
});