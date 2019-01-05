// initialize variables
var defender;
var game;
var small_invaders = [];
var medium_invaders = [];
var large_invaders = [];
var invaders = [];
var projectiles = [];
var invader_img;
var defender_img;
var ready = true;
var n_kills = 0;
var pointmod = 1;
var background_color = 0;
var canvasDiv = document.getElementById('gamearea');

//usable colors:
var color_blue = '#7A9BA8';
var color_red = '#F7401C';
var color_neon = '#BEFA21';
var color_green = '#35777D';

// info bar height
var bar_height = 60;

// game settings
// cooldown for gun
var cooldown = 500;
// amount of invaders per row, there are always 3 rows of invaders.
var n_invaders = 8;
// name of invaders
var invader_name = "Hamburger";
// change how long it takes to increase the point modifier by 0.01;
var pointmod_duration = 1000;
// amount of points received per hit
var p_per_hit = 100;

var n_edges = 0;

// preloading images
function preload() {
  invader_img = loadImage(invader_img_url);
  defender_img = loadImage(defender_img_url);
}

// setup function
function setup() {
  // width of each invader
  var invader_width = 40;
  // height of each invader
  var invader_height = 40;
  // size of playing field
  var width = gamearea.offsetWidth;
  var height = gamearea.offsetHeight;
  var hasTouch = 'ontouchstart' in window;

  // calculations for commonly used variables
  var gamewidth = width-(width/10);
  var drop = height / 20;

  var canvas = createCanvas(width, height);
  canvas.parent('gamearea');

  // initialize the defender and the game
  defender = new Defender(defender_img, bar_height);
  game = new Game(invader_name);

  // initialize the invaders
  for(var i = 0; i<n_invaders; i++){
      var x_location = i*(gamewidth/n_invaders)+(gamewidth/(n_invaders*2))
      invaders.push(new Invader(invader_img, x_location, invader_height, invader_width, invader_height, drop));
      invaders.push(new Invader(invader_img, x_location, invader_height*2.5, invader_width, invader_height, drop));
      invaders.push(new Invader(invader_img, x_location, invader_height*4, invader_width, invader_height, drop));
  }

  if(hasTouch) {
    touchcontrols = document.getElementById("touchcontrols")
    touchcontrols.style.display = 'block';
    touchcontrols.scrollIntoView();
  }
}

// draw function
function draw() {
  var edge = false;

  // define the height of the finishline
  var finishline_height = defender.y - defender.height/2;

  background(0);

  // stop the defender if it leaves the playing field
  if (defender.outofbounds(width)) {
    defender.setdirection(0);
  }

  // show and move the defender
  defender.show();
  defender.move();

  // show and move each of the invaders
  for (var i = 0; i< invaders.length; i++) {
    invaders[i].show();
    invaders[i].horizontalmove();
    // if an invader hits an edge, set edge to true
    if (invaders[i].x > width - invaders[i].width || invaders[i].x - invaders[i].width/2 < 0) {
      edge = true;
    }
  }

  // if an invader hits an edge, make all invaders drop down 1 line.
  if (edge) {
    n_edges = n_edges + 1;
    pointmod = pointmod - (0.05 * n_edges)
    for(var i = 0; i< invaders.length; i++) {
      invaders[i].dropDown();
    }
  }

  // move and show each projectile
  for(var i = 0; i< projectiles.length; i++) {
    projectiles[i].show();
    projectiles[i].move();
    // set hitmark to false
    hitmark = false;

    // check if an projectile hits an invader
    for (var j = invaders.length-1; j >= 0; j--) {
      if (projectiles[i].hits(invaders[j])) {
        // remove the invader
        invaders.splice(j,1);
        // set hitmark to true
        hitmark = true;
        // add one to kill count
        n_kills++;
        // add points to total points
        game.addpoints(p_per_hit * pointmod);
      }
    }
    // remove a projectile if it hits something or if it leaves the field
    if (projectiles[i].outofbounds() || hitmark){
      projectiles.splice(i,1);
    }
  }
  // show the infobar and finishline
  game.finishline(finishline_height, width);

   // define when the player wins or loses
  if (n_kills > n_invaders * 3 -1) {
    game.endgame(1);
    noLoop();
  }
  for (var i = 0; i< invaders.length; i++) {
    if (invaders[i].y + invaders[i].height > finishline_height) {
      game.endgame(0);
      noLoop();
    }
  }
}

function shoot() {
  if(ready == true){
    var projectile = new Projectile(projectile_color, defender.x, defender.y-defender.height);
    projectiles.push(projectile);
    ready = false;
    // put the gun on cooldown
    setTimeout(function(){ready = true}, cooldown)
  }
}

// if the player releases a key that isnt the spacebar, stop moving.
function keyReleased() {
  if (key != ' '){
    defender.setdirection(0);
  }
}

function keyPressed() {
  // if the player presses spacebar and the gun is ready, shoot!
  if (key === ' ') {
    shoot();
  }
  // move the defender left or right.
  if (keyCode === RIGHT_ARROW) {
    defender.setdirection(1);
  } else if (keyCode === LEFT_ARROW) {
    defender.setdirection(-1);
  }
}
