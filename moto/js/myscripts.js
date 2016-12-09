$(document).ready(function() {


//СЛАЙД-ШОУ

    var textGallery = $('#textGallery');
    var myGallery = $('#gallery');

    var trigger = false;

    textGallery.click(function() {
        myGallery.slideToggle();

        trigger = !trigger;

        if(trigger){
            $(this).text('Развернуть галерею');
        }
        else {
            $(this).text('Свернуть галерею');
        }
    });

var bigImage = $('#big img');


    $('#small a').click(function(eventObject) {
        var srcBigImg = bigImage.attr('src');
        var srcSmallImg = $(this).attr('href');

        eventObject.preventDefault();

        console.log(srcBigImg, srcSmallImg);

            if(srcBigImg !== srcSmallImg) {
                $('#small a').css({'border': 'none'});
            bigImage.hide().attr('src',$(this).attr('href'));
            bigImage.fadeIn();
            $(this).css({'border': '2px solid red'});
        } else {
            return false;
        }



    });





});//означает, что все скрипты будут выполнятся после готовности всей страницы, короткая версия $(function() {});
//Конец ready



