$(document).ready(function() {

	$('body').css('display', 'none');
	$('body').fadeIn(300);

	$('#myflowthumb').hover(function() {
        $('#mftext').stop(true, true).fadeToggle(300);
        $('#mfoverlay').stop(true, true).fadeToggle(200);
    }, function() {
        $('#mftext').stop(true, true).fadeToggle(300);
        $('#mfoverlay').stop(true, true).fadeToggle(200);
    });

    $('#amazonthumb').hover(function() {
        $('#aztext').stop(true, true).fadeToggle(300);
        $('#azoverlay').stop(true, true).fadeToggle(200);
    }, function() {
        $('#aztext').stop(true, true).fadeToggle(300);
        $('#azoverlay').stop(true, true).fadeToggle(200);
    });

    $('#exchangethumb').hover(function() {
        $('#extext').stop(true, true).fadeToggle(300);
        $('#exoverlay').stop(true, true).fadeToggle(200);
    }, function() {
        $('#extext').stop(true, true).fadeToggle(300);
        $('#exoverlay').stop(true, true).fadeToggle(200);
    });

    $('#canvasthumb').hover(function() {
        $('#cvtext').stop(true, true).fadeToggle(300);
        $('#cvoverlay').stop(true, true).fadeToggle(200);
    }, function() {
        $('#cvtext').stop(true, true).fadeToggle(300);
        $('#cvoverlay').stop(true, true).fadeToggle(200);
    });

    $('#caltaikothumb').hover(function() {
        $('#cttext').stop(true, true).fadeToggle(300);
        $('#ctoverlay').stop(true, true).fadeToggle(200);
    }, function() {
        $('#cttext').stop(true, true).fadeToggle(300);
        $('#ctoverlay').stop(true, true).fadeToggle(200);
    });

});