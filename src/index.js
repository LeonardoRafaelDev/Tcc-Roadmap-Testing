const nav = document.querySelector('header > nav')

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
  document.querySelector('body').classList.toggle('overflow-y-hidden')
  menu.classList.toggle("hidden");
  nav.querySelector("div").classList.toggle('bg-white')
  nav.querySelector("div").classList.toggle('dark:bg-black')
  nav.classList.toggle('h-screen')
  nav.classList.toggle('bg-white')
  btn.querySelector('svg').classList.toggle('text-black')
  btn.querySelector('svg').classList.toggle('dark:text-white')
});