export class Platform {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 20;
  }

  draw(ctx) {
    ctx.fillStyle = '#795548';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}