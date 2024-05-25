$(document).ready(function() {
    $( function() {
        var tabs = $( "#tabs" ).tabs();
    } );

    $('#toggle-button').click(function() {
        $('body').toggleClass('dark-mode');
        $('header').toggleClass('dark-mode');
        $('button').toggleClass('dark-mode');
        $('header .navBar a').toggleClass('dark-mode');
        $('main #tabs div').toggleClass('dark-mode');
        $('.ui-tabs li a').toggleClass('dark-mode');
        $('main #tabs div').toggleClass('dark-mode');
        $('footer').toggleClass('dark-mode');
    });
    
});

