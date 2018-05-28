$(document).ready(function(){
    $(".hidebutton").click(function(){
        $(".hiding").toggle();
    });
    $(".hidebutton1").click(function(){
        $(".hiding1").toggle();
        $(".grey").css('height','0px');
        $('.your-courses').toggleClass('your-courses1');

        
        
    });
    $(".hidebutton3").click(function(){
        $(".hiding3").toggle();
    });
    $(".hidebutton4").click(function(){
        $(".hiding4").toggle();
    });

    $(".fa-search").on("click",function(){
        $(".icons-1").fadeOut();
    })
    $(".secondnav .outer-row > div:first-child").on("click", function(){
        $("."+$(this).data("show")).toggle();
        $(".secondnav .outer-row > div:first-child").css('text-decoration','none');
        $(".secondnav .outer-row > div:first-child").css('opacity','0.6');
        $(this).css('text-decoration','underline');
        $(this).css('opacity','1');
        $(".evidence a").removeClass("extra-style");
        $(".evidence a").removeClass("extra-color");
        $(".education a").removeClass("extra-color");
        $(".education a").removeClass("extra-color");
        $(".partnership a").removeClass("extra-color");
        $(".partnership a").removeClass("extra-color");
        switch($(this).data("show")){
            case "fade-1":
            $(".fade-2").hide();
            $(".fade-3").hide();
            $(".fade-two").hide();
            $(".fade-three").hide();
            break;
            case "fade-2":
            $(".fade-1").hide();
            $(".fade-3").hide();
            $(".fade-one").hide();
            $(".fade-three").hide();
            break;
            case "fade-3":
            $(".fade-2").hide();
            $(".fade-1").hide();
            $(".fade-one").hide();
            $(".fade-two").hide();
            break;
        }
    })
    $(".evidence a:first-child").on("click", function(){
        $(".fade-one").toggle();
        $(this).toggleClass("extra-style");
        $(".evidence a").toggleClass("extra-color");
        $(this).toggleClass("extra-color");
    });
    $(".education a:first-child").on("click", function(){
        $(".fade-two").toggle();
        $(this).toggleClass("extra-style");
        $(".education a").toggleClass("extra-color");
        $(this).removeClass("extra-color");
    });
    $(".partnership a:first-child").on("click", function(){
        $(".fade-three").toggle();
        $(this).toggleClass("extra-style");
        $(".partnership a").toggleClass("extra-color");
        $(this).removeClass("extra-color");
    });
    $(".secondnav1 > div > a").on("click", function (e) {
        e.preventDefault();
        $(".inner-area-menu").toggle();
    });

    $(".icons-one ").on("click", function(){
        $(".caption-icons-1").show();
        $(".menu .text-center").css('opacity','1');
        $(".icons-one").hide();
    });
    $(".caption-icons-1").on("click", function(){

        $(".menu .text-center").css('opacity','0.6');
        $(".caption-icons-1 ").hide();  
        $(".icons-one").show();
        
    });
    $(".show-menu").on("click", function () {
        $("#hidden").show();
        $("#showen").hide();
    });
    $(".left-list-top a").on("click", function () {
        $("#hidden").show();
        console.log("1");
        $("#showen").hide();
        $("."+$(this).text()).show();
    });
    $(".headerlogo1 p").on("click", function () {
        $("#hidden").hide();
        $("#showen").show();
    });
    $(".main-container-there > div").on("click", function () {
        $(".main-container-there > div").removeClass("activated");
        $(this).addClass("activated");
    })

});