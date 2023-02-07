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
const form = document.getElementById('calculate');
const result1 = document.getElementById('result1')
const result2 = document.getElementById('result2')
form.addEventListener('input', outputResult);

function outputResult(evt) {
	const a = parseInt(form.a.value) || 0;
	const b = parseInt(form.b.value, 10) || 0;
	result1.textContent = a + b;
	result2.textContent = a * b;
}
