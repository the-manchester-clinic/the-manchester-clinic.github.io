function initCarousel() {
	document.getElementsByClassName('image-carousel')[0].style.opacity="1"
	setTimeout(nextSlide, 5000);
	typewriter()
}

function nextSlide() {
	var slides = $(".image-slide");
	var currentSlideIndex;
	for (var i = 0; i < slides.length; i++) {
		var slide = $(slides[i]);
		if (slide.is(":visible")) {
			currentSlideIndex = i;
		}
	}
	var nextSlideIndex = currentSlideIndex + 1;
	if (nextSlideIndex >= slides.length) {
		nextSlideIndex = 0;
	}
	$(slides[nextSlideIndex]).fadeIn(1000);
	$(slides[currentSlideIndex]).fadeOut(1000);
	
	setTimeout(nextSlide, 5000);
}

function typewriter() {
	var app = document.getElementById('typewriter');

	var typewriter = new Typewriter(app, {
		loop: true
	});

	typewriter.typeString('Welcome to The Manchester Clinic')
		.pauseFor(2500)
		.deleteAll()
		.typeString('Read more about us below')
		.pauseFor(2500)
		.start();
	}