function initFacilities() {
    facilitiesList();
}

function facilitiesList() {
    $('.facilities-list .item').click(function(ev) {
        var title = $(this).find('.title').text()
        var text = $(this).find('.text').html()        
        
        $('.facilities-info .title').fadeOut(function(){
            $('.facilities-info .title').text(title)
            $('.facilities-info .title').fadeIn()
            if ($('.facilities-info.hidden').length) {
                $('.facilities-info').fadeIn()
            }
        })
        $('.facilities-info .text').fadeOut(function(){
            $('.facilities-info .text').html(text)
            $('.facilities-info .text').fadeIn()
            if ($('.facilities-info.hidden').length) {
                $('.facilities-info').fadeIn()
            }
        })
    })

    $('.facilities-info .close').click(function() {
        $('.facilities-info').fadeOut()
    })
    
}