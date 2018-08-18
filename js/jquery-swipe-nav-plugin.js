jQuery(document).ready(function($){
	$.fn.swipeNav = function(options) {
		var options = $.extend( {
			menu : this,
			menuBtn : $('#menuBtn'),
			body : $(document.body),
			menuSpeed : 300,
		}, options);

		var menuWidth = options.menu.width();
		$(document.body).css({
			'overflow-x' : 'hidden',
			'position': 'relative',
			'left' : 0,
		});
		options.menu.css({
			'position' : 'fixed',
			'top' : 0,
			'left': - menuWidth + 'px',
			'width': + menuWidth + 'px',
			'height' : 100 + '%',
		});
		options.menuBtn.on('click',function(){
		    options.body.toggleClass('open');
	        if(options.body.hasClass('open')){
	            options.body.animate({'left' : menuWidth }, options.menuSpeed);
	            options.menu.animate({'left' : 0 }, options.menuSpeed);
	        } else {
	            options.menu.animate({'left' : -menuWidth }, options.menuSpeed);
	            options.body.animate({'left' : 0 }, options.menuSpeed);
	        }
	    });
    }
});