const css = document.querySelector('h3')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const body = document.getElementById('gradient')
const btn = document.querySelector('button');

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ';';
}


function randomNum() {
	return Math.floor(Math.random()*(999-100+1)+100);
}



color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)




btn.addEventListener("click", () => {
	let num = randomNum();
	let num1 = randomNum();
	body.style.background = `linear-gradient(to right, #${num}, #${num1})`;
	css.textContent = body.style.background + ';';
})
