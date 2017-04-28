$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var typeOfWork = $("input:radio[name=typeOfWork]:checked").val();
    var typeOfSite = $("input:radio[name=typeOfSite]:checked").val();
    var track = $("input:radio[name=track]:checked").val();

    if ((typeOfWork === "designOne" && typeOfSite === "designThree") || (typeOfWork === "designOne" && track === "designFive") || (typeOfSite === "designThree" &&  track === "designFive")) {
      $(".recommendDesign").show();
      $(".recommendPhp").hide();
      $(".recommendRuby").hide();
      $(".recommendOther").hide();
    } else if ((typeOfWork === "rubyOne" && typeOfSite === "rubyThree") || (typeOfWork === "rubyOne" && track === "rubyFive") || (typeOfSite === "rubyThree" && track === "rubyFive")) {
      $(".recommendRuby").show();
      $(".recommendPhp").hide();
      $(".recommendDesign").hide();
      $(".recommendOther").hide();
    } else if ((typeOfWork === "phpOne" && typeOfSite === "phpThree") || (typeOfWork === "phpOne" && track === "phpFive") || (typeOfSite === "phpThree" && track === "phpFive")) {
      $(".recommendPhp").show();
      $(".recommendDesign").hide();
      $(".recommendRuby").hide();
      $(".recommendOther").hide();
    } else {
      $(".recommendedTrack").text("whatever you want it to be. You either have interests all across the board or just don't want to waste time with this quiz");
      $(".recommendOther").show();
      $(".recommendPhp").hide();
      $(".recommendRuby").hide();
      $(".recommendDesign").hide();
    }

    if (name === "") {
      alert("Make sure you enter your name before submitting.")
      $(".recommendOther").hide();
      $(".recommendPhp").hide();
      $(".recommendRuby").hide();
      $(".recommendDesign").hide();
    }

    $(".name").text(name);
  });
});
