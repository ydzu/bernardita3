var body = document.body;
var dragElement = document.getElementById("spinner");
var dragElementStyle = dragElement.style;
var dragElementHeight = dragElement.offsetHeight;
var dragElementWidth = dragElement.offsetWidth;

onload = adding;

function adding() {
	dragElement.addEventListener("mousedown", hold, false);
	body.addEventListener("mouseup", release, false);
}

function hold() {
	dragElement.addEventListener("mousemove", move, true);
	body.addEventListener("mousemove", move, true);
}

function release() {
	dragElement.removeEventListener("mousemove", move, true);
	body.removeEventListener("mousemove", move, true);
}

function move(event) {
	var epY = event.clientY;
	var epX = event.clientX;

	dragElementStyle.top = epY - 100 + "px";
	dragElementStyle.left = epX - 100 + "px";
}
