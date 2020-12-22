var y = 30;
hideElement("label5_highlight");
onEvent("button2_Stop", "click", function( ) {
stopSound();
setPosition("label5_highlight", 102, 318);
showElement("label5_highlight");
});
onEvent("button1_Previous", "click", function( ) {
setPosition("label1", 55, y);
y = y - 17;
setPosition("label1", 55, y);
if (y < 14) {
  setPosition("label1", 55, 30);
  y = 30;
}
setPosition("label5_highlight", 182, 318);
showElement("label5_highlight");
});
onEvent("button3_Next", "click", function( ) {
  setPosition("label1", 55, y);
  y = y + 17;
  setPosition("label1", 55, y);
  setPosition("label5_highlight", 252, 318);
  showElement("label5_highlight");
});
onEvent("button1_Play", "click", function( ) {
  setPosition("label5_highlight", 32, 318);
  showElement("label5_highlight");
  stopSound();
  if (y == 30) {
    playSound("assets/Ed-Sheeran--64.mp3");
  } else if ((y == 47)) {
    playSound("DJ-Snake---Taki-Taki-(Lyrics)-ft.-Selena-Gomez--Ozuna--Cardi-B-64.mp3");
  } else if ((y == 64)) {
    playSound("assets/Latest-Bhutanese-Song-2019---YA-TARU-MA-TARU---Sonam-Wangchen-_-Official-Video-64.mp3");
  } else if ((y == 81)) {
    playSound("Diplo---Get-It-Right-(feat.-M-)-(Official-Music-Video)-64.mp3");
  }
});
