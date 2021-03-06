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

function hidden (element, time) {
    var idElem = "#" + element;

    if(typeof time == "number" || time > 500 || time < 10000) {

        $(idElem).fadeOut(time);
    }else{
        return false;
    }
}

hidden('moto_models', 3000);


                    //ФУНКЦИЯ fadeTo()

$('img[src*=logo]').fadeTo(4000, 0.1).fadeTo(4000, 1); // параметры: время исчезновения, степень исчезновения


                    //ФУНКЦИЯ slideDown(), slideUp

$('img[src*=logo]').slideUp(4000).slideDown(4000);



                    //ФУНКЦИЯ attr(), removeAttr()

var fooHeight = $('img[src*=footer]').attr('height');

$('#forresults').text("Высота футера: " + fooHeight);

$('#motoSelect').attr('size', 4); // изменили атрибут size с 1 на 4

$('#moto_table').removeAttr('title').attr('title', 'Новое значение'); //удаляем атрибут, а затем добавляем туда новый



                    //ДЗ 5 - ф-ция с тремя переменными, которая меняет атрибут


function attributes(element, attribute, newAttribute) {

    var fullId = "#" + element;
    $(fullId).attr(attribute, newAttribute);
}

attributes('daysSelect', 'size', 2);



                    //ФУНКЦИЯ addClass(), removeClass()

$('#div_for_img + p').addClass('new'); //добавляем класс со свойствами

$('#moto_table').removeClass('mototable'); //удаляем класс со всеми его свойствами



                    //ФУНКЦИЯ css()

var textSize = $('#main_h1').css('color', '#3F4078').css('font-size', '19px'); //выбрали свойство CSS и поменяли его на синий цвет и затем взяли еще одно свойство и поменяли его
//ИЛИ
/*$('#main_h1').css({
 'color':'#3F4078',
 'font-size':'19px'
 }); - литерал объекта */

//alert(textSize);



                    //ДЗ 6 - удалить класс и добавить за раз три css свойства со значениями

$('#my_h3 span').removeClass('pg').css({
    'border': '1px solid #cc0000',
    'padding': '5px',
    'background-color': '#f6f6f6'
});




                    //метод animate()

/*$('#div_for_img').css({'border': '2px solid #cc0000'}).animate({'width': '450px'}, 4000, function(){
 alert('Готово');
 });*/ //уменьшили ширину блока с мотоциклами за 4 сек. и вывели алерт

$('#main_h1').css({'border': '2px solid #cc0000' }).animate({'paddingTop': '70px'}, 5000); //padding-top в методе animate и все что через дифис пишется без пробела и второе слово с большой буквы



                    //ДЗ 7

$('#div_for_img img[alt*= 2]').css({'border': '1px solid #333333'}).animate({'borderWidth': '5px'}, 5000).fadeOut(5000);



                    //ФУНКЦИИ append(), prepend(), before(), after()

var myDiv = $('#div_for_img').css({'border': '2px solid #cc0000'});

myDiv.before('<p>Данный абзац вставлен с помощью метода before()</p>');

myDiv.after('<p>Данный абзац вставлен с помощью метода after()</p>');

//код до картинок - вначале елементов

myDiv.prepend('<p>Данный абзац вставлен с помощью метода prepend()</p>');

//код после картинок - после елементов

myDiv.append('<p>Данный абзац вставлен с помощью метода append()</p>');




                    //ДЗ 8

$('body').append('<p id="newparagraph">Данный абзац вставлен с помощью метода append()</p>');
$('#newparagraph').css({
    'background-color': '#000000',
    'color': '#ffffff'
});




                    //ФУНКЦИИ each() и понятие $(this)

$('img').each(function() {
    if($(this).width() > 400) {      //$(this) - текущий, в данном случае данная (первая) картинка

        $(this).fadeOut(3000); //исчезнет через 3 секунды

    }
});


                    //ДЗ 9

$('img[title*=т]').each(function() {
    if($(this).height() > 50 && $(this).height() < 100) {
        $(this).css({'border': '1px solid red'})
    }
});


                    //ФУНКЦИИ size() и доступ к елементам выборки


myDiv = $('div').size(); //количество div  в проекте, как length в js

alert(myDiv);


 myDiv = $('div').get(0); // получает первый div
 alert(myDiv);



                    //ФУНКЦИИ clone() и remove()

var myDiv = $('#div_for_img').clone(); // клонирывали картинки
 $('#my_form').after(myDiv);


var myForm = $('#my_form').remove(); //удалили
$('#moto_table').before(myForm);//а сюда перенесли



                    //ДВА ПОЛЕЗНЫХ СОВЕТА


//в один набор добавляем разнотипные елементы

$('img[width=200], a[href*=documents]').fadeOut(5000);


//отобрать елемент по наличию атрибута

$('img[alt]'); // найти все картинки с атрибутом alt
