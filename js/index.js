
$(function() {
    $("#header").load("header.html"); 
    $("#footer").load("footer.html");

    //메인페이지 첫번째 아티클 박스 텍스트 사라졌다 나타남 
    var index = $(".at1_box1").index();
    setInterval(function(){       
        if(index<2){
            index++;
        } else{
            index=0;
        }

        setTimeout(function(){
            $(".at1_box1").removeClass("active");
        }, 1000);
        setTimeout(function(){
            $(".at1_box1").eq(index).addClass("active");
        }, 2000);

    }, 5000);

    $(window).scroll(function(){
        
        //아티클 2번 박스 윈도우 스크롤시 파도 움직임
        $(".at2_wave1").stop().animate({"background-position-x":"+=250px"},0, );
        $(".at2_wave2").stop().animate({"background-position-x":"+=250px"},0, );


        //아티클 2번 박스 스크롤 위치 지점에 나타날시 이미지 나타남
        var at2_top = $(".at2").offset().top-300
        var scrollTop = $(window).scrollTop();

        if(at2_top < scrollTop){
            $(".at2_pic").css("opacity", "1");
            $(".at2_text").css("opacity", "1");
        }


        //아티클 3번 박스 스크롤 위치 지점에 나타날시 이미지 나타남
        var at3_top = $(".at3").offset().top-300;
        var scrollTop = $(window).scrollTop();

        if(at3_top < scrollTop){
            $(".at3_icon").css("opacity", "1");
        }


        //아티클 4번 박스 윈도우 스크롤시 파도 움직임
        $(".at4_wave1").stop().animate({"background-position-x":"+=250px"},0, );
        $(".at4_wave2").stop().animate({"background-position-x":"+=250px"},0, );


        //아티클 4번 박스 스크롤 위치 지점에 나타날시 이미지 나타남
        var at4_top = $(".at4").offset().top-300
        var scrollTop = $(window).scrollTop();

        if(at4_top < scrollTop){
            $(".at4_box1").css({"opacity":"1"});
            $(".at4_box1_txt").css({"opacity":"1"});

            $(".at4_box2").css({ "opacity":"1"});
            $(".at4_box2_txt").css({"opacity":"1"});
        }



    });

    

})

