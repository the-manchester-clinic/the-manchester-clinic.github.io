		
function initHeader(page) {
	var homeCurrentClass = "";
	var serviceCurrentClass = "";
	var contactCurrentClass = "";
	
	switch (page) {
		case "home":
			homeCurrentClass = "current";
			break;
		case "service":
			serviceCurrentClass = "current";
			break;
		case "contact":
			contactCurrentClass = "current";
			break;
	}
	
	var headerHTML = `
			<div class="header-bar">
				<a href="index.html">
					<img class="header-logo" src="assets/images/MOCS-Logo.png"></img>
				</a>
				<span class="header-menu">
					<span class="header-menu-item ${homeCurrentClass}"><a href="index.html">Home</a></span>
					<span class="header-menu-item ${serviceCurrentClass}"><a href="service.html">Facilities</a></span>
					<span class="header-menu-item ${contactCurrentClass}"><a href="contact.html">Contact us</a></span>
				</span>
				<div class="clear-float"></div>
			</div>
			<div class="horizontal-rule"></div>`;
	
	$("#header-bar-container").append(headerHTML);
}