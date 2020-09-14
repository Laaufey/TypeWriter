"use strict";

window.addEventListener("load", start);

function start() {
  const typeWriter = document.querySelector("#typewriter");
  const typeWriterString = typeWriter.textContent;
  typeWriter.textContent = "";
  let i;
  let text = "";

  for (i = 0; i < typeWriterString.length; i++) {
    let char = typeWriterString.charAt(i);
    addChar(char, text, typeWriter, i);
  }
  console.log(typeWriterString);
}

function addChar(char, text, typeWriter, i) {
  setTimeout(() => {
    console.log(i);
    text = typeWriter.textContent;
    typeWriter.textContent = text + char;
  }, i * 200);
}
