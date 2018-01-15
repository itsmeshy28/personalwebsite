$(document).ready(function() {
    //Fade in the .menu then animate(show) the content one by one.
    //NOTES: Using callback, the callback-animation will wait the previous executed-animation.
    $(".menu").fadeIn(1200, function() {
        $("#_1").animate({
            opacity: 1
        }, 400, function() {
            $("#_2").animate({
                opacity: 1
            }, 400, function() {
                $("#_3").animate({
                    opacity: 1
                }, 400, function() {
                    $("#_4").animate({
                        opacity: 1
                    }, 400, function() {

                    });
                });
            });
        });
    });
    //By clicking the .menu will animate the 'flip' by adding the class menu-flip with transform-rotateY.
    //After 400miliseconds(setTimeout) will remove the 'menu-flip' then animate the scroll to section 2. 
    $(".menu").click(function() {
        var obj = $(this);
        $(obj).addClass("menu-flip");
        setTimeout(function() {
            $(obj).removeClass("menu-flip");
            $("html , body").animate({
                    scrollTop: $(".s2").offset().top
                },
                600,
                function() {

                });
        }, 400);
    });
});