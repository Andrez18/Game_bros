import { Player } from './Player';
import { Platform } from './Platform';

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Player(50, 0);
    this.platforms = [
      new Platform(0, 400, 800),
      new Platform(300, 300, 200),
      new Platform(100, 200, 200),
    ];
    this.gravity = 0.8;
    this.ground = 400;

    this.setupControls();
  }

  setupControls() {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          this.player.x -= 5;
          break;
        case 'ArrowRight':
          this.player.x += 5;
          break;
        case ' ':
        case 'ArrowUp':
          this.player.jump();
          break;
      }
    });
  }

  update() {
    this.player.update(this.gravity, this.ground);
  }

  draw() {
    // Clear canvas
    this.ctx.fillStyle = '#87CEEB';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw platforms
    this.platforms.forEach(platform => platform.draw(this.ctx));

    // Draw player
    this.player.draw(this.ctx);
  }

  gameLoop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.gameLoop());
  }

  start() {
    this.gameLoop();
  }
}