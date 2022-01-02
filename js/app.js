// 스크롤 시 맨 위로 서서히 올라가기

const btnToTop = document.querySelector(".gather_top_btn");

btnToTop.addEventListener("click", () => {
  document.body.scrollIntoView({ behavior: "smooth" });
});
