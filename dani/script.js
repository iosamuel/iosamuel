const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", () => {
  wrapper.classList.add("envelope-open-animation");
  setTimeout(() => {
    document.body.classList.add("envelope-open");
    writeLetter();
  }, 2000);
});

const writeLetter = () => {
  const typed = new TypeIt(".wrapper-letter--letter", {
    cursorChar: "",
    startDelay: 1000,
    speed: 75 });
};
