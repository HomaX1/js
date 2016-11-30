$(document).ready(function() {

//$('img[src*=logo]').fadeOut(4000).fadeIn(4000); //плавное исчезновение и появление

    function hidden (element, time) {
        var idElem = "#" + element;

        if(typeof time == "number" || time > 500 || time < 10000) {

            $(idElem).fadeOut(time);
        }else{
            return false;
        }
    }

    hidden('moto_models', 3000);


});//означает, что все скрипты будут выполнятся после готовности всей страницы, короткая версия $(function() {});
//Конец ready



