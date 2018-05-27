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
    $(".secondnav .row > div:first-child").on("click", function(){
        $("."+$(this).data("show")).toggle();
        $(".secondnav .row > div:first-child").css('text-decoration','none');
        $(".secondnav .row > div:first-child").css('opacity','0.6');
        $(this).css('text-decoration','underline');
        $(this).css('opacity','1');
        switch($(this).data("show")){
            case "fade-1":
            $(".fade-2").hide();
            $(".fade-3").hide();
            break;
            case "fade-2":
            $(".fade-1").hide();
            $(".fade-3").hide();
            break;
            case "fade-3":
            $(".fade-2").hide();
            $(".fade-1").hide();
            break;
        }
    })
    $(".icons-1 ").on("click", function(){
        $(".caption-icons-1").show();
        $(".icons-1").hide();
    })
    $(".caption-icons-1").on("click", function(){
        $(".caption-icons-1 ").hide();  
        $(".icons-1").show();  
        
    })
    $(".main-container-there > div").on('click', function () {
        $(".main-container-there > div").removeClass("activated");
        $(this).addClass("activated");
    })
});
var y = document.getElementById("hidden");//hidey()

var x = document.getElementById("showen");//hide()




//menu show hide
function hide() {
    console.log('hide');
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display="none"
        console.log('y is'+y.style.display);
        console.log('x is'+x.style.display);
    } else {
        x.style.display = "none";
        y.style.display = "block";
        console.log('y'+y.style.display);
        console.log('x'+x.style.display);
    }
}
function hidey() {
    console.log('hidey');
    if (y.style.display === "none") {
        
        y.style.display = "block";
        
        x.style.display = "none";
        console.log('y is'+y.style.display);
        console.log('x is'+x.style.display);
    } else {
        y.style.display = "none";
        x.style.display = "block";
        console.log('y'+y.style.display);
        console.log('x'+x.style.display);
    }
}
// menu show hide end