$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
        $('#envelope').click(() => {
            $('.cover').addClass('cover-page');
            $('.cover').addClass('scale-in-center');
            window.setTimeout(() => {
                $('.cover-content').removeClass('hidden');
                $('.cover-content').addClass('slide-in-top');
            }, 750)
        })
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});