function initMain(parameters) {
	console.log(parameters)
	initHeader(parameters.header)
	imageFade()
	imageSlide()
	initFooter()
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
					The Manchester Clinic
				</a>
				<span class="header-menu">
					<span class="header-menu-item ${homeCurrentClass}"><a href="index.html">Home</a></span>
					<span class="header-menu-item ${facilitiesCurrentClass}"><a href="facilities.html">Facilities</a></span>
					<span class="header-menu-item ${contactCurrentClass}"><a href="contact.html">Contact us</a></span>
                </span>
                <div class="menu">
                    <i class="fas fa-bars"></i>
                </div>
                <div class="clear-float"></div>
            </div>
			<div class="menu-items" style="display:none;">
				<div class="close-menu"><i class="fas fa-times"></i></div>
				<table style="width:100%;">
					<tr><a class="logo" href="index.html">The Manchester Clinic</a></tr>
					<tr><td><span class="${homeCurrentClass}"><a href="index.html">Home</a></span></td></tr>
					<tr><td><span class="${facilitiesCurrentClass}"><a href="facilities.html">Facilities</a></span></td></tr>
                	<tr><td><span class="${contactCurrentClass}"><a href="contact.html">Contact us</a></span></td></tr>
				</table>
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