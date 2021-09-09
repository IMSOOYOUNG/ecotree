$(function() {

    //모바일 메뉴바 클릭시 X버튼으로 바뀌고 창 나오기
    let no = 0;
    $(".menubar").on("click", function(){
        
        if(no==0){
            $(".mobmenu").animate({"right":"0"},200);
            $(".menubar").addClass("change");
            $(".bar").css("background","white");
            no=1;
        }
        else{
            $(".mobmenu").animate({"right":"-100%"},200);
            $(".menubar").removeClass("change");
            $(".bar").css("background","#ccc");
            no=0;
        }
        
    });

    //모바일 메뉴바 플러스 버튼 클릭시 -로 모양 바꾸고 서브메뉴 나오기
    let count = 0;
    $(".m_eco").on("click", function() {
        
        if(count==0){
            $(".plus1").css({"transform":"rotate(45deg)"});
            $(".plus2").css({"transform":"rotate(135deg)"});
            $(".m_eco> ul").slideDown();
            count=1;
        }
        else{
            $(".plus1").css({"transform":"rotate(0deg)"});
            $(".plus2").css({"transform":"rotate(90deg)"});
            $(".m_eco> ul").slideUp();
            count=0;
        }
        
    })
    


});