
$(document).ready(function(){
    $(document).mouseup(function(e) {
        var container = $(".container-2 .caption-icons-1");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });
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
        $("."+$(this).data("show")).fadeToggle();
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
            $(".fade-2").fadeOut();
            $(".fade-3").fadeOut();
            $(".fade-two").fadeOut();
            $(".fade-three").fadeOut();
            break;
            case "fade-2":
            $(".fade-1").fadeOut();
            $(".fade-3").fadeOut();
            $(".fade-one").fadeOut();
            $(".fade-three").fadeOut();
            break;
            case "fade-3":
            $(".fade-2").fadeOut();
            $(".fade-1").fadeOut();
            $(".fade-one").fadeOut();
            $(".fade-two").fadeOut();
            break;
        }
    })
    $(".evidence a:first-child").on("click", function(){
        $(".fade-one").fadeToggle();
        $(this).toggleClass("extra-style");
        $(".evidence a").toggleClass("extra-color");
        $(this).toggleClass("extra-color");
    });
    $(".education a:first-child").on("click", function(){
        $(".fade-two").fadeToggle();
        $(this).toggleClass("extra-style");
        $(".education a").toggleClass("extra-color");
        $(this).removeClass("extra-color");
    });
    $(".partnership a:first-child").on("click", function(){
        $(".fade-three").fadeToggle();
        $(this).toggleClass("extra-style");
        $(".partnership a").toggleClass("extra-color");
        $(this).removeClass("extra-color");
    });
    $(".linkingarea a").on("click", function (e) {
        e.preventDefault();
        $(".inner-area-menu").toggle();
    });

    $(".container-2 .icons-one ").on("click", function(){
        $(".container-2 .caption-icons-1").fadeIn();
        $(".container-2 .menu .text-center").css('opacity','1');
    });
    $(".container-2-one .icons-one ").on("click", function(){
        $(".container-2-one .caption-icons-1").fadeIn();
        $(".container-2-one .menu .text-center").css('opacity','1');
    });
    $(".show-menu").on("click", function () {
        $("#hidden").show();
        $("#showen").hide();
    });
    $(".left-list-top a").on("click", function () {
        $("#hidden").show();
        $("#showen").hide();
        $(".give-margin").hide();
        $("."+$(this).text()).fadeIn();
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