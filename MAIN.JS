const scroll = document.querySelector(".scrolltotop");
scroll.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
document.addEventListener("scroll", () => {
  if (window.scrollY > 3000) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
});
