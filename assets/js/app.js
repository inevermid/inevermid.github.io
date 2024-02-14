// Constants Variables
const footerYear = document.querySelector('footer span');

const getCurrentYear = _ => new Date().getFullYear();
const footerSetYear = _ => footerYear.textContent = getCurrentYear();

footerSetYear();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
particlesArray = [];

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
  over: undefined
}

canvas.addEventListener('mouseenter', () => {
  mouse.over = true;
});

canvas.addEventListener('mouseout', () => {
  mouse.over = false;
});

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const createParticles = () => {
  for(let i = 0; i < 1; i++) {
    particlesArray.push(new Particle());
  }
}

const handleParticles = () => {
  for(let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
    if(particlesArray[i].size <= 1) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

const init = () => {
  if(mouse.over) {
    createParticles();
  }
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  init();
  handleParticles();
  requestAnimationFrame(animate);
}
animate();