const cellContainer = document.querySelector('#cell-container')

const cell = document.createElement('div');
cell.classList.add('cell');

for (let i = 1; i <= 256; i++) {
	cellContainer.appendChild(cell.cloneNode(true));
}