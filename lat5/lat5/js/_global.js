$(".overlay").click(() => {
  console.log("test");
});

$(".burgerToggle").click(() => {
  $(".sidebarContainer").addClass("shown");
  $(".overlay").addClass("overlayShown");
});

$(".overlay").click(() => {
  $(".sidebarContainer").removeClass("shown");
  $(".overlay").removeClass("overlayShown");
});

$(".antonioLink").click(() => {
  $(".customModal1").removeClass("cmHidden");
});

$(".ivonneLink").click(() => {
  $(".customModal2").removeClass("cmHidden");
});

$(".back").click(() => {
  $(".customModal").addClass("cmHidden");
});
