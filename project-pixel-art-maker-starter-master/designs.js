// Select size input
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
// Set the table variable
const table = document.getElementById('pixelCanvas');
// Makes a grid squares
// Height and width are set by the user 
// When size is submitted by the user, call makeGrid()
function makeGrid() {
	// Your code goes here!
	let height = inputHeight.value;
	let width = inputWidth.value;
	for (let i = 0; i < height; i++) {
		let row = document.createElement('tr');
		for (let i = 0; i < width; i++) {
			let cell = document.createElement('td');
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
}

function clearGrid() {
	table.innerHTML = '';
}

// Select color input
let color = document.getElementById('colorPicker');
// Changes color of the table squares when clicked
function colorChange() {
	color = document.getElementById('colorPicker').value;
	table.addEventListener('click', function(e) {
		e.target.style.backgroundColor = color;
	});
}