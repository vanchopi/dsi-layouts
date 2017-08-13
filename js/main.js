$(document).ready(function(){
	console.log('on load');

	var tm_height = $('.menu-top').height() + 15;
	console.log('tm_height',tm_height);
	var z_mrg = 0;

	$(window).scroll(function(){
		var top = $(this).scrollTop();
		var elem = $('.top-line-wrp');
		var sb = $('#sidebar .toggle');
		if(top + z_mrg < tm_height){
			elem.removeClass('fxd');
			sb.removeClass('fxd_sb')
			elem.css('top',(tm_height - top));
		}else{
			elem.css('top',z_mrg);
			sb.addClass('fxd_sb');
			elem.addClass('fxd');
		}
	})

	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
})

