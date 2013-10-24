function responsive_iframes() {

	jQuery(document).ready(function($){

		function responsiveIframe() {
		 // Fix responsive iframe
		$('iframe').each(function(){
	      var iw = $(this).width();
	      var ih = $(this).height();
	      var ip = $(this).parent().width();
	      var ipw = ip/iw;
	      var ipwh = Math.round(ih*ipw);
	      $(this).css({
	        'width': ip,
	        'height' : ipwh,
	      });
	    });
		}

	  responsiveIframe();

	  $(window).resize(function(){
	    responsiveIframe();
	  });

	});

}