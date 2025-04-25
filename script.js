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

//
//
//3) Create a function that takes a random special number like 11, 22, 33, 44 ... 99, this function randomly should log random 2 digit special number 11, 22, 33... 99 and stops when argument and random number are same.
//Example: randomNum(22)
///should log:
///22 11,
//22, 77
//22, 22 //should stop.

function randomNum(specialNumber) {
  const randomInterval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 9 + 1) * 11;
    console.log(specialNumber, randomNumber);

    if (randomNumber === specialNumber) {
      clearInterval(randomInterval);
    }
  }, 1000);
}

randomNum(22);

//4)Create a function that imitates to return fake data, use setTimeout. make both async/await and .then.catch methods.

function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { id: 1, title: "Pirveli posti" },
        { id: 2, title: "Meore posti" },
        { id: 3, title: "Mesame posti" },
      ];

      resolve(posts);
    }, 5000);
  });
}

//then da catch methodi

function fetchPostsThen() {
  getPosts()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => error.message);
}

fetchPostsThen();

// async da await methodi

async function fetchPostsAsync() {
  try {
    const post = await getPosts();
    console.log(post);
  } catch (error) {
    console.log(error.message);
  }
}

fetchPostsAsync();

//5) Create a sleep function. make a function that takes a ms as an argument and when you call this function waits untill this function resolved. use setTimeout and promises.
//eg: console.log('first')
//await sleep(2000)
//console.log('second')
//second should sleep after 2 seconds

const sleep = (ms) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
};

async function name() {
  console.log("first");
  await sleep(2000);
  console.log("second");
}

name();
