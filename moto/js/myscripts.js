$(document).ready(function() {




}); //означает, что все скрипты будут выполнятся после готовности всей страницы, короткая версия $(function() {});

//Конец ready

/*
var allImg = document.getElementsByTagName('img'); //выбераем элементы по их названию, которые есть на сайте
alert("Всего картинок: " +  allImg.length);*/


//выбор элемента по его конкретному идентификатору

/*var moto = document.getElementById('img_1');
alert(moto.alt);*/



//доступ к потомкам объекта

/*var myDiv = document.getElementById('div_for_img'); // Js пробелы считает за текст, по-этому вначале выбивало underfind, но убрав их, все норм
var childDiv = myDiv.childNodes;
for (var i = 0; i < childDiv.length; i++) {
    alert(childDiv[i].alt);
}*/



//свойство связанное с родителем

/*var myDiv = document.getElementById('div_for_img');
var parentDiv = myDiv.parentNode;
alert(parentDiv.id);*/



//свойства связанные с братьями

/*var myDiv = document.getElementById('div_for_img');
var brotherDiv = myDiv.nextSibling; // следующие брат, если же нужен предыдущий, то пишем previous вместо next
alert(brotherDiv);*/



// доступ к тексту объекта

/*var mainHeader = document.getElementById('main_h1');
alert(mainHeader.innerText); //или используем textContent*/



/*var myDiv = document.getElementById('div_for_img');
myDiv.innerHTML = "<p><strong>Вставка свойством innerHTML</strong></p>"; //заменили код на подобный и изменения видны в браузере на странице тоже
alert(myDiv.innerHTML);*/ // используется, когда вытаскиваем код из элемента или нужно его поменять






//JQUERY

jquery(); // или $(); тоже самое - появление новой ф-ции



// ОТБОР элементов со страницы - как в CSS, то что идет до скобок - это селектор по названию тега, селектор по классу, селектор по идентификатору

$('p'); //вытаскиваем все абзацы
$('#main_h1'); //вытаскиваем идентификаторы
$('.maindiv'); //вытаскиваем классы


$('p strong'); //вытаскиваем все strong в теге р
$('#main_h1 + p');// выбор следующего тега
$('#div_for_img > img ');// выбор дочерних тегов


$('img[width = 200]'); // выбирать по точным значениям атрибута,к примеру все картинки с шириной 200 пикслей
$('a[href ^= http]'); //выборка по начальному значению атрибута, знак ^ - это начало строки
$('img[src $= .jpg]'); //выборка по последнему значению атрибута, знак $ - это коекц страницы, * - в любом месте

$('img[src *= moto]');//в атрибуте есть значениие в любом месте




//ФИЛЬТРАЦИЯ ВЫБОРОК

$('#moto_table tr:eve');//выбор нечетных в нашем понимании(1,3)
$('#moto_table tr:odd');//выбор четных строк в нашем понимании (2,4), even - четность, odd - нечетность
$('img:not(#div_for_img img)');// выборка все картинок на странице кроме (not) тех что находится в div_for_img
$('div:has(fieldset)'); //фильтр эелементор, которые содержат другие элементы, выбираем такие div, что имеют в себе fieldset
$('p:contains(мотоцикл)'); //фильтр по содержанию определенного текста, те абзацы, которые содержат слово "мотоцикл"
$('#div_for_img img:first'); //фильтр первого элемента
$('#div_for_img img:last');//фильтр последнего элемента
$('div:hidden'); //фильтры, которые выбирают только скрытые элементы
$('div:visibility'); // -//- видимые элементы

