/**
 * Created by Renato on 11/07/14.
 */
$(function(){

    $('.seja').fadeIn(1000, function(){
       $('.bem').delay(1000).fadeIn(1200);
        $('.vindo').delay(2500).fadeIn(1500);
        $('.pecas').delay(4000).fadeIn(2000);
         });
        var contagem = ('.contagem');
        $(contagem).delay(6000).fadeIn(500, function(){
        var count = 2;
            setInterval(function(){
            $(contagem).text(count);
                if (count == 0){
                    $(contagem).text('GO!');
                       // window.location = 'home';
                        return false;

                }

                count --;
        }, 1000);

});

});