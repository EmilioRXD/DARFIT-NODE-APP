const $nav = document.querySelector("nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    $nav.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !$nav.classList.contains(scrollDown) && screen.width > 768) {
    // down
    $nav.classList.remove(scrollUp);
    $nav.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && $nav.classList.contains(scrollDown) && screen.width > 768) {
    // up
    $nav.classList.remove(scrollDown);
    $nav.classList.add(scrollUp);
  }
    else if(screen.width < 768) {
    $nav.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});
