let audio;

function startMusic(tipo) {
  if (audio) audio.pause();
  const path = tipo === "bambini" ? "assets/audio/bg_bambini.mp3" : "assets/audio/bg_adulti.mp3";
  audio = new Audio(path);
  audio.loop = true;
  audio.volume = 0.4;
  audio.play();
}
