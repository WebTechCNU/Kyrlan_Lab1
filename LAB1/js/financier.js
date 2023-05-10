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
document.getElementById('form');
document.getElementById("result");
function repeatCount(initStr) {
	let strItems = initStr.split(' ');

	let result = {};
	strItems.forEach(item => {
		let normalItem = item.toLowerCase();

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