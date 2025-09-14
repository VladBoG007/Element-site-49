const button = document.querySelector('.btn');
const bodyback = document.querySelector('body');
const colors = ['yellow', 'black', 'green', 'purple', 'blue'];
button.addEventListener('click', changecolor);
function changecolor() {
	let random = Math.floor(Math.random()*colors.length)
	bodyback.style.backgroundColor = colors[random];
}