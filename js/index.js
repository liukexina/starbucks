
/*点击列表*/
$(".trigger").on("click",function () {
    console.log("123");
    $(".overlay").addClass("active");
});

/*点击×*/
$(".icon-shanchu").on("click",function () {
    console.log("234");
    $(".overlay").removeClass("active");
});

/*轮播图*/


var index = 0;
var isRun = true;

var sit1 = setInterval(function () {
    if(isRun){
        index ++;
        test();
    }

},2000);
setInterval(function () {
    $(".content-ul li").width($(".box").width());
    $(".content-ul").width($(".content-ul li").width() * 4);
    var height=$(".content-ul li").height();
    $(".content-ul").height(height);
},1);

function test() {

    var change = - index * $(".hero li").width();
    $(".content-ul").css("transition","all 1s ease");
    $(".content-ul").css("transform","translate3d("+change+"px ,0 ,0 )");
    if(index == 3){
        setTimeout(function () {
            $(".content-ul").css("transition","");
            $(".content-ul").css("transform","translate3d( 0 ,0 ,0 )");
            index = 0;
        },1000);
    }
}
$(".right").on("click",function () {
    index ++ ;
    test();

});
$(".hero").hover(function () {
    isRun = false;
},function () {
    isRun = true;
});


/*轮播图2*/
/*
var time = 0;
$(".scroll-right").on("click",function () {
    var m = ($(".scroll .wrapper").outerWidth(true) - $(".scroll .wrapper").outerWidth()) / 2;
    var chang = $(".scroll").width() - m ;
    var move = $(".scroll-items").width() - chang + 30;
    if(time == 0){
        $(".scroll-items").css("transform","translateX(-290px)");
        $(".scroll-left").css("opacity","1");
        time = 1;
    }
    else if(time == 1){
        $(".scroll-items").css("transform","translateX(-"+move+"px)");
        $(".scroll-left").css("opacity","1");
        time = 2;
    }


});
$(".scroll-left").on("click",function () {
    if(time == 2){
        $(".scroll-items").css("transform","translateX(-290px)");
        time = 1;
    }
    else if(time == 1){
        $(".scroll-items").css("transform","translateX(0px)");
        $(".scroll-left").css("opacity","0");
        time = 0;
    }
});
*/
var scrollBar = document.getElementsByClassName("scroll")[0];
var timer = null;
$(".scroll-left").on("click",function () {
    run("left");
});
$(".scroll-right").on("click",function () {
    run("right");
});
function run(dire) {
    var scrollLeft = dire == "left" ? scrollBar.scrollLeft - 300 : scrollBar.scrollLeft + 300;
    $(".scroll").animate({
        scrollLeft:scrollLeft
    },500,function () {
        showArrow();
    })
}
function showArrow() {
    $(".scroll-left").add($(".scroll-right")).show();
    console.log(scrollBar.scrollLeft,scrollBar.scrollWidth-scrollBar.clientWidth);
    if(scrollBar.scrollLeft <= 0){
        $(".scroll-left").hide();
    }
    else if(scrollBar.scrollLeft >= scrollBar.scrollWidth-scrollBar.clientWidth - 1){
        $(".scroll-right").hide();
    }
}
$(".scroll").on("scroll",function(){
    // clearTimeout(timer);
    // timer = setTimeout(function(){
    //   showArrow();
    // },1000)
    if($(this).data("timer")){
        clearTimeout($(this).data("timer"));
    }
    $(this).data("timer",setTimeout(function(){showArrow()},1000));

});

/*
var time = 0;
$(".scroll-right").on("click",function () {
    var m = ($(".scroll .wrapper").outerWidth(true) - $(".scroll .wrapper").outerWidth()) / 2;
    var n = parseInt($(".scroll .wrapper").css("padding-left"));
    var chang = $(".scroll").width() - m - n ;
    var move = $(".scroll-items").width() - chang;
    if(time == 0){
        $(".scroll-items").css("transform","translateX(-290px)");
        $(".scroll-left").css("opacity","1");
        time = 1;
    }
    else if(time == 1){
        $(".scroll-items").css("transform","translateX(-"+move+"px)");
        $(".scroll-left").css("opacity","1");
        $(".scroll-right").css("opacity","0");
        time = 2;

    }


});
$(".scroll-left").on("click",function () {
    if(time == 2){
        $(".scroll-items").css("transform","translateX(-290px)");
        $(".scroll-right").css("opacity","1");
        time = 1;
    }
    else if(time == 1){
        $(".scroll-items").css("transform","translateX(0px)");
        $(".scroll-left").css("opacity","0");
        time = 0;
    }
});
*/





