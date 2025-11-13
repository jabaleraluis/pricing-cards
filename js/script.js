document.addEventListener("DOMContentLoaded", () => {
  const $btnContainer = document.querySelector(".button__container");
  const $btnMonth = document.querySelector(".button__container .month");
  const $btnAnnual = document.querySelector(".button__container .annual");
  const $price = document.querySelectorAll(".price");

  document.addEventListener("click", (e) => {
    if (e.target === $btnMonth) {
      $price.forEach((price) => {
        price.classList.remove("active");
        $btnMonth.classList.add("active");
        $btnAnnual.classList.remove("active");
        $btnContainer.classList.remove("active");
      });
    }
    if (e.target === $btnAnnual) {
      $price.forEach((price) => {
        price.classList.add("active");
        $btnAnnual.classList.add("active");
        $btnMonth.classList.remove("active");
        $btnContainer.classList.add("active");
      });
    }
  });
});
