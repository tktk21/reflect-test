$(document).ready(function () {
	
	/**Added to hide  the 2nd menubar**/
	$('.mm-ocd #menu').css("display", "none");
	$('.mm-ocd #menu').hide();
	
    $('#gift').click(function () {
        $('.gift').slideToggle(300);
        $('.gift2').slideUp(300);
        $('.diary').slideUp(300);
        $('.diary2').slideUp(300);
    });
    $('#gift2').click(function () {
        $('.gift').slideToggle(300);
        $('.gift2').slideUp(300);
        $('.diary').slideUp(300);
        $('.diary2').slideUp(300);
    });
    $('.giftheader p').click(function () {
        $('.gift').slideUp(300);
    });
    $('.giftheader2 p').click(function () {
        $('.gift2').slideUp(300);
    });
    $('#diary').click(function () {
        $('.diary').slideToggle(300);
        $('.diary2').slideUp(300);
        $('.gift').slideUp(300);
        $('.gift2').slideUp(300);
    });
    $('.diaryheader p').click(function () {
        $('.diary').slideUp(300);
    });
    $('.diaryheader2 p').click(function () {
        $('.diary2').slideUp(300);
    });    
    $('#diary2').click(function () {
        $('.diary').slideToggle(300);
        $('.diary2').slideUp(300);
        $('.gift').slideUp(300);
        $('.gift2').slideUp(300);
    });
});