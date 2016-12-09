$(document).ready(function() {



   /* $('#div_for_img').click(function(eventObject) {//или (е) // узнать в каком месте экрана монитора произошел щелчек
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
*/

    $('#div_for_img img').toggle(function(eventObject) {

        if(eventObject.shiftKey) {
            $(this).css('border', '4px solid #cc0000');
        }
        else {
            $(this).css('border', '4px solid #333333');
        }

    }, function() {
        $(this).css('border', 'none');
    });






});//означает, что все скрипты будут выполнятся после готовности всей страницы, короткая версия $(function() {});
//Конец ready



