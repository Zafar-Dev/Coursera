$(document).ready(() => {

    var p = 0;
    var p2 = 0;
    var p3 = 0;
    var tSlides = $('.slider-container li').length;
    var sWidth = $('.section-slider').width();

    $('.right').click(function () {
        slideRight();

    });
    $('.left').click(function () {
        slideLeft();

    });

    var x = window.matchMedia("(max-width: 768px)");
    changeInwidth(x);
    x.addListener(changeInwidth);


    function changeInwidth(x) {
        if (x.matches) {
            tSlides = 5;

        }
    }

    function slideRight() {
        console.log(tSlides);
        p++;
        if (p == tSlides) {
            p = 0;
        }
        $('.slider-container').css('left', -(sWidth * p));
    }

    function slideLeft() {
        p--;
        if (p == -1) {
            p = tSlides - 1;
        }
        $('.slider-container').css('left', -(sWidth * p));
    }

    //    ============ Upcoming Phones ==========
    $('.up_right').click(function () {
        up_slideRight();
    });
    $('.up_left').click(function () {
        up_slideLeft();
    });

    function up_slideRight() {
        console.log(tSlides);
        p2++;
        if (p2 == tSlides) {
            p2 = 0;
        }
        $('.slider-container2').css('left', -(sWidth * p2));
    }

    function up_slideLeft() {
        p2--;
        if (p2 == -1) {
            p2 = tSlides - 1;
        }
        $('.slider-container2').css('left', -(sWidth * p2));
    }


    //    ================ News Section =========
    $('.News_right').click(function () {
        News_slideRight();
    });
    $('.News_left').click(function () {
        News_slideLeft();
    });

    function News_slideRight() {
        console.log(tSlides);
        p3++;
        if (p3 == tSlides) {
            p3 = 0;
        }
        $('.slider-container-News').css('left', -(sWidth * p3));
    }

    function News_slideLeft() {
        p3--;
        if (p3 == -1) {
            p3 = tSlides - 1;
        }
        $('.slider-container-News').css('left', -(sWidth * p3));
    }

});
