$(document).ready(function() {

    $.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
    }

    $(['../Design-Portfolio/static/images/newsbitebanner.png','../Design-Portfolio/static/images/laughlybanner.png',
        '../Design-Portfolio/static/images/eat24banner.png', '../Design-Portfolio/static/images/newsbiteheader.png',
        '../Design-Portfolio/static/images/laughlyheader.png', '../Design-Portfolio/static/images/eat24header.png']).preload();

	$('body').css('display', 'none');
	$('body').fadeIn(350);

    $('#newsbitethumb').hover(function() {
        $('#nbtext').stop(true, true).fadeToggle(300);
        $('#nboverlay').stop(true, true).fadeToggle(200);
    }, function() {
        $('#nbtext').stop(true, true).fadeToggle(300);
        $('#nboverlay').stop(true, true).fadeToggle(200);
    });

    $('#laughlythumb').hover(function() {
        $('#lltext').stop(true, true).fadeToggle(300);
        $('#lloverlay').stop(true, true).fadeToggle(200);
    }, function() {
        $('#lltext').stop(true, true).fadeToggle(300);
        $('#lloverlay').stop(true, true).fadeToggle(200);
    });

    $('#eat24thumb').hover(function() {
        $('#e2text').stop(true, true).fadeToggle(300);
        $('#e2overlay').stop(true, true).fadeToggle(200);
    }, function() {
        $('#e2text').stop(true, true).fadeToggle(300);
        $('#e2overlay').stop(true, true).fadeToggle(200);
    });

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