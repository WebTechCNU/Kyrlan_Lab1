//Logo Info
var mylogo = document.querySelector(".logo");
var myinfo = document.querySelector(".myinfo");

mylogo.addEventListener("mouseover", showPopup);
mylogo.addEventListener("mouseout", hidePopup);

function showPopup(evt) {
	var iconPos = mylogo.getBoundingClientRect();
	myinfo.style.left = (iconPos.right - 280) + "px";
	myinfo.style.top = (window.scrollY + iconPos.top + 100) + "px";
	myinfo.style.display = "block";
}

function hidePopup(evt) {
	myinfo.style.display = "none";
}

//Task
const form = document.getElementById('form');
const output = document.getElementById("result");;

function repeatCount(initStr) {
	const strItems = initStr.split(' ');

	const result = {};
	strItems.forEach(item => {
		const normalItem = item.toLowerCase();

		if (normalItem in result) {
			result[normalItem] = result[normalItem] + 1;
		} else {
			result[normalItem] = 1;
		}
	});

	return Object.keys(result).map(k => {
		return `${k}: ${result[k]} повторення\n`
	}).join('')
}