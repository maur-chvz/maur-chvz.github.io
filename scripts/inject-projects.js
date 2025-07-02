// inject-projects.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/pages/proj_body.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("proj").innerHTML = html;
    });
});
