//アンダーバーアニメーション
const animatedBorders = document.querySelectorAll("[data-animate]");
const animatedImages = document.querySelectorAll(".animated-img");

window.addEventListener("scroll", () => {
  const windowBottom = window.pageYOffset + window.innerHeight;

  animatedBorders.forEach((el) => {
    const elBottom = el.offsetTop + el.offsetHeight;

    if (windowBottom > elBottom) {
      el.classList.add("animate");
    }
  });

  animatedImages.forEach((el) => {
    const elBottom = el.offsetTop + el.offsetHeight;

    if (windowBottom > elBottom) {
      el.classList.add("animate");
    }
  });
});
