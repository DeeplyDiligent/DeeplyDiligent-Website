$(document).ready(function(){
  $('a').click(function(){
    $(".mdl-layout__content").animate({
        scrollTop: $( $(this).attr('href') ).offset().top-30
    }, 500);
    return false;
});
});