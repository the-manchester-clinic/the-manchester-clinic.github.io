const headerHTML = `
			<div class="header-bar">
				<a href="index.html">
					<img class="header-logo" src="assets/images/MOCS-Logo.png"></img>
				</a>
				<span class="header-menu">
					<span class="header-menu-item current"><a href="index.html">Home</a></span>
					<span class="header-menu-item"><a href="contact.html">Contact us</a></span>
				</span>
				<div class="clear-float"></div>
			</div>
			<div class="horizontal-rule"></div>`;
			
function initHeader() {
	$("#header-bar-container").append(headerHTML);
}