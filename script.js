const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = ['{ }', '< />', '0', '1', 'Java', 'Python'];
// const symbols = [''];
const particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.text = symbols[Math.floor(Math.random() * symbols.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.font = `${this.size}px Michroma`;
        ctx.fillStyle = 'goldenrod';
        ctx.fillText(this.text, this.x, this.y);
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.update());
    particles.forEach(p => p.draw());
    requestAnimationFrame(animate);
}

for (let i = 0; i < 30; i++) particles.push(new Particle());
animate();
