const container = document.getElementsByClassName("pallte")[0];
const btn = document.querySelector(".refresh-btn");
const sound = document.getElementById("myAudio");
let maxBox = 16;

const generatePlates = () => {
  document.innerHTML = "";
  sound.play();
  for (let i = 0; i < maxBox; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    const color = document.createElement("div");
    color.classList.add("color-card");
    console.warn(randomHex);
    color.innerHTML = ` <div class="color" style="background:${randomHex}" ></div>
  <span id="color-name">${randomHex}</span>`;
    container.appendChild(color);
    color.addEventListener("click", () => copyColor(color, randomHex));
  }
};
const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector("#color-name");
  navigator.clipboard.writeText(hexVal);
  colorElement.innerText = "Copied 🦄";
  sound.play();
  setTimeout(() => (colorElement.innerText = hexVal), 1000);
};
btn.addEventListener("click", generatePlates);
