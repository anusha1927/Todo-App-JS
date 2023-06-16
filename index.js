let son;
var newAddNewListHead = '';

// document.querySelector('#addItem').addEventListener('click', () => {
function start() {
	document.querySelector('div').classList.add('blur');
	document.querySelector('.addNewList').style.display = 'flex';
}
//});

document.querySelector('.closeButton').addEventListener('click', () => {
	document.querySelector('div').classList.remove('blur');
	document.querySelector('.addNewList').style.display = 'none';
	document.querySelector('.addNewItem').style.display = 'none';
});

// document.querySelector('.addButton').addEventListener('click', () => {
// 	let addNewListHead = document.querySelector('#addNewListText').value;
// 	document.querySelector('#none').style.display = 'none';
// 	document.querySelector('div').classList.remove('blur');
// 	document.querySelector('.addNewList').style.display = 'none';
// 	document.querySelector('.addNewItem').style.display = 'none';
// 	createCards(addNewListHead);
// });

function startHead(section, card) {
	document.querySelector('#addItem').addEventListener('click', () => {
		document.querySelector('div').classList.add('blur');
		document.querySelector('.addNewList').style.display = 'flex';

		document.querySelector('header').style.display = 'flex';
		section.style.display = 'flex';
		document.querySelector('.noneNav').style.display = 'none';
		document.querySelector('section').appendChild(card);
		card.classList.remove('fixedPos');
	});
}

function addingTasks() {
	let addNewListHead = document.querySelector('#addNewListText').value;
	document.querySelector('#none').style.display = 'none';
	document.querySelector('div').classList.remove('blur');
	document.querySelector('.addNewList').style.display = 'none';
	document.querySelector('.addNewItem').style.display = 'none';
	createCards(addNewListHead);
}

function addingButton(son) {
	document.querySelector('.addItemButton').addEventListener('click', () => {
		let addNewItemHead = document.querySelector('#addNewItemText').value;
		document.querySelector('#none').style.display = 'none';
		document.querySelector('div').classList.remove('blur');
		document.querySelector('.addNewList').style.display = 'none';
		document.querySelector('.addNewItem').style.display = 'none';
		createMiniTasks(addNewItemHead, son);
	});
}

function createMiniTasks(addNewItemHead, son) {
	var row = document.createElement('div');
	var box = document.querySelector('.box');
	son.appendChild(row);
	row.innerHTML = `${addNewItemHead}`;
}

let count = 0;
function createCards(addNewListHead) {
	count++;
	var box = document.createElement('div');
	var section = document.querySelector('section');
	section.appendChild(box);
	box.classList.add('box');
	box.setAttribute('id', `${count}`);

	createCardItems(addNewListHead, box);

	deleteCard(section);

	//addMiniTasks();
	clickBoxHead(addNewListHead, section);
}

function createCardItems(addNewListHead, box) {
	var boxHead = document.createElement('div');
	var boxLine = document.createElement('hr');
	var boxDeleteButton = document.createElement('div');
	var boxAddButton = document.createElement('div');

	box.appendChild(boxHead);
	box.appendChild(boxLine);
	box.appendChild(boxDeleteButton);
	box.appendChild(boxAddButton);

	boxHead.classList.add('boxHead');
	boxDeleteButton.classList.add('boxDeleteButton');
	boxAddButton.classList.add('boxAddButton');

	boxDeleteButton.innerHTML = `<span class="material-symbols-outlined">
    delete
    </span>`;
	boxAddButton.innerHTML = `+`;
	boxHead.innerHTML = `${addNewListHead}`;

	// if (addNewListHead.length > 13) {
	// 	newAddNewListHead = addNewListHead.substring(0, 12);
	// 	boxHead.innerHTML = `${newAddNewListHead}`;
	// } else {
	// 	boxHead.innerHTML = `${addNewListHead}`;
	// }

	boxAddButton.addEventListener('click', (event) => {
		document.querySelector('div').classList.add('blur');
		document.querySelector('.addNewItem').style.display = 'flex';
		let parentDiv = event.target.parentNode;
		let parentId = parentDiv.id;
		son = document.getElementById(`${parentId}`);
		addingButton(son);
	});
}
function clickBoxHead(addNewListHead, section) {
	var boxHead = document.querySelectorAll('.boxHead');

	boxHead.forEach((button) => {
		button.addEventListener('click', () => {
			var card = button.parentNode;
			document.querySelector('header').style.display = 'none';
			section.style.display = 'none';
			document.querySelector('div').appendChild(card);
			card.classList.add('fixedPos');
			document.querySelector('.noneNav').style.display = 'flex';
			document.querySelector('.text').innerHTML = `<h3>${addNewListHead}</h3>`;

			back(section, card);

			startHead(section, card);
		});
	});
}
function back(section, card) {
	document.querySelector('.noneNavH').addEventListener('click', () => {
		document.querySelector('header').style.display = 'flex';
		section.style.display = 'flex';
		document.querySelector('.noneNav').style.display = 'none';
		document.querySelector('section').appendChild(card);
		card.classList.remove('fixedPos');
	});
}

function deleteCard(section) {
	var deleteButton = document.querySelectorAll('.boxDeleteButton');
	deleteButton.forEach((button) => {
		// for (let i = 0; i < deleteButton.length; i++) {
		// 	button = deleteButton[i];
		button.addEventListener('click', () => {
			var card = button.parentNode;
			section.removeChild(card);
		});
	});
}

function addMiniTasks() {
	// var addButton = document.querySelectorAll('.boxAddButton');
	// addButton.forEach((button) => {
	// .addEventListener('click', (event) => {
	// 	document.querySelector('div').classList.add('blur');
	// 	document.querySelector('.addNewItem').style.display = 'flex';
	// 	let parentDiv = event.target.parentNode;
	// 	let parentId = parentDiv.id;
	// 	son = document.getElementById(`${parentId}`);
	// 	addingButton();
	// });
	// });
}

// function deleteButtn(deletebtn) {
// 	deletebtn[0].addEventListener('click', () => {
// 		let r = document.querySelectorAll('.box');
// 		console.log(count);
// 		r[count].style.display = 'none';
// 		count--;
// 	});
// 	// var deleteButton = document.querySelectorAll('.boxDeleteButton');
// 	// console.log(deleteButton);
// 	// if (deleteButton) {
// 	// 	deleteButton.addEventListener('click', () => {
// 	// 		console.log(1);
// 	// 		document.querySelector('.box').style.display = 'none';
// 	// 		count--;
// 	// 	});
// 	// }
// let r = document.querySelectorAll('.boxHead');
// let ar = r[0].innerHTML.split(' ');
// console.log(ar[ar.length-1]);
// var deleteButton = document.querySelectorAll('.boxDeleteButton');
// console.log(deleteButton);
// deleteButtn(deleteButton)
// }
