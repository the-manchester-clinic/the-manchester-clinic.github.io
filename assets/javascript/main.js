// Remove for production
$("#footer-container").ready(function() {
	initFooter()
})

$("#header-bar-container").ready(function() {
	const page = $('meta[name=page-title]').attr("content");
	initHeader(page)
})

function imageTransitions() {
	imageFade()
	imageSlide()
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
	var homeCurrentClass;
	var facilitiesCurrentClass;
	var contactCurrentClass;
	var theHouseCurrentClass;
	
	switch (page) {
		case "home":
			homeCurrentClass = "current";
			break;
		case "facilities":
			facilitiesCurrentClass = "current";
			break;
		case "the-house":
			theHouseCurrentClass = "current";
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
					<span class="header-menu-item ${theHouseCurrentClass}"><a href="the-house.html">The House</a></span>
					<span class="header-menu-item ${contactCurrentClass}"><a href="contact.html">Contact us</a></span>
                </span>
                
                <div class="clear-float"></div>
            </div>
			<div class="menu">
				<i class="fas fa-bars"></i>
				<div class="menu-items" style="display:none;">
					<div class="close-menu"><i class="fas fa-times"></i></div>
					<div class="menu-items-links" style="width:100%;">
						<a href="index.html">Home</a>
						<a href="facilities.html">Facilities</a>
						<a href="the-house.html">The House</a>
						<a href="contact.html">Contact us</a>
					</div>
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
	const lightboxContainerSrc = `
	<div style="display:none" id="lightbox-container" class="lightbox-container">
		<i class="fas fa-chevron-left"></i>
		<div class="lightbox-img">
			<img class="lightbox-img">
			<div class="dismiss-text" >Click outside the image to close the gallery</div>
		</div>
		<i class="fas fa-chevron-right"></i>
	</div>`

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

	const lightboxGallerySrc = `<div class="lightbox-gallery-overlay"></div>`	
	$(".lightbox-gallery").click(function() {
		$(".lightbox:eq(0)").click()
	})
	$(".lightbox-gallery").append($(lightboxGallerySrc))

	function next() {
		var srcObj = JSON.parse(sessionStorage.getItem("srcObj"))
		var imgSrc = $(".lightbox-img").attr("src");
		var currentPosition = parseInt(Object.keys(srcObj).find(key => srcObj[key] === imgSrc))
		if ( (currentPosition + 1) > (Object.keys(srcObj).length - 1) ) {
			currentPosition = -1
		}
		$(".lightbox-img").attr("src", srcObj[currentPosition + 1])
	}
	
	function previous() {
		var srcObj = JSON.parse(sessionStorage.getItem("srcObj"))
		var imgSrc = $(".lightbox-img").attr("src");
		var currentPosition = parseInt(Object.keys(srcObj).find(key => srcObj[key] === imgSrc))
		if ( (currentPosition - 1) < 0 ) {
			currentPosition = (Object.keys(srcObj).length)
		}
		$(".lightbox-img").attr("src", srcObj[currentPosition - 1])
	}

	$(".lightbox-container .fa-chevron-right").click(function() {
		previous()
	})
    
    $(".lightbox-container .fa-chevron-left").click(function() {
        next()
    })

    // hide lightbox
    $(".lightbox-container .fa-times").click(function(){
        $(".lightbox-container").fadeOut()
    })

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key
            $(".lightbox-container").fadeOut();
		}
		if (e.keyCode == 37) {
			previous();
		}
		if (e.keyCode == 39) {
			next();
		}
	});

	const el = "lightbox-container"

	this.touchstartX = 0;
	this.touchstartY = 0;
	this.touchendX = 0;
	this.touchendY = 0;

	const gestureZone = document.getElementById(el);

	gestureZone.addEventListener('touchstart', function(event) {
		touchstartX = event.changedTouches[0].screenX;
		touchstartY = event.changedTouches[0].screenY;
	}, false);

	gestureZone.addEventListener('touchend', function(event) {
		touchendX = event.changedTouches[0].screenX;
		touchendY = event.changedTouches[0].screenY;
		handleGesture();
	}, false); 

	function handleGesture() {

		let left = touchstartX - touchendX
		let right = touchendX - touchstartX
		let up = touchstartY - touchendY
		let down = touchendY - touchstartY

		var swipeDirections = {
			left : left,
			right : right,
			up : up,
			down : down,
		}
		const swipeDirection = Object.keys(swipeDirections).reduce((a, b) => swipeDirections[a] > swipeDirections[b] ? a : b);
		const swipeDirectionMagnitude = Object.values(swipeDirections).reduce((a, b) => Math.max(a, b));
		const elementWidth = $(".lightbox-img img").width();
		

		// tap
		if (touchendY === touchstartY) {
			return 'tap';
		}
		else if (swipeDirectionMagnitude / elementWidth > 0.3) {			
			if (swipeDirection == "left") {
				previous()
			}
			else if (swipeDirection == "right") {
				next()
			}
		}
	}

	$(".lightbox-container").click(function(){
		$(this).fadeOut();
		}).find("img, .fas").click(function(e) {
			return false;
	});

	
	$(".lightbox-img").mouseup(function(e) {
		clearTimeout(dismissTextShow)
		dismissText = $(this).siblings(".dismiss-text")
		e.stopPropagation();
		dismissText.addClass("lightbox-fade-in")
		var dismissTextShow = setTimeout(function(){
			dismissText = $(".lightbox-img").siblings(".dismiss-text")
			dismissText.removeClass("lightbox-fade-in")
		}, 3000)
	})
}
