$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight: true
	});
	$("#topnav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
    
	$('#buttonUp').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});
});

$(window).scroll(function(){
	if ($(this).scrollTop() > 500) {
		$('#buttonUp').fadeIn();
	}
	else{
		$('#buttonUp').fadeOut();
	}
});

$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		$('main').css('filter', 'none');
	}
});