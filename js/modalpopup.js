// MODAL POP UP
window.jQuery ||
  document.write(
    '<script src="./frameworks/MDB/js/bootstrap.min.js"></script>'
  );

$(window).on("load", function () {
  setTimeout(function () {
    $("#modalWindowsForm").modal();
  }, 1000);
});
