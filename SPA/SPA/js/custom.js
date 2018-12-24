$(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop() < 55) {
			$('.home .navbar-fixed-top').removeClass('home-navbar-fixed');
		}else{
			$('.home .navbar-fixed-top').addClass('home-navbar-fixed');
		}
	});
});