function initApp(){
$(document).ready(function(){

    /* Scroll hire me button to contact page */
    $('.hire-me').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    /* For Bootstrap current state on skill sorting */

    $('ul.nav-pills li a').click(function(e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })



    /* Magnific Popup */
    $('.portfolio-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });


    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });


    /* VEGAS Home Slider */
	
	    $('#page-welcome').vegas({
        slides: [
            { src: 'img/slider/01.jpg' },
            { src: 'img/slider/02.jpg' },
            { src: 'img/slider/03.jpg' },
			{ src: 'img/slider/04.jpg' }
        ],
        overlay: true
    });

    $("#vegas-next").click(function() {
        $('#page-welcome').vegas('next');
    });
    $("#vegas-prev").click(function() {
       $('#page-welcome').vegas('previous');
    });



        /* portfolio mixitup */

        $('.grid-wrapper-skill').waypoint(function() {
            $('.chart').easyPieChart({
            barColor: '#2ecc71',
            size: '150',
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });

         var $container = $('.grid-wrapper-skill');
            $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
                }
             });


        $('.grid-controls li a').click(function() {
            $('.grid-controls .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
        
    }, {
        triggerOnce: true,
        offset: '50%'
    });

})



}
