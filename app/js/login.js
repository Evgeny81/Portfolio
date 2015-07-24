// Validation+tooltip
$('#login-form').validate({
    errorPlacement: function(error, element) {
        // qTip call
        qtipFunc(element.attr('id'));
    },
    success: function(error) {
        // Hide tooltips on valid elements
        setTimeout(function() {
            $(this).find('.valid').qtip('hide');
        }, 1);
    }
});

function qtipFunc(id){

    var qt = [];

    if ($('#'+id).hasClass('valid')===false)

    $('#'+id).addClass('invalid');
else
	$('#'+id).removeClass('invalid');


    if(id === "log-name") {
    	qt['content'] = "Вы не ввели логин";
    	qt['my'] = 'center right';
    	qt['at'] = 'left center';
    	qt['classes'] = 'myCustomClassLeft';
    }
    else {
    	qt['content'] ="Вы не ввели пароль";
    	qt['my'] = 'center right';
    	qt['at'] = 'left center';
    	qt['classes'] = 'myCustomClassLeft';
    }

	$('#'+id).not('.valid').qtip({
		style: {
			classes: 'myCustomClass '+ qt['classes'],
		},
		show: {
	        ready: true
	    },
	    hide: {
        	event: 'unfocus'
    	},
		content: qt['content'],
		position: {
			my: qt['my'], // Position my top left...
			at: qt['at'], // at the bottom right of...
			target: $('#'+id) // my target
		}
	});
};

$(function() {
 $('input, textarea').placeholder({ customClass: 'my-placeholder' });
});
