$(document).ready(() => {
    $(".ini").click(function(e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: 10
        }, 1200);

    });

    $(".proj").click(function(e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: 800
        }, 1200);

    });

    $(".sobre").click(function(e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: 1500
        }, 1200);

    });

});