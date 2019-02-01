function initVenues() {
  venueGrid();
}

function venueGrid() {
  $(".venue-grid div").hover(function() {
    $(this)
      .find("span")
      .toggleClass("venue-hover-hidden")
      .toggleClass("venue-hover-display");
    $(this)
      .find(".summary")
      .toggleClass("venue-hover-hidden")
      .toggleClass("venue-hover-display");
  });
}
