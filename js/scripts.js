$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var typeOfWork = $("input:radio[name=typeOfWork]:checked").val();
    var typeOfSite = $("input:radio[name=typeOfSite]:checked").val();
    var track = $("input:radio[name=track]:checked").val();

    if ((typeOfWork === "designOne" && typeOfSite === "designThree") || (typeOfWork === "designOne" && track === "designFive") || (typeOfSite === "designThree" &&  track === "designFive")) {
      $(".recommendedTrack").text("CSS/Design");
    } else if {


      
    }






    $(".answer").show();
  });

});
