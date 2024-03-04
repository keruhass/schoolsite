let offset = 0;
const sliderLine = document.querySelector('.main-aside-5-slider-line');

document.getElementById("btn0").style.backgroundColor = 'rgb(167, 167, 167)';

// Выполнение действий по нажатию кнопки "вперед"

document.querySelector('.slider-next').addEventListener('click', function(){

    for (let i = 0; i <= 6; i++) {
        document.getElementById(`btn${i}`).style.backgroundColor = 'white';
    }

    offset = offset + 352;

    if (offset > 2112) {
        offset = 0;
    }

    sliderLine.style.left = -offset + 'px';
    
    switch(offset) {

        case(0):
            document.getElementById("btn0").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(352):
            document.getElementById("btn1").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(704):
            document.getElementById("btn2").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(1056):
            document.getElementById("btn3").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(1408):
            document.getElementById("btn4").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(1760):
            document.getElementById("btn5").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(2112):
            document.getElementById("btn6").style.backgroundColor = 'rgb(167, 167, 167)';
            break
    }

});

// Выполнение действий по нажатию кнопки "назад"

document.querySelector('.slider-prev').addEventListener('click', function () {

    for (let i = 0; i <= 6; i++) {
        document.getElementById(`btn${i}`).style.backgroundColor = 'white';
    }

    offset = offset - 352;

    if (offset < 0) {
        offset = 2112;
    }
    sliderLine.style.left = -offset + 'px';

    switch(offset) {
        case(0):
            document.getElementById("btn0").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(352):
            document.getElementById("btn1").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(704):
            document.getElementById("btn2").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(1056):
            document.getElementById("btn3").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(1408):
            document.getElementById("btn4").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(1760):
            document.getElementById("btn5").style.backgroundColor = 'rgb(167, 167, 167)';
            break
        case(2112):
            document.getElementById("btn6").style.backgroundColor = 'rgb(167, 167, 167)';
            break
    }


});