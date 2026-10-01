(function () {
  if (window.matchMedia('(pointer: coarse)').matches) {
    document.body.classList.add('touch');
    return;
  }

  var ring = document.getElementById('cursor');
  var dot = document.getElementById('cursor-dot');
  if (!ring || !dot) return;

  var x = 0;
  var y = 0;
  var rx = 0;
  var ry = 0;

  document.addEventListener('mousemove', function (e) {
    x = e.clientX;
    y = e.clientY;
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
  });

  function loop() {
    rx += (x - rx) * 0.18;
    ry += (y - ry) * 0.18;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  }
  loop();

  var hoverables = 'a, button, .offer, .btn-primary, .btn-header, .btn-ghost, .nav a, .brand';
  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(hoverables)) ring.classList.add('hover');
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(hoverables)) ring.classList.remove('hover');
  });
})();
