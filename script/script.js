const correctPassword = "bubududu";
// const enteredPassword = prompt("Please enter the password:");
// enteredPassword === correctPassword
if (true) {
    var colors = ['#C0392B', '#ECF0F1'];
    let audioPlaying = true;
    function stopAudioOnScroll() {
        if (audioPlaying) {
            const audio = document.getElementById('myAudio');
            audio.pause();
            audioPlaying = false;
        }
    }
    window.addEventListener('scroll', stopAudioOnScroll);
    setTimeout(() => {
        confetti({
          particleCount: 500,
          angle: 90,
          spread: 50,
          origin: { x: 0.1, y: 1.4 },
          colors: colors,
          startVelocity: 170
        });
        confetti({
          particleCount: 500,
          angle: 90,
          spread: 50,
          origin: { x: 0.3, y: 1.4 },
          colors: colors,
          startVelocity: 170
        });
        confetti({
          particleCount: 500,
          angle: 90,
          spread: 50,
          origin: { x: 0.5, y: 1.4 },
          colors: colors,
          startVelocity: 170
        });
      }, 500);
  } else {
    document.body.innerHTML = "";
    document.body.innerHTML = "<h1>Incorrect Password</h1><p>Please try again.</p>";
  }