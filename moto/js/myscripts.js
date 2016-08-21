/**
 * Created by Admin on 19.08.2016.
 */

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



var myDiv = document.getElementById('div_for_img');
myDiv.innerHTML = "<p><strong>Вставка свойством innerHTML</strong></p>"; //заменили код на подобный и изменения видны в браузере на странице тоже
alert(myDiv.innerHTML); // используется, когда вытаскиваем код из элемента или нужно его поменять




