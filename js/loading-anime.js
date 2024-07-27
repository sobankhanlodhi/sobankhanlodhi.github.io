//  PRELOADER CSS
$(window).on("load", function() {
    $(".block")
        .delay(350)
        .fadeOut(900);
    $(".preloader")
        .delay(400)
        .fadeOut(400);
});