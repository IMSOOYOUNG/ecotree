$(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    

    // Q질문 클릭시 내용 나옴

    $(".at1_Q").click(function(){

        $(".at1_A").slideUp();
        if($(this).next().css("display")==="none"){
            $(this).next().slideDown();
        }
        else{
            $(this).next().slideUp();
        }

    })



    // 하단 버튼 클릭 시 화면 이동
    let num=0;
    let btn = $(".at1_btn> div");
    let list = $(".at1_box> ul");
    let left = $(".left");
    let right = $(".right");


    btn.click(function(){
        let i =$(this).index();

        list.removeClass();
        list.eq(i-1).addClass("at1_list");

        btn.removeClass();
        btn.eq(i-1).addClass("active")

        num = i-1;
    })


    left.click(function(){
        num = num-1;

        if(num<0){
            num=0;
            return;
        }
        list.removeClass();
        list.eq(num).addClass("at1_list");

        btn.removeClass();
        btn.eq(num).addClass("active");

    })


    right.click(function(){
        num = num+1;

        if(num >= btn.length){
            num=btn.length-1;
            return;
        }
        
        list.removeClass();
        list.eq(num).addClass("at1_list");

        btn.removeClass();
        btn.eq(num).addClass("active");
    })





})