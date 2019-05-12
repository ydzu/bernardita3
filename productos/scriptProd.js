document.addEventListener("DOMContentLoaded", () => {

  const leftEl = document.getElementById('drefLeft');
  const rightEl = document.getElementById('drefRight');

  window.addEventListener("scroll", () => {
    rightEl.style.transform = "translate3d(0," + scrollFactor() + "px, 0)";
  });

  const scrollFactor = () => {
    return window.scrollY * (rightEl.offsetHeight / leftEl.offsetHeight);
  };
});
