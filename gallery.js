let scrollContainer = document.querySelector(".gallery");
let backButton = document.getElementById("backbtn");
let nextButton = document.getElementById("nextbtn");
/*
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});*/

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextButton.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backButton.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900;
  scrollContainer.style.scrollBehavior = "smooth";
});
