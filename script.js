const slide = document.getElementById('slide'),
  upArrow = document.getElementById('upArrow'),
  downArrow = document.getElementById('downArrow');

let x = 0;

upArrow.onclick = function () {
  x = x - 300;
  slide.style.top = x + 'px';
};
