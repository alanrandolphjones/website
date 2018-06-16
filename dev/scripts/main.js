const app = {};
//variables that I'll need later
app.aboutHeight = $('#anchor2').offset();
app.windowWidth = $(window).width();

//Determines whether the nav should load when the page loads based on window width.

app.initNavBar = () => {
    if (app.windowWidth < 650) {
        $('.wow').removeClass('wow');
    };

    if ($(window).scrollTop() >= app.aboutHeight.top) {
        $(".nav").addClass("notHidden");
    };
};

//Smooth scroll functionality

app.smoothScroll = () => {
    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
};

//WOW slide-in animations

app.wowAnimations = () => {
    new WOW({
        offset: 100
    }).init();
}

//Checks window height and modifies nav accordingly
app.checkWindowHeight = () => {
    const $scrollTop = $(window).scrollTop();

    for (let i = 1; i < 5; i++) {
        const $anchorTop = $('#anchor' + i).offset().top;

        const bottomIndex = i + 1;

        const $anchorBottom = $('#anchor' + bottomIndex).offset().top;

        if (i === 1) {
            $('.nav__link--active').removeClass('nav__link--active')
        }
        else if ($scrollTop > $anchorTop - 200 && $scrollTop < $anchorBottom - 200) {
            $('.nav__link--active').removeClass('nav__link--active')
            $('.anchor' + i).addClass('nav__link--active')
        }
        else if ($scrollTop > $('#anchor5').offset().top - 200) {
            $('.nav__link--active').removeClass('nav__link--active')
            $('.anchor5').addClass('nav__link--active')

        };

    };

    if ($scrollTop >= app.aboutHeight.top - 200) {
        $(".nav").addClass("notHidden");
    }
    else {
        $(".nav").removeClass("notHidden");
    };
}

//Tells the Nav to open and/or close depending on scroll position / allows tabs to darken on scroll action.

app.scrollEvents = () => {
    $(window).scroll(function () {
        setTimeout(function () { 
            app.checkWindowHeight();
        }, 400);
    });
}

//Hamburger Nav, baby

app.mobileNav = () => {
    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('.nav__ul, .nav').toggleClass('show');
    });

    $('a').click(function () {
        $('.show').removeClass('show')
        $('#nav-icon4').removeClass('open');
    });

    $(window).on('resize', function (event) {
        var windowWidth = $(window).width();
        if (windowWidth > 940) {
            $('.show').removeClass('show')
            $('#nav-icon4').removeClass('open');
        }
    });
}

app.init = () => {
    app.initNavBar();
    app.checkWindowHeight();
    app.smoothScroll();
    app.wowAnimations();
    app.scrollEvents();
    app.mobileNav();
}

$(app.init)