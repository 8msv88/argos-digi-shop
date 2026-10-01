(function () {
  var canvas = document.getElementById('stars');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var stars = [];
  var count = 160;

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
        r: Math.random() * 1.4 + 0.3,
        a: Math.random() * 0.7 + 0.2,
        s: Math.random() * 0.015 + 0.003,
        p: Math.random() * Math.PI * 2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      s.p += s.s;
      var alpha = s.a * (0.55 + 0.45 * Math.sin(s.p));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(220, 230, 255,' + alpha + ')';
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();
  window.addEventListener('resize', function () {
    resize();
    init();
  });
})();
