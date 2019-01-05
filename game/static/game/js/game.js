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
    // define what happens if the player loses
    if(result == 0) {
      document.getElementById('lossview')
      lossview.style.display = 'block';
    }
    // define what happens if the player wins
    else if(result == 1) {
      document.getElementById('winview')
      winview.style.display = 'block';
      Math.round(this.points);
      document.getElementById('points').textContent = this.points + " Points.";
    }
  }

  // define what the finishline looks like
  finishline(line_height, width) {
    stroke(color_blue);
    strokeWeight(4);
    line(0, line_height, width, line_height);
  }


}
