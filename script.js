//your JS code here. If required.
const line = document.getElementById("line");

line.addEventListener("mouseover", function(){
	console.log("first")
	line.classList.toggle("rotateLine");
});