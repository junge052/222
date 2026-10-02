

/* -------------------------
   CLOCK
-------------------------- */

const clock = document.querySelector("#clock");

function updateClock() {

  const now = new Date();

  const hours =
    String(now.getHours())
    .padStart(2, "0");

  const minutes =
    String(now.getMinutes())
    .padStart(2, "0");

  const seconds =
    String(now.getSeconds())
    .padStart(2, "0");

  clock.textContent =
    `${hours}:${minutes}:${seconds}`;

}

updateClock();

setInterval(
  updateClock,
  1000
);


/* -------------------------
   CUSTOM CURSOR
-------------------------- */

const cursor =
  document.querySelector("#cursor");

document.addEventListener(
  "mousemove",
  (event) => {

    cursor.style.left =
      event.clientX + "px";

    cursor.style.top =
      event.clientY + "px";

  }
);


/* -------------------------
   ASCII MOVEMENT
-------------------------- */

const ascii =
  document.querySelector("#asciiHero");

document.addEventListener(
  "mousemove",
  (event) => {

    const x =
      event.clientX /
      window.innerWidth;

    const y =
      event.clientY /
      window.innerHeight;

    const moveX =
      (x - 0.5) * 30;

    const moveY =
      (y - 0.5) * 30;

    ascii.style.transform =
      `translate(
        ${moveX}px,
        ${moveY}px
      )`;

  }
);


/* -------------------------
   SCROLL DISTORTION
-------------------------- */

window.addEventListener(
  "scroll",
  () => {

    const scroll =
      window.scrollY;

    const scale =
      1 + scroll * 0.00005;

    ascii.style.transform +=
      ` scale(${scale})`;

  }
);


/* -------------------------
   RANDOM GLITCH
-------------------------- */

function glitch() {

  document.body
    .classList
    .add("glitch");

  setTimeout(() => {

    document.body
      .classList
      .remove("glitch");

  }, 60);

}


setInterval(() => {

  if (Math.random() > 0.88) {
    glitch();
  }

}, 1200);


/* -------------------------
   TERMINAL
-------------------------- */

const commandInput =
  document.querySelector("#command");

const history =
  document.querySelector("#history");


const commands = {

  help:
    "COMMANDS: HELP / ABOUT / VOID / CLEAR / ENTER",

  about:
    "THIS PAGE IS AN UNSTABLE DIGITAL SPACE.",

  void:
    "THERE IS NOTHING HERE.",

  enter:
    "ACCESS DENIED.",

  hello:
    "HELLO.",

  whoami:
    "UNKNOWN USER.",

  time:
    () => new Date().toString()

};


/* -------------------------
   PRINT TERMINAL MESSAGE
-------------------------- */

function printLine(text) {

  const line =
    document.createElement("p");

  line.textContent =
    text;

  history.appendChild(line);

  line.scrollIntoView({
    behavior: "smooth"
  });

}


/* -------------------------
   COMMAND HANDLER
-------------------------- */

commandInput.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !== "Enter"
    ) return;


    const value =
      commandInput
        .value
        .trim()
        .toLowerCase();


    printLine(
      "> " + value
    );


    if (
      value === "clear"
    ) {

      history.innerHTML = "";

    }

    else if (
      commands[value]
    ) {

      const response =
        typeof commands[value]
        === "function"

        ? commands[value]()
        : commands[value];


      printLine(response);

    }

    else if (value) {

      printLine(
        `COMMAND NOT FOUND: ${value}`
      );

    }


    commandInput.value = "";

  }
);


/* -------------------------
   ASCII CHARACTER MUTATION
-------------------------- */

const originalASCII =
  ascii.textContent;

const characters =
  "@&%#(/*,. ";


function mutateASCII() {

  const source =
    originalASCII.split("");

  for (
    let i = 0;
    i < source.length;
    i++
  ) {

    if (
      source[i] !== "\n" &&
      Math.random() < 0.002
    ) {

      source[i] =
        characters[
          Math.floor(
            Math.random() *
            characters.length
          )
        ];

    }

  }

  ascii.textContent =
    source.join("");

}


setInterval(
  mutateASCII,
  180
);


/* -------------------------
   CLICK DISTORTION
-------------------------- */

document.addEventListener(
  "click",
  () => {

    ascii.style.filter =
      "blur(2px) contrast(200%)";

    setTimeout(() => {

      ascii.style.filter =
        "none";

    }, 100);

  }
);
/* -------------------------
   INTERVIEWS
-------------------------- */

const interviews =
  document.querySelectorAll(".interview");

interviews.forEach((interview) => {

  const button =
    interview.querySelector(
      ".interview-header"
    );

  if (!button) return;

  button.addEventListener(
    "click",
    () => {

      interview.classList.toggle(
        "open"
      );

      const symbol =
        button.lastElementChild;

      symbol.textContent =
        interview.classList.contains(
          "open"
        )
          ? "[–]"
          : "[+]";

    }
  );

});