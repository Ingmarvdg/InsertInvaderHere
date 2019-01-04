 class Invader {
   constructor(image, x_location, y_location, width, height, drop){
     this.image = image;
     this.x = x_location;
     this.y = y_location;
     this.color = [255];
     this.speed = 0.6;
     this.drop = drop;
     this.width = width;
     this.height = height;
   }

   // show the invader
   show() {
     imageMode(CENTER);
     image(this.image, this.x, this.y, this.width, this.height);
     noStroke();
   }

   // move the invader horizontally
   horizontalmove() {
      this.x = this.x + this.speed;
    }

    // move the invader down one step
    dropDown() {
    this.y += this.drop;
    this.speed *= -1;
  }
}
