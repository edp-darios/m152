let clicked = false;

function play() {
    if (clicked) {
        player.play();
        clicked = false;
      } else {
        player.pause();
        clicked = true;
      }
}

function volume(volume) {
    player.volume = volume
}
