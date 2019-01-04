//variables
var background_color = 0;
var stars = [];

function setup() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  var canvas = createCanvas(width, height);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  for (var i = 0; i<25; i++) {
    stars.push(new Star(random(0, width), random(0, height)))
  }

  function create() {
    var y_start = random(0, width);
    stars.push(new Star(y_start, 0));
  }

  (function loop() {
    var rand = random(250, 750)
    setTimeout(function() {
            create();
            loop();
    }, rand);
  }());

}

function draw() {
  background(background_color);

  for (var i = 0; i< stars.length; i++) {
    stars[i].show();
    stars[i].move();
    if(stars.outofbounds){
      stars.splice(i,1);
    }
  }
}
