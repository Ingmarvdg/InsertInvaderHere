class Star {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.speed = random(0.8,1);
    this.radius = random(5, 10);
    this.opacity = random(150, 255);
  }


  show() {
    fill(255, this.opacity);
    noStroke();
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  move() {
    this.y = this.y + this.speed;
  }

  outofbounds() {
    return(this.y == window.innerHeight)
  }
}
