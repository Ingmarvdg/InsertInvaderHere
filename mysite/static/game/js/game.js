class Game {
  constructor(invader_name = "noName", finishline_height) {

    this.points = 0;
    this.invader_name = invader_name;
    this.finishline_height = finishline_height;
  }

  // add points to the total amount
  addpoints(amount) {
    this.points = this.points + amount;
  }

  // get the current amount of points
  getpoints() {
    return(this.points);
  }

  // define what happens when the game ends
  endgame(result) {
    gamearea.style.display = 'none';
    touchcontrols.style.display = 'none';
    var endgameview = document.getElementById('endgameview');
    var endgametext = document.getElementById('endgametext');

    endgameview.style.display = 'block';
    if(result == 0) {
      endgametext.textContent = 'You lost! The ' + invader_name + " has invaded!";
      endgametext.style.color = color_red;
    } else if(result == 1) {
      endgametext.style.color = color_neon;
    }
  }

  // define what the finishline looks like
  finishline(line_height, width) {
    stroke(color_blue);
    strokeWeight(4);
    line(0, line_height, width, line_height);
  }


}
