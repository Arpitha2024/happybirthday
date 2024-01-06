const correctPassword = "bubududu";
const enteredPassword = prompt("Please enter the password:");
// enteredPassword === correctPassword
if (enteredPassword === correctPassword) {
    const audio = new Audio('audio/happy-birthday-jazz-171120.mp3');
    var audio_flag=0;
    
    const playAudio = () => {  
        audio.play();
      };

    function blaster() {
        var colors = ['#C0392B', '#ECF0F1'];
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
    }
    blaster() 
    const playButton = document.querySelector('.canvas');
    playButton.addEventListener('click', () => {
    if(audio_flag===0){
        const candle = document.querySelector('.candle');
        candle.classList.add('altered');
        playAudio();
        audio_flag=1;
        blaster() 
    }
    });
  } else {
    document.body.innerHTML = "";
    document.body.innerHTML = "<h1>Incorrect Password</h1><p>Please try again.</p>";
  }