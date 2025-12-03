var nav = document.querySelector(".navbar");
var backToTop = document.querySelector(".back-to-top i");

function scrollDown() {
  window.scrollBy({
    top: 600,

    behavior: "smooth",
  });
}

window.onscroll = function () {
  if (window.scrollY >= 200) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
  if (window.scrollY >= 600) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
};
