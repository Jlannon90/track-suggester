$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var typeOfWork = $("input:radio[name=typeOfWork]:checked").val();
    var typeOfSite = $("input:radio[name=typeOfSite]:checked").val();
    var track = $("input:radio[name=track]:checked").val();

    if ((typeOfWork === "designOne" && typeOfSite === "designThree") || (typeOfWork === "designOne" && track === "designFive") || (typeOfSite === "designThree" &&  track === "designFive")) {
      $(".recommendedTrack").text("CSS/Design");
      $(".answer").show();
    } else if ((typeOfWork === "rubyOne" && typeOfSite === "rubyThree") || (typeOfWork === "rubyOne" && track === "rubyFive") || (typeOfSite === "rubyThree" && track === "rubyFive")) {
      $(".recommendedTrack").text("Ruby/Rails");
      $(".answer").show();
    } else if ((typeOfWork === "phpOne" && typeOfSite === "phpThree") || (typeOfWork === "phpOne" && track === "phpFive") || (typeOfSite === "phpThree" && track === "phpFive")) {
      $(".recommendedTrack").text("PHP/Drupal");
      $(".answer").show();
    } else {
      $(".recommendedTrack").text("whatever you want it to be. You either have interests all across the board or just don't want to waste time with this quiz");
      $(".answer").show();
    }

    if (name === "") {
      alert("Make sure you enter your name before submitting.")
      $(".answer").hide();
    }

    $(".name").text(name);
  });
});
