(function($) {

    "use strict";

    $(window).on("load", function() {

    /*  NameLOADER ANIMATION */

	
    var pageTransitionAnimationDuration = 500
    var nameloader = $(".preloader");
    pageTransition({
        target: document.querySelector('.page'),
        delay: 0,
        duration: pageTransitionAnimationDuration,
        classActive: 'animated',
        conditions: function (event, link) {
            return
            !/(\#|callto:|tel:|mailto:|:\/\/)/.test(link)
            && !event.currentTarget.hasAttribute('data-lightgallery')
            && event.currentTarget.getAttribute('href') !== 'javascript:void(0);';
        },
        onTransitionStart: function (options) {
            setTimeout(function () {
                preloader.removeClass('loaded');
            }, options.duration * .75);
        },
        onReady: function () {
            preloader.addClass('loaded');
        }
    });
		
    /* ============================================================== */

    /* ============================================================== */
        /*  TEXT ROTATOR ANIMATION
        /* ============================================================== */
		if ($("#selector").length) {
			$("#selector").animatedHeadline({
				 animationType: "clip"
			});
		}

    });

    jQuery(document).ready(function($) {
		
    /* ============================================================== */
    /*  STRETCHY NAVIGATION
    /* ============================================================== */
    
        if ($(".cd-stretchy-nav").length > 0) {
            var n = $(".cd-stretchy-nav");
            n.each(function() {
                var n = $(this),
                    t = n.find(".cd-nav-trigger");
                t.on("click", function(t) {
                    t.preventDefault(), n.toggleClass("nav-is-visible")
                })
            }), $(document).on("click", function(t) {
                !$(t.target).is(".cd-nav-trigger") && !$(t.target).is(".cd-nav-trigger span") && n.removeClass("nav-is-visible");
            })
        }
        $("body.light.dark-header .cd-stretchy-nav ul li a").on('click', function() {
            if ($(this).hasClass("home")) {
                $(".cd-stretchy-nav").addClass('lighter');
            }
            else
            {
                $(".cd-stretchy-nav").removeClass('lighter');
            }
        });
        
        $("body.light.dark-header .link-portfolio-one, body.light.dark-header .link-portfolio-two").on('click', function() {
            $(".cd-stretchy-nav").removeClass('lighter');
        });
        $("body.light #portfolio-items li a").on('click', function() {
            $(".cd-stretchy-nav").addClass('lighter-in-portfolio');
        });

    });
    /* ============================================================== */
    /*  LINK TO ABOUT SECTION
    /* ============================================================== */

    $(".link-portfolio-one").on("click", function(e) {
        var tabNum = $(this).index();
        var nthChild = tabNum + 3;
        $("#main > section.active").removeClass("active");
        $("#main > section:nth-child(" + nthChild + ")").addClass("active");
        $(".stretchy-nav li:first-child").removeClass("active");
        $(".stretchy-nav li:nth-child(2)").addClass("active");
        e.preventDefault();
    });


    /* ============================================================== */
    /*  BACK TO MAIN SECTION IN MOBILE
    /* ============================================================== */

    $('#back-mobile').on('click', function(e) {
        $('#main').removeClass('open');
        stop_videos();
    });	
    
})(jQuery);