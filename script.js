let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

new TypeIt("#username", {
  waitUntilVisible: true,
  speed: 190,
  loop: true,
  cursor: false,
})
  .type("Prabhat Ranjan Rai")
  .exec(async () => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve();
      }, 2500);
    });
  })
  .go();