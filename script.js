//1) Create a countdown bomb:
//bombTimer(seconds) logs each second until it hits 0 and then logs "💥 Boom!".
//Add a defuse() function that can be called anytime before 0 to cancel the countdown. If successful, log “🧯 Defused!”.

function bombTimer(seconds) {
  let counter = seconds;
  let defused = false;

  const interval = setInterval(() => {
    if (defused) {
      clearInterval(interval);
      console.log("🧯 Defused!");
      return;
    }

    if (counter > 0) {
      console.log(counter);
      counter--;
    } else {
      clearInterval(interval);
      console.log("💥 Boom!");
    }
  }, 1000);

  return () => (defused = true);
}

const defuse = bombTimer(5);
setTimeout(defuse, 3000);

//
//
//
//2) Create a function that takes a string and logs each character one by one every 200ms — like a typewriter effect.
//Example:
//typeText("Hello world");
//Should log:
//H (0.2s)...e...l...

function typeText(text) {
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length) {
      console.log(text[index]);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

typeText("Hello world");
