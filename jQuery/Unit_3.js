                    //СОБЫТИЯ МЫШИ, КОТОРЫЕ ОТСЛЕЖИВАЮТСЯ БРАУЗЕРОМ


mouseover // событие, когда пользователь НАВОДИТ на елемент
mouseout //увод мыши с елемента
click // клик левой кнопкой мыши
dblclick //двойной щелчек мыши
mousemove //передвижение мыши
mousedown //нажали мышь, но не отпускаете
mouseup //отпускаете мышь после клика



                    //СОБЫТИЯ С ФОРМАМИ


submit //отправка формы
focus //фокусирование в определенных областях
blur //уходим с поля, убирается фокус
change //изменение
reset //сброс формы
keypress //реакция на клавиатуру, при нажатии на клавиши
keydown //нажатие на клавиши, не отпуская
keyup //опускаем клавишу после нажатия



                    //СОБЫТИЯ ОКНА БРАУЗЕРА


load // ксобытие, когда брайзер запустил и все загружено с сервера
resize //меняется ширина окна браузера
scroll //прокрутка страницы с помощью мыши или сбоку в браузере
unload //выгрузка, когда закрываем страницы или переходим на другую страницу



// накладываем событие на объект либо в html коде как onclick="alert('тест')" или в js


 var myMoto = document.getElementById('img_1'); //объект
 function motoClick() { //действие
 alert("Ширина данной картинки: " + myMoto.width);
 }
 myMoto.onclick = motoClick(); //событие, к событию добавляется приставка on



                    //jQuery модель событий


$('#forheader img').click(function() {
    alert('Вы кликнули по шапке');
});


$(window).scroll(function() {
    alert('Произошло событие прокрутки');
});



                    //Кликаем на мото и он же появляется в другом месте


$('#div_for_img img').click(function() {
    var moto = $(this).clone();
    $('#forresults').append(moto);
});



                    //ДЗ 1

                    $('#moto_models li').click(function() {
                        var myText = $(this).text();
                        $('#moto_table tbody').append('<tr><td>' + myText + '</td><td>25000</td></tr>');
                    });



                    //ДЗ 2

                    var tableStr = $('#moto_table tr');

                    tableStr.mouseover(function() {
                        $(this).addClass('light');
                    });

                    tableStr.mouseout(function() {
                        $(this).removeClass('light');
                    });




                    //jQuery собитий hover() и toggle()

                    $('#moto_table tr').hover(function() { //при наведении действует первая ф-ция, при увода мыши - вторая
                        $(this).addClass('light');
                    }, function() {
                        $(this).removeClass('light');
                    });


                    $('#formHide').toggle(function() { // при клике на текст
                        $('#my_form').fadeOut(1000);
                        $(this).text('Развернуть форму');
                    }, function() {
                        $('#my_form').fadeIn(1000);
                        $(this).text('Свернуть форму');
                    });



                    //ДЗ 3

                    $('#my_button').hover(function() {
                        $(this).css({'background-color': '#32375D', 'color': '#ffffff'});
                    }, function() {
                        $(this).css({'background-color': '#f6f6f6', 'color': '#2C2C2C'});
                    });


                    $('#moto_table tbody tr').toggle(function() {
                        $(this).addClass('forTr');
                    }, function() {
                        $(this).removeClass('forTr');
                    });




                    //Понятие объекта события

                    $('#div_for_img').click(function(eventObject) {//или (е) // узнать в каком месте экрана монитора произошел щелчек
                        alert('Координата щелчка по оси Х: ' + eventObject.screenX);
                    });

                    // pageX, pageY - место щелчка в браузере
                    // altKey - (true/false) была ли нажата клавиша alt в момент щелчка
                    // ctrlKey - (true/false) была ли нажата клавиша ctrl в момент щелчка
                    // shiftKey - (true/false) была ли нажата клавиша shift в момент щелчка


                    // target - какой объект отреагировал на событие

                    $('#div_for_img').click(function(eventObject) {
                        var myObject = eventObject.target;
                        alert('Объект отреагировавший на клик ' + myObject.id); //выдает ИД картинки к примеру
                    });



                    //ДЗ 4

