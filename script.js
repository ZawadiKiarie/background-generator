var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.createElement("button");
button.textContent = "Random Colors";
body.appendChild(button);

const randomHexColorCode = () => {
  let n = (Math.random()*0xfffff*1000000).toString(16);
  return '#' + n.slice(0, 6);
}

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

setGradient()
css.textContent = body.style.background + ";";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", ()=> {
  color1.value = randomHexColorCode();
  color2.value = randomHexColorCode();
  setGradient()
});