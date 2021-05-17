//  PRELOADER CSS
$(window).on("load", function() {
    $(".block")
        .delay(450)
        .fadeOut(1000);
    $(".preloader")
        .delay(500)
        .fadeOut(500);
});