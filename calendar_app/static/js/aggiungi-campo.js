'use strict';

(function( $ ) {
	$('input[name="field_type"]').on('change', function(){
		var v = $(this).val();
		$('div[data-radio]').hide();
		$('div[data-radio="'+v+'"]').show();
	});
})( jQuery );