$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");



    // at1번 박스 속에 text클릭시 text 나옴
    $(".at1_q").click(function(){
        $(".at1_a").fadeIn();
        $(".at1_text").delay(200).fadeIn(800);
        $(".at1_table").delay(400).fadeIn(800);
    })


    // at4번 for문으로 그림 넣기
    
    for(i=1; i<5; i++){
        $(".at4_pic").eq(i-1).css("background","url(img/ecotree/img"+i+".png) no-repeat center center")
        .css("backgroundSize","50% 60%")
    }
   

    $(window).scroll(function(){

        // at3번 박스 속에 이미지 나타남       
        scrollTop = $(window).scrollTop();
        at3_top = $(".at3").offset().top;

        if(scrollTop+300 > at3_top) {
            $(".at3_pic > div").fadeIn(800);
        }

        // at4번 이미지 나타남
        at4_top = $(".at4").offset().top;
        
        if(scrollTop+400> at4_top){
            $(".at4_box").eq(0).fadeIn(800);
            $(".at4_box").eq(1).delay(200).fadeIn(800);
            $(".at4_box").eq(2).delay(400).fadeIn(800);
            $(".at4_box").eq(3).delay(600).fadeIn(800);
        }
        


    })
    




})