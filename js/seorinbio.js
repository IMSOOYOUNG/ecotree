$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");


    // 아티클 0번 큰 사진 이미지 4초 간격으로 바뀜
    var at0_count = 1;
    let at0_length = $(".at0_box").length; 
    setInterval(function(){     
        if(at0_count<at0_length){
            at0_count++;
        } else{
            at0_count = 1;
        }
        fade(at0_count);
    }, 4000)

    // 아티클 0번 큰 사진 이미지 다음 사진으로 바뀜
    $(".at0_next").click(function() {
        at0_count++;
        if(at0_count>4){
            at0_count=1
        }
        fade(at0_count);
    })
    // 아티클 0번 큰 사진 이미지 이전 사진으로 바뀜
    $(".at0_prev").click(function() {
        at0_count--;
        if(at0_count<1){
            at0_count=4
        }
        fade(at0_count);
    })






    $(window).scroll(function(){

        // 아티클 3번 스크롤할때 배경 색깔 바뀜
        scrollTop = $(window).scrollTop();
        at3_Top = $(".at3").offset().top;
        at4_top = $(".at4").offset().top;
        
        if(scrollTop>at3_Top && scrollTop<at4_top-350){
            $(".at3").css("background","#79ebcc");
            $(".at3 p").stop().animate({"opacity":"1"},300);
            $(".at3").addClass("fixed");
        } else{
            $(".at3").css("background", "white");
            $(".at3").removeClass("fixed");
            $(".at3 p").stop().animate({"opacity":"0.2"},300);
        }

        
        // 아티클 4번 박스에 위치 할때 이미지 회전
        if(scrollTop >at4_top-200){
            // $(".at4_pic").stop().animate({"transform":"rotate(720deg)"},300);
            $(".at4_pic").addClass("rotate");
            $(".at4_text").animate({"opacity":"1"},500)

        }



    })
    

})





//서린바이오 페이지 아티클 0번 사진 바뀌는 함수
function fade(c){
    var count = c;
    $(".at0_box").stop().fadeOut(1000);
    $(".at0_box"+count).stop().fadeIn(1000);
}






