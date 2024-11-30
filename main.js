//Select button
let backTopBtn = document.querySelector("#backTop");

// adding event to the window on scrolling to trigger the backTop function
window.onscroll = function () {
  backTop();
};

// When the user scrolls down 100px from the top of the document, show the button

function backTop() {
  if (document.documentElement.scrollTop > 100) {
    backTopBtn.style.display = "block";
  } else {
    backTopBtn.style.display = "none";
  }
}
backTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
