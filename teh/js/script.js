$(document).ready(function(){ 
    $(function(){
        if ( $(window).width() > 768 ) {
            $("#fullpage").fullpage({
                navigation: false,
                slidesNavigation: false,
                controlArrows: false,
            });
        }
    });

    $('.tab__advantage_content').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.news__wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.direct__wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev_blue.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next_blue.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
});

var acc = document.getElementsByClassName("tab__item");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("tab__active");
        this.selected.classList.remove('selected');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

var acc = document.getElementsByClassName("service__item");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("service__active");
        this.selected.classList.remove('selected');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const humburger = document.querySelector('.humburger'),
        menu = document.querySelector('.humburger__menu');
        close = document.querySelector('.humburger__close');

humburger.addEventListener('click', () => {
    menu.classList.add('humburger__menu-active');
})

close.addEventListener('click', () => {
    menu.classList.remove('humburger__menu-active');
})

// const item = document.querySelector('.tab__item'),
//         content = document.querySelector('.tab__info');
//         service_close = document.querySelector('.tab__close');

// item.addEventListener('click', () => {
//     item.classList.add('tab__active');
// })

// service_close.addEventListener('click', () => {
//     item.classList.remove('tab__active');
// })