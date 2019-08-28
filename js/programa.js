$(document).ready(function(){


    $(".posicionado").draggable();

    $(".droppable").droppable({
        drop: function(){
            alert("Soltaste algo en el area");
        }
    });





});