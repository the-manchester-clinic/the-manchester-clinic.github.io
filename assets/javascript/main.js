function initMain(parameters) {
	initHeader(parameters.header)
	imageFade()
	imageSlide()
	initFooter()
	initLightbox()
}

function imageFade() {
    $(".fade-in").css("opacity","1")
}

function imageSlide() {
	$(".img-slide-container").mouseover(function(){
		$(this).find(".img-slide").css("top", "-15");
		$(this).find(".img-shadow").css("box-shadow","0 80px 45px -45px rgba(0, 0, 0, 1)")
	})
	$(".img-slide-container").mouseleave(function(){
		$(this).find(".img-slide").css("top", "0");
		$(this).find(".img-shadow").css("box-shadow","0 80px 40px -40px rgba(0, 0, 0, 1)")
	})
}
			
function initFooter() {
    const footerHTML = `<div class="footer">&copy; 2018 The Manchester Clinic.  All rights reserved.</div>`;
	$("#footer-container").append(footerHTML);
}

function initHeader(page) {
	var homeCurrentClass = "";
	var facilitiesCurrentClass = "";
	var contactCurrentClass = "";
	
	switch (page) {
		case "home":
			homeCurrentClass = "current";
			break;
		case "facilities":
			facilitiesCurrentClass = "current";
			break;
		case "contact":
			contactCurrentClass = "current";
			break;
	}
	
	var headerHTML = `
			<div class="header-bar">
				<a class="logo" href="index.html">
				</a>
				<span class="header-menu">
					<span class="header-menu-item ${homeCurrentClass}"><a href="index.html">Home</a></span>
					<span class="header-menu-item ${facilitiesCurrentClass}"><a href="facilities.html">Facilities</a></span>
					<span class="header-menu-item ${contactCurrentClass}"><a href="contact.html">Contact us</a></span>
                </span>
                
                <div class="clear-float"></div>
            </div>
			<div class="menu">
				<i class="fas fa-bars"></i>
				<div class="menu-items" style="display:none;">
					<div class="close-menu"><i class="fas fa-times"></i></div>
					<table style="width:100%;">
						<tr><td><a href="index.html">Home</a></td></tr>
						<tr><td><a href="facilities.html">Facilities</a></td></tr>
						<tr><td><a href="contact.html">Contact us</a></td></tr>
					</table>
				</div>
			</div> 
			`;
	
	$("#header-bar-container").append(headerHTML);

	$(".menu .fa-bars").click(function(){
		$(".menu-items").slideDown()
	})

	$(".close-menu").click(function(){
		$(".menu-items").slideUp()
	})	

}

function initLightbox() {
    const lightboxContainerSrc = `<div style="display:none" class="lightbox-container"><i class="fas fa-chevron-left"></i><img class="lightbox-img"><i class="fas fa-times"></i><i class="fas fa-chevron-right"></i></div>`
    $("body").append(lightboxContainerSrc)
    $(".lightbox").addClass("lightbox-hover")   

    //display lightbox
    $(".lightbox").click(function(){
        var srcObj = {}
        $(".lightbox").each(function(el) {
            srcObj[el] = ($(this).attr("src")) 
        })
        var imgSrc = $(this).attr("src");
        sessionStorage.setItem("srcObj", JSON.stringify(srcObj));
            
        $(".lightbox-img").attr("src", imgSrc)
        $(".lightbox-container").fadeIn()

    })

    $(".lightbox-container .fa-chevron-right").click(function() {
        var srcObj = JSON.parse(sessionStorage.getItem("srcObj"))
        var imgSrc = $(".lightbox-img").attr("src");
        var currentPosition = parseInt(Object.keys(srcObj).find(key => srcObj[key] === imgSrc))
        if ( (currentPosition + 1) > (Object.keys(srcObj).length - 1) ) {
            currentPosition = -1
        }
        $(".lightbox-img").attr("src", srcObj[currentPosition + 1])
    })
    
    $(".lightbox-container .fa-chevron-left").click(function() {
        var srcObj = JSON.parse(sessionStorage.getItem("srcObj"))
        var imgSrc = $(".lightbox-img").attr("src");
        var currentPosition = parseInt(Object.keys(srcObj).find(key => srcObj[key] === imgSrc))
        if ( (currentPosition - 1) < 0 ) {
            currentPosition = (Object.keys(srcObj).length)
        }
        $(".lightbox-img").attr("src", srcObj[currentPosition - 1])
    })

    // hide lightbox
    $(".lightbox-container .fa-times").click(function(){
        $(".lightbox-container").fadeOut()
    })

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $(".lightbox-container").fadeOut()
        }
    });
}
