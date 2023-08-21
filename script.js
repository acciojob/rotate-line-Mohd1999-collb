//your JS code here. If required.
// const line = document.getElementById("line");

// line.addEventListener("mouseover", function(){
// 	console.log("first")
// 	line.classList.toggle("rotateLine");
// });

const line = document.getElementById("line");
let rotationAngle = 0;

function rotate() {
    rotationAngle += 2; //+1 to rotate Clockwise and -1 for antiClockwise
    line.style.transform = `rotate(${rotationAngle}deg)`; //used string template to generate rotating angle
    requestAnimationFrame(rotate); //this is recursive call
    //to create infinite animation/rotation
}

rotate();