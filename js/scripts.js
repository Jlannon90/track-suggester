$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var typeOfWork = $("input:radio[name=typeOfWork]:checked").val();
    var typeOfSite = $("input:radio[name=typeOfSite]:checked").val();
    var track = $("input:radio[name=track]:checked").val();

    if ((typeOfWork === "designOne" && typeOfSite === "designThree") || (typeOfWork === "designOne" && track === "designFive") || (typeOfSite === "designThree" &&  track === "designFive")) {
      $(".recommendedTrack").text("CSS/Design");
    } else if ((typeOfWork === "rubyOne" && typeOfSite === "rubyThree") || (typeOfWork === "rubyOne" && track === "rubyFive") || (typeOfSite === "rubyThree" && track === "rubyFive")) {
      $(".recommendedTrack").text("Ruby/Rails");
    } else if ((typeOfWork === "phpOne" && typeOfSite === "phpThree") || (typeOfWork === "phpOne" && track === "phpFive") || (typeOfSite === "phpThree" && track === "phpFive")) {
      $(".recommendedTrack").text("PHP/Drupal");
    } else {
      $(".recommendedTrack").text("whatever you want it to be. You either have interests all across the board or just don't want to waste time with this quiz");
    }

    $(".answer").show();
  });
});
