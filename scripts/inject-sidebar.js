// inject-sidebar.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/pages/sidebar.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("sidebar").innerHTML = html;
    });
});
