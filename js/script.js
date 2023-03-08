const items = document.querySelectorAll('.ZZZ');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

items.forEach(item => {
    observer.observe(item);
});



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

    $('section').each(function(i) {
        setTimeout(function() {
            $('section').eq(i).addClass('show');
        }, 1000 * i);
    });

});