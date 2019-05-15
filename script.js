//Sets the initial size on loading
var cells = 40;
var w = 800 / cells;
var items = 1600;
myFunction(1600);
var paint = 'black';
container = document.querySelector('#container');

//Creates the canvas
function myFunction(items) {
	for (i = 0; i < items; i++) {
		var item = document.createElement('li');
		item.classList.add('item');
		container.appendChild(item);
		item.style.background = 'white';
		item.style.width = w + 'px';
		item.style.height = w + 'px';

		//Event Listener
		item.addEventListener(
			'mouseover',
			function(e) {
				if (e.buttons === 1) {
					this.style.background = paint;
				}
				//Opacity change
				let shade = +this.style.opacity;
				if (shade < 1 && e.buttons === 1) {
					shade += 0.1;
				}
				this.style.opacity = shade;
			},
			false
		);
	}
}

//Reset button.Clean and reset
var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', reset);

//Resize
var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', newCanvas);

//Yellow
var btnY = document.querySelector('#btnY');
btnY.addEventListener(
	'click',
	() => {
		paint = 'yellow';
	},
	false
);

//Blue
var btnBlue = document.querySelector('#btnBlue');
btnBlue.addEventListener(
	'click',
	() => {
		paint = 'blue';
	},
	false
);

//Black
var btnBlack = document.querySelector('#btnBlack');
btnBlack.addEventListener(
	'click',
	() => {
		paint = 'black';
	},
	false
);

//Red
var btnR = document.querySelector('#btnR');
btnR.addEventListener(
	'click',
	() => {
		paint = 'red';
	},
	false
);

//Clean and reset function
function reset() {
	var x = document.querySelectorAll('li');
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].remove();
	}

	myFunction(items);
}

//Creates the new canvas
function newCanvas() {
	var x = document.querySelectorAll('li');
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].remove();
	}

	cells = prompt('Number of cells in a row?');
	if (isNaN(cells)) {
		alert('Please enter a number.');
		newCanvas();

		//user pressed OK on empty prompt or cancel
	} else if (cells === '' || cells === null) {
		cells = 40;
	}
	console.log(cells);
	items = cells * cells;
	w = 800 / cells;

	myFunction(items);
}
