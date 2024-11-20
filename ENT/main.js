const items = document.querySelectorAll('.animated-item');

document.addEventListener('mousemove', e => {
  const x = (e.clientX - window.innerWidth / 2) * -0.005;
  const y = (e.clientY - window.innerHeight / 2) * 0.01;

  items.forEach(item => {
    item.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });
});
