function copylink() {
  /* Get the text field */
  var copyText = document.getElementById('game_url').textContent;
  console.log(copyText);
  console.log("ples");
  copytext = toString(copyText);

  /* Select the text field */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("copied the link to clipboard");
}

function get_add_filename(image_number) {
  if(image_number == 0) {
    t = document.getElementById('defender_btn')
    t.textContent = 'Defender is selected'
  } else if(image_number == 1){
    t = document.getElementById('invader_btn')
    t.textContent = 'Invader is selected'
  } else if(image_number == 2){
    t = document.getElementById('projectile_btn')
    t.textContent = 'Projectile is selected'
  }
  console.log(image_number)
}
