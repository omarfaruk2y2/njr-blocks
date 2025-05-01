import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.njr-slider').forEach((slider) => {
        const settings = JSON.parse(slider.dataset.settings);
        new Swiper(slider, {
            ...settings,
            pagination: settings.pagination ? { el: slider.querySelector('.swiper-pagination'), clickable: true } : false,
            navigation: settings.navigation
                ? {
                    nextEl: slider.querySelector('.swiper-button-next'),
                    prevEl: slider.querySelector('.swiper-button-prev'),
                }
                : false,
        });
    });
});
