/**
 * Created by Jen on 10/30/2014.
 */
$(document).ready(function() {
    var box = $('.active');
    var star = $('.wrapper div');


    box.on('mouseenter',function(){
        console.log('yay');
        $(this).addClass('highlight').prevAll('.active').addClass('highlight');
        //this is the box where the mouse has entered
    });

    box.on('mouseleave',function(){
      //  $(this).removeClass('.highlight');
        $(this).removeClass('highlight').prevAll('.active').removeClass('highlight');

    });

    box.on('click',function(){
        console.log('hey');

        $(this).addClass('rated').prevAll().addClass('rated');
    });
});

