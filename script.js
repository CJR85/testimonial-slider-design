const slide = document.getElementById('slide'),
  upArrow = document.getElementById('upArrow'),
  downArrow = document.getElementById('downArrow');

let x = 0;

upArrow.onclick = function () {
  if (x > '-900') {
    x = x - 300;
    slide.style.top = x + 'px';
  }
};

downArrow.onclick = function () {
  if (x < '0') {
    x = x + 300;
    slide.style.top = x + 'px';
  }
};
