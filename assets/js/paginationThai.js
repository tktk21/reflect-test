
var counter = 0;
var pageUrl1 =  'https://datastudio.google.com/embed/reporting/1schv8qnFQc17A4QIJFPJ91gJCO5bsZAK/page/Pg5QB'; //Page1
var pageUrl2 =  'https://datastudio.google.com/embed/reporting/1schv8qnFQc17A4QIJFPJ91gJCO5bsZAK/page/L0hVB'; //Condition Trend
var pageUrl3 =  'https://datastudio.google.com/embed/reporting/1schv8qnFQc17A4QIJFPJ91gJCO5bsZAK/page/ZSsPB'; //Reflection Trend
var pageUrl4 =  'https://datastudio.google.com/embed/reporting/1schv8qnFQc17A4QIJFPJ91gJCO5bsZAK/page/PJtPB'; //Work Styles Survey

$(document).ready(function () {
	/**Added to hide  the 2nd menubar**/
	$('.mm-ocd #menu').css("display", "none");
	$('.mm-ocd #menu').hide();
    $('.page1').removeClass('hidetitle');
    $('.embedsrc').attr('src', pageUrl1);

});

$(document).ready(function () {
    $('.next').click(function () {
        if (counter === 0) {
            $('.page1').addClass('hidetitle');
            $('.page2').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl2);
            $('.dropdown').hide();
            counter++;
            console.log(counter);
        } else if (counter === 1) {
            $('.page2').addClass('hidetitle');
            $('.page3').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl3);
            counter++;
            console.log(counter);
        } else if (counter === 2) {
            $('.page3').addClass('hidetitle');
            $('.page4').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl4);
            counter++;
            console.log(counter);
        }
    })
});
$(document).ready(function () {
    $('.previous').click(function () {
        if (counter === 3) {
            $('.page4').addClass('hidetitle');
            $('.page3').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl3);
            counter--;
            console.log(counter);
        } else if (counter === 2) {
            $('.page3').addClass('hidetitle');
            $('.page2').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl2);
            counter--;
            console.log(counter);
        } else if (counter === 1) {
            $('.page2').addClass('hidetitle');
            $('.page1').removeClass('hidetitle');
            $('.embedsrc').attr('src', pageUrl1);
            $('.dropdown').show();
            counter--;
            console.log(counter);
        }
    })
});

$(document).ready(function () {
    $('#menuPage1').click(function () {
            $('.embedsrc').attr('src', pageUrl1);
    });
});
$(document).ready(function () {
    $('#menuPage2').click(function () {
            $('.embedsrc').attr('src', pageUrl2);
    });
});
$(document).ready(function () {
    $('#menuPage3').click(function () {
            $('.embedsrc').attr('src', pageUrl3);
    });
});
$(document).ready(function () {
    $('#menuPage4').click(function () {
            $('.embedsrc').attr('src', pageUrl4);
    });
});