window.onload = init;

  function init(){
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }

var copyTextareaBtn = document.querySelector('.btn-copy');
copyTextareaBtn.addEventListener('click', function(event) {
  var link = document.getElementById('game_url');
  var range = document.createRange();
  range.selectNode(link);
  window.getSelection().addRange(range);

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'succesful' : 'unsuccesful';
    console.log('Copying link command was ' + msg);
  } catch(err) {
    console.log('Copying link command was ' + msg);
  }
  window.getSelection().removeAllRanges();
});



function get_add_filename(image_number) {
  if(image_number == 0) {
    t = document.getElementById('defender_btn')
    t.textContent = 'Defender is selected'
  } else if(image_number == 1){
    t = document.getElementById('invader_btn')
    t.textContent = 'Invader is selected'
  }
}
