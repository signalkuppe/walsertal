jQuery(document).ready(function($){
	"use strict";
	$('#md-slide-fade').bxSlider({
		auto: true,
		mode: 'fade',
		speed: 500,
		pager: false,
		controls: true,
		responsive: true,	
		nextText: '',
		prevText: '',
		onSliderLoad: function(){
			$('.bx-prev').html('<i class="icon icon-previous"></i>'); 
			$('.bx-next').html('<i class="icon icon-next"></i>');
		}
	});

	$("#arrival-date, #departure-date").datepicker({});

});