$(window).on('scroll', function(){
    if($(window).scrollTop()>=65 && !$('.navbar').hasClass('fixed')){
        $('.navbar').addClass('fixed'); 
    }
    else if($(window).scrollTop()<95 && $('.navbar').hasClass('fixed')){
       $('.navbar').removeClass('fixed') 
    }
});