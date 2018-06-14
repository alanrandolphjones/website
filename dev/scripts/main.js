$(function(){

    var windowWidth = $(window).width();

    if (windowWidth < 650) {
        $('.wow').removeClass('wow');
    }

    if ($(window).scrollTop() >= 300) {
        $(".nav").addClass("notHidden");
    }

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    new WOW({
        offset: 100
    }).init();

    $(window).scroll(function () {
        var scroll_top = $(this).scrollTop();
        
        if (scroll_top >= 300) {
            $(".nav").addClass("notHidden");
        } else {
            $(".nav").removeClass("notHidden");
        }
    });

    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('.nav__ul, .nav').toggleClass('show');
    });

    $('a').click(function () {
        $('.show').removeClass('show')
        $('#nav-icon4').removeClass('open');
    })

    $(window).on('resize', function (event) {
        var windowWidth = $(window).width();
        if (windowWidth > 940) {
            // $('.nav__ul, nav').width('150px')
            $('.show').removeClass('show')
            $('#nav-icon4').removeClass('open');
        }
    });

})