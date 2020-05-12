$(document).ready(function () {

    var count = 1;
    var menucount = 1;
    var $compare = $('#nav-menu-compare');
    var $ddmenu = $('.sub-menu');
    var $menuopen = $('.menu-icon');

//    Main Menu 
    function changeInwidth(x) {
        if (x.matches) { 
            $('.main-menu > ul').css('display', 'block');
            $('.menu-icon i').removeClass('fa-times');
            $('.menu-icon i').addClass('fa-bars');
            menucount = 1;
        }
        else
            $('.main-menu > ul').css('display', 'none');
    }

    var x = window.matchMedia("(min-width: 768px)");
    changeInwidth(x); 
    x.addListener(changeInwidth);

    $compare.click(() => {
        if (count == 1) {
            $compare.css({
                'background-color': '#e5eff5',
            });
            $('.pointer-down').css('transform', 'rotate(180deg)');
            $ddmenu.slideDown();
            $compare.slideDown();
            count++;
        } else {
            $compare.css({
                'background-color': '#ffffff',
            });
            $('.pointer-down').css('transform', 'rotate(0deg)');
            $ddmenu.slideUp();
            count = 1;
        }

    });
    $compare.mouseleave(() => {
        $compare.css('background-color', '#ffffff');
        $('.pointer-down').css('transform', 'rotate(0deg)');
        $ddmenu.slideUp();
        count = 1;
    });

    $menuopen.on('click', () => {
        $('.main-menu > ul').slideToggle();

        if (menucount == 1) {
            $('.menu-icon i').removeClass('fa-bars');
            $('.menu-icon i').addClass('fa-times');
            menucount++;
        } else {
            $('.menu-icon i').removeClass('fa-times');
            $('.menu-icon i').addClass('fa-bars');
            menucount = 1;
        }

    });


});
