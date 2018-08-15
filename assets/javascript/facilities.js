function initFacilities() {
    facilitiesList();
}

function facilitiesList() {
    $(".facilities-hover").mouseenter(function(){
        $(this).find('.facilities-text').css("background", "linear-gradient(rgba(0,0,0,1) , rgba(0,5,25,0.9))")
        $(this).find('.facilities-text p').addClass("facilities-text-top")
        $(this).children().each(function(el){
            $(this).addClass("facilities-large").removeClass("facilities-regular")
        });
        $(this).find('.facilities-extra-text').addClass('facilities-visible')
    })

    $(".facilities-hover").mouseleave(function(){
        $(this).find('.facilities-extra-text').removeClass('facilities-visible')
        $(this).children().each(function(el){
            $(this).removeClass("facilities-large").addClass("facilities-regular")
        });
        $(this).find('.facilities-text p').removeClass("facilities-text-top")
        $(this).find('.facilities-text').css("background","linear-gradient(rgba(0,0,0,0.9) , rgba(0,5,25,0.7))")
    })
}