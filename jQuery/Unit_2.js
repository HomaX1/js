var textH1 = $('#main_h1').text('Текст измененный с помощью jQuery'); //вернет текст в этом элементе или же заменит как в это случае
//alert(textH1);

var myLogo = $('img[src*=logo]');

myLogo.hide(3000).show(3000); //пропадание лого за 3 секунды и показывает через 3 секунды - это цепные ф-ции



                    //ДЗ 1 - дополнительные пару способов скрытия лого

$('#forheader img').hide(3000);
$('img[width=900]').hide(3000);


                    //ДЗ 2 - цепные ф-ции

var myLink = $('#my_links a[href $= PDF]');
myLink.hide().text('Мотоцикл Yamaha FZ6').show(2000);



                    //АВТОМАТИЧЕСКИЕ ЦИКЛЫ

$('#div_for_img img').hide(3000); //вместо цикла одно действие выполняется на несколько элементов сразу

                    //ДЗ 3

$('img:not([src*=logo])').hide(5000);



                    //ИЗМЕНЕНИЯ ВЫСОТЫ И ШИРИНЫ ЭЛЕМЕНТА

var divW = $('#div_for_img').height(130).width(815); //или height() - показывает или ширину или высоту элемента или изменяет его размеры

                    //ДЗ 4

function results (element) {
    var idFull = "#" + element;
    var wElement = $(idFull).width();
    var hElement = $(idFull).height();

    $('#forresults').text('Ширина элемента: ' + wElement + ', ' + 'высота элемента: ' + hElement);
}

results('div_form_2');


                    //ИЗМЕНЕНИЯ КОДА ВНУТРИ ЭЛЕМЕНТА

$('#moto_models').html('<li>Харлей <strong>Дэвидсон</strong></li><li>Кроссовый мотоцикл</li><li>Гоночный мотоцикл</li><li>Концептуальный мотоцикл</li>');


                    //ПЛАВНОЕ ИСЧЕЗНОВЕНИЕ И ПОЯВЛЕНИЕ

$('img[src*=logo]').fadeOut(4000).fadeIn(4000); //плавное исчезновение и появление