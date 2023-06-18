$(document).ready(function(){

    $('.control').click(function(){
        $('body').addClass('search-active');
        $('.input-search').focus();
    });

    $('.fa-xmark').click(function(){
        $('body').removeClass('search-active');
    });
    
});