jQuery(document).ready(function($){
    "use strict";
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        auto: true,
        mode: 'fade',
        speed: 500,
        controls: false,
        responsive: true,   
        nextText: '',
        prevText: '',
    });
});