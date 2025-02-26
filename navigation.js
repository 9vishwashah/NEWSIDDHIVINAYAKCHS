$(document).ready(function () {
    // Sticky Navbar on Scroll
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up button click
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu item click
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle Menu / Navbar for Mobile
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("fa-times"); // Toggle menu icon
    });

    // Close menu when clicking outside of it
    $(document).click(function (event) {
        if (!$(event.target).closest('.navbar, .menu-btn').length) {
            $('.navbar .menu').removeClass("active");
            $('.menu-btn i').removeClass("fa-times");
        }
    });

    // Typing Animation
    var typed = new Typed(".typing", {
        strings: ["SAMPLE PAPER", "MODEL ANSWER", "SYLLABUS", "MANUALS", "PREVIOUS YEAR QUESTION PAPER"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["SAMPLE PAPER", "MODEL ANSWER", "SYLLABUS", "MANUALS", "PREVIOUS YEAR QUESTION PAPER"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel Initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
