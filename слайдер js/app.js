// document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0; //С let залупа не работает, почему-то. 
var timer;

function autoSlider() {
    timer = setTimeout (function() {
        var strip = document.getElementById('strip');
        left = left -128;
        if (left < -128) {
            left = 0;
            clearTimeout(timer);
        }
        strip.style.left = left +'px';
        autoSlider();
    }, 1000);
}


// function autoSlider() {
//     timer = setTimeout (sliderLeft, 1000);
// }

// function sliderLeft() {
//     var strip = document.getElementById('strip');
//     left = left -128;
//     if (left < -128) {
//         left = 0;
//         clearTimeOut(timer);
//     }
//     strip.style.left = left +'px';
//     autoSlider();
// }