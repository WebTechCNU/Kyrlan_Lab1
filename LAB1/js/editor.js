//Logo Info
let mylogo = document.querySelector(".logo");
let myinfo = document.querySelector(".myinfo");

mylogo.addEventListener("mouseover", showPopup);
mylogo.addEventListener("mouseout", hidePopup);

function showPopup(evt) {
	let iconPos = mylogo.getBoundingClientRect();
	myinfo.style.left = (iconPos.right - 280) + "px";
	myinfo.style.top = (window.scrollY + iconPos.top + 100) + "px";
	myinfo.style.display = "block";
}

function hidePopup(evt) {
	myinfo.style.display = "none";
}

//Task
let input = document.getElementById("text");
let output = document.getElementById("text-result");
let btn = document.getElementById("btn");

function capitalizeString(str) {
	return str.split('')[0].toUpperCase() + str.slice(1);
}

function letterChange() {
	let textValue = input.value;
	let words = textValue.split(' ');
	let result = '';
	words.forEach(function (word) {
		result += ' ' + capitalizeString(word);
	});
	output.innerHTML = result;
}

btn.addEventListener('click', letterChange);
