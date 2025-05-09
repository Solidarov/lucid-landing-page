const testemonialsSwiper = new Swiper(".testemonials-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".testemonials-pagination",
        clickable: true,
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active'
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
    loop: true,
    
});