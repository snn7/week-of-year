(function($) {
	$.fn.weekOfYear = function(){

		var d = new Date();
		d.setHours(0,0,0,0);
		d.setDate(d.getDate()+4-(d.getDay()||7));
		var result = Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);

		$(this).val(result);
		
	} 
})(jQuery);