export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 48;
    this.velocityY = 0;
    this.isJumping = false;
  }

  jump() {
    if (!this.isJumping) {
      this.velocityY = -15;
      this.isJumping = true;
    }
  }

  update(gravity, ground) {
    this.velocityY += gravity;
    this.y += this.velocityY;

    // Ground collision
    if (this.y + this.height > ground) {
      this.y = ground - this.height;
      this.velocityY = 0;
      this.isJumping = false;
    }
  }

  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}