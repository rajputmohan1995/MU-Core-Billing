$(document).ready(function () {
  $("#spanCurrentYear").text(new Date().getFullYear());
});

$("img.card-img-top").click(function (event) {
  var imageTitle = $(event.target).attr("data-title");
  var imgSrc = $(event.target).attr("src");

  $("#how-it-works-img-viewer").modal("show");
  $("#fullScreenImage").attr("src", imgSrc);
  $("#exampleModalCenterTitle").text(imageTitle);
});

$("#btnViewTermsOfService").click(function () {
  $("#popupTermsOfService").modal("show");
});

$("#btnViewPrivacyPolicy").click(function () {
  $("#popupPrivacyPolicy").modal("show");
});
