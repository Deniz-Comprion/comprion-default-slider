window.addEventListener("DOMContentLoaded", (event) => {

    let toggler = document.getElementById("nav-toggler");
    let header = document.getElementById("header");
    let menuToggler = document.querySelector(".menu-toggler-container");

    function navToggler() {
        toggler.classList.toggle("is-active");
        header.classList.toggle("nav-open");
        menuToggler.classList.toggle("menu-toggler-container-active")
    }
    
    toggler.addEventListener("click", navToggler);


    function getAllslidesAndCreateSliderDots() {
        const dotContainer = document.querySelector("#slider-dots-container");
        const sliderslides = document.querySelectorAll(".slide-link");

        for (let i = 0; i < sliderslides.length; i++) {
            dotContainer.innerHTML += '<div class="slider-dot"></div>'
        }
    }

    getAllslidesAndCreateSliderDots();


    function walkThroughSlides() {
        const SliderDots = document.querySelectorAll(".slider-dot");
        const Sliderslides = document.querySelectorAll(".slide-link")
        let dotCounter = 0;
        SliderDots[dotCounter].classList.add("slider-dot-active");

        function deactiveAllSlidesAndDots() {
            SliderDots.forEach(function (dot) {
                dot.classList.remove("slider-dot-active");
            });
            Sliderslides.forEach(function (slide) {
                slide.classList.remove("slide-active");
            });
        }

        function activateNextSlideAndDot() {
            deactiveAllSlidesAndDots();
            dotCounter = (dotCounter + 1) % SliderDots.length;
            SliderDots[dotCounter].classList.add("slider-dot-active");
            Sliderslides[dotCounter].classList.add("slide-active");
        }

        setInterval(activateNextSlideAndDot, 4000);
    }

    walkThroughSlides();
});