$(document).ready(() => {
    var pos = 0;
    var totalSlides = $('#slider-wrap ul li').length;
    var sliderWidth = $('#slider-wrap').width();
    $('#slider-wrap').hover(
        function () {
            $(this).addClass('active');
            clearInterval(autoSlider);
        },
        function () {
            $(this).removeClass('active');
            autoSlider = setInterval(slideRight, 3000);
        });


//    $('#slider-wrap ul#slider').width(sliderWidth * totalSlides);

    var autoSlider = setInterval(slideRight, 3000);
    $.each($('#slider-wrap ul li'), function () {
        //create a pagination
        var li = document.createElement('li');
        $('#pagination-wrap ul').append(li);
    });

    pagination();

    //next slide 	
    $('#next').click(function () {
        slideRight();

    });

    //previous slide
    $('#previous').click(function () {
        slideLeft();
    });

    /***********
    SLIDE LEFT
    ************/
    function slideLeft() {
        pos--;
        if (pos == -1) {
            pos = totalSlides - 1;
        }
        $('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

        //*> optional
        pagination();
    }


    /************
     SLIDE RIGHT
    *************/
    function slideRight() {
        pos++;
        if (pos == totalSlides) {
            pos = 0;
        }
        $('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

        //*> optional 
        pagination();
    }

    function pagination() {
        $('#pagination-wrap ul li').removeClass('active');
        $('#pagination-wrap ul li:eq(' + pos + ')').addClass('active');
    }






});
