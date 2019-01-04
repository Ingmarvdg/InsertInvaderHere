class Projectile {
  constructor (color, x_location, y_location){
    this.color = color;
    this.x = x_location;
    this.y = y_location;
    this.speed = 5;
    this.height = 20;
    this.width = 3;
  }

  // show the projectile
  show() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }

  // move the projectile
  move() {
    this.y = this.y - this.speed;
  }

  // check if the projectile hits a target
  hits(target) {
    return (this.x - this.width/2 < target.x + target.width/2 &&
            this.x + this.width/2 > target.x - target.width/2 &&
            this.y - this.height/2  < target.y + target.height/2 &&
            this.y + this.height/2 > target.y - target.height/2);
  }

  // check if the projectile leaves the screen
  outofbounds() {
    return(this.y == -this.height);
  }
}
