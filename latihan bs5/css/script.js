// event when the link is clicked
$('.page-scroll').on('click', function(e){
    
    // take href content
    var href = $(this).attr('href');
    
    // take the element is
    var elemen = $(href);

    //scrolling
    $('html, body').animate({
        scrollTop: elemen.offset().top-50
    }, 900);
    e.preventDefault()
});

//slide up content
$(window).on('load', function(){
    $('.slide-up').addClass('show');
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop()
    if(wScroll > $('.slide-up1').offset().top - 600){
        $('.slide-up1').each(function(i){
            setTimeout(function(){
                $('.slide-up1').eq(i).addClass('show');        
            }, 500 * (i+1));
        });
    }
});


