(function () {
  var canvas = document.getElementById('stars');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var stars = [];
  var count = 140;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function init() {
    stars = [];
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.25,
        a: Math.random() * 0.65 + 0.2,
        s: Math.random() * 0.012 + 0.002,
        p: Math.random() * Math.PI * 2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      if (!reduce) s.p += s.s;
      var alpha = reduce ? s.a : s.a * (0.55 + 0.45 * Math.sin(s.p));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(210, 220, 245,' + alpha + ')';
      ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();
  if (reduce) return;

  window.addEventListener('resize', function () {
    resize();
    init();
  });
})();
