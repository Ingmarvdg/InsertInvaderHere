class Defender {
  constructor(image, y){
    this.image = image;
    this.x = width/2;
    this.y = height-y*1.5;
    this.width = 60;
    this.height = 60;
    this.color = [255];
    this.speed = 5;
    this.direction = 0;
  }

  // show the defender
  show() {
    image(this.image, this.x, this.y, this.width, this.height);
  }

  // set the direction of the defender
  setdirection(direction) {
    this.direction = direction;
  }

  // move the defender
  move() {
      this.x = this.x + (this.speed * this.direction);
  }

  // check when the defender is out of the screen
  outofbounds(width) {
    if (this.x - this.width/2 < 0) {
      this.x = this.width/2 + 1;
      return (true)
    }
    if (this.x + this.width/2 > width) {
      this.x = width - this.width/2 -1;
      return (true)
    }
  }
}
