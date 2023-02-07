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
var input = document.getElementById("text");
var output = document.getElementById("text-result");
var btn = document.getElementById("btn");

function capitalizeString(str) {
	return str.split('')[0].toUpperCase() + str.slice(1);
}

function letterChange() {
	var textValue = input.value;
	var words = textValue.split(' ');
	var result = '';
	words.forEach(function (word) {
		result += ' ' + capitalizeString(word);
	});
	output.innerHTML = result;
}

btn.addEventListener('click', letterChange);
