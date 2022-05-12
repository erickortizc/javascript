$(document).ready(function () {
    //parte 1 y 2
   /*  $('h1').html('Etiqueta h1');
    $('.display-4').html('desde clase');
    $('#idh1').html('desde id');
 */
   /*  $('.container h1:last').html('desde clase con etiqueta h1'); */
   $('#idh1').addClass('text-danger');
   $('idh1').removeClass('display-4');
 //  $('.container').append('<h1>Lorem, ipsum dolor.</h1>');
  // $('.container').prepend('<h1>Este es un elemento al principio</h1>');
   $('#colorazul').css({color: 'blue',background:'salmon', padding: '20px'});
    //$('#colorazul').remove();
    //$('#colorazul').hide();
    $('img').attr('src', 'http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png');
    $('img:last').attr('width','50px');

    var parrafo = $('#resultado p')
    $('.btn-primary').click(function (e) { 
        parrafo.addClass('display-4');
        
    });
    $('.btn-danger').click(function (e) { 
        parrafo.removeClass('display-4');
    });
    $('.btn-warning').click(function (e) { 
        parrafo.toggleClass('display-4');
    });


 //parte3
    $('#formulario').submit(function (e) { 
        e.preventDefault();
        var nombre = $('#nombre').val();
        console.log(nombre);     
    });

    //parte 4
    var resultado = $('#resultado2')
    $('.btn-secondary').click(function (e) { 
     resultado.fadeOut(1000);
        
    });
    $('.btn-success').click(function (e) { 
        resultado.fadeIn(2000)
    });
    $('.btn-info').click(function (e) { 
        resultado.toggle(1000);
    });

    //parte 5
    var resultado2 = $('#resultado3')
    $('.btn-dark').click(function (e) { 
        resultado2.animate({left:'300px',
                            opacity: '0.5',
                            height:'+=200xp', 
                            width:'+=250px'       
                           },1000,function(){
                               resultado2.animate({
                                left:'50px',
                                opacity: '1',
                                height:'-=200xp', 
                                width:'-=250px'
                               },1000)
                           });
           
       });
});
