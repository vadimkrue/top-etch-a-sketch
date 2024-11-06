const cellContainer = document.querySelector('#cell-container');

const cell = document.createElement('div');
cell.classList.add('cell');

let initialRatio = 16;
let cellContainerWidth = 400;
let initialCellSize = cellContainerWidth / initialRatio;

function appendCells(ratio) {
	for (let i = 1; i <=  (ratio * ratio); i++) {
		cellContainer.appendChild(cell.cloneNode(true));
	};
}

appendCells(initialRatio);

let allCells = Array.from(document.querySelectorAll('.cell'));

allCells.forEach((cell) => {
	cell.setAttribute('style', `width: ${initialCellSize}px; height: ${initialCellSize}px`);
	cell.addEventListener('mouseover', () => {
		cell.classList.add('bg-black');
	});
});

const ratioChoiceBtn = document.querySelector('#ratio-btn');

ratioChoiceBtn.addEventListener('click', () => {
	let userRatio = prompt('Choose the size of the sides of the playing field. \nNot more than 100.', '');
	if (userRatio > 100) {
		alert('Too much. Enter another number');
		return; 
	}
	
	let allCells = Array.from(document.querySelectorAll('.cell'));
	allCells.forEach(cell => cell.remove());
	allCells.length = 0;
	
	userCellSize = cellContainerWidth / userRatio;
	appendCells(userRatio);
	
	allCells = Array.from(document.querySelectorAll('.cell'));
	allCells.forEach((cell) => {
		cell.setAttribute('style', `width: ${userCellSize}px; height: ${userCellSize}px`);
		cell.addEventListener('mouseover', () => {
			cell.classList.add('bg-black');
		});
	})
});