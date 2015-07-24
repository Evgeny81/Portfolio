// Pop-up
$(document).ready(function() {
	$('#add').click(function() {
		$('#pop-up').bPopup({
			easing: 'easeOutBack', //uses jQuery easing plugin
			peed: 450,
			transition: 'slideDown'
			});
		return false
});
// Pop-up file input
$('.popup-form__input-goaway').on('change', function() {
	realVal = $(this).val();
    lastIndex = realVal.lastIndexOf('\\') + 1;
    if(lastIndex !== -1) {
      	realVal = realVal.substr(lastIndex);
         	$(this).prev('.popup-form__label-mask').find('.fileInputText').val(realVal);
			}
   	});
});

// Validation+tooltip
$('#pop-up__form').validate({
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


    if(id == "popup__project-name") {
    	qt['content'] = "Вы не ввели название";
    	qt['my'] = 'center right';
    	qt['at'] = 'left center';
    	qt['classes'] = 'myCustomClassLeft';
    }
    else if(id == "popup__project-image") {
    	qt['content'] = "Вы не выбрали изображение";
    	qt['my'] = 'center right';
    	qt['at'] = 'left center';
    	qt['classes'] = 'myCustomClassLeft';
    }
    else if(id == "popup__project-url") {
    	qt['content'] = "Вы не добавили ссылку";
    	qt['my'] = 'center right';
    	qt['at'] = 'left center';
    	qt['classes'] = 'myCustomClassLeft';
    }
    else {
    	qt['content'] ="Описание проекта обязательно";
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




