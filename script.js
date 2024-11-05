const cellContainer = document.querySelector('#cell-container');

const cell = document.createElement('div');
cell.classList.add('cell');

let initialRatio = 16;
let cellContainerWidth = 400;
let initialCellSize = cellContainerWidth / initialRatio;

for (let i = 1; i <= (initialRatio * initialRatio); i++) {
	cellContainer.appendChild(cell.cloneNode(true));
};

const allCells = Array.from(document.querySelectorAll('.cell'));

allCells.forEach((cell) => {
	cell.setAttribute('style', `width: ${initialCellSize}px; 
		height: ${initialCellSize}px`);
	cell.addEventListener('mouseover', () => {
		cell.classList.add('bg-black');
	});
});

const ratioChoiceBtn = document.querySelector('#ratio-btn');
ratioChoiceBtn.addEventListener('click', () => {
	let userRatio = prompt('Choose the size of the sides of the playing field', '');
	userCellSize = cellContainerWidth / userRatio;
	
	for (let i = 1; i <= (userRatio * userRatio); i++) {
		cellContainer.appendChild(cell.cloneNode(true));
	};
	
	const allCells = Array.from(document.querySelectorAll('.cell'));

	allCells.forEach((cell) => {
		cell.setAttribute('style', `width: ${userCellSize}px; height: ${userCellSize}px`)
	})

	allCells.forEach((cell) => {
		cell.setAttribute('style', `width: ${userCellSize}px; 
			height: ${userCellSize}px`);
		cell.addEventListener('mouseover', () => {
			cell.classList.add('bg-black');
		});
	});
});


