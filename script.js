var blurDiv = document.querySelector('div');
var addNewList = document.querySelector('.addNewList');
var addNewItem = document.querySelector('.addNewItem');
var section = document.querySelector('section');
var addNewListHead = document.querySelector('#addNewListText');
var addNewItemHead = document.querySelector('#addNewItemText');
var header = document.querySelector('header');
var count = 0;
var rowCount = 0;
var addMiniCard;

function start() {
	blurDiv.classList.add('blur');
	addNewList.style.display = 'flex';
}

document.querySelector('.closeButton').addEventListener('click', () => {
	blurDiv.classList.remove('blur');
	addNewList.style.display = 'none';
});

document.querySelector('.closeButton2').addEventListener('click', () => {
	blurDiv.classList.remove('blur');
	addNewItem.style.display = 'none';
});

function addingTasks() {
	count++;

	blurDiv.classList.remove('blur');
	addNewList.style.display = 'none';
	document.querySelector('#none').style.display = 'none';

	var box = document.createElement('div');
	var boxHead = document.createElement('div');
	var boxLine = document.createElement('hr');
	var boxDeleteButton = document.createElement('div');
	var boxAddButton = document.createElement('div');

	section.appendChild(box);
	box.setAttribute('id', `box${count}`);
	box.classList.add('box');

	box.appendChild(boxHead);
	boxHead.classList.add('boxHead');
	boxHead.innerHTML = `${addNewListHead.value}`;
	
	boxHead.addEventListener('click', () => {
		var allTasks = document.querySelectorAll('.box');
		var card = boxHead.parentNode;
		var cardValue = boxHead.innerHTML;
		
		//console.log(allTasks)
		header.style.display = 'none';
		card.style.display = 'block';
		section.classList.add('sectionAround');
		//section.style.display = 'none';
		//blurDiv.appendChild(card);
		//card.classList.add('fixedPos');
		allTasks.forEach((cards)=>{
			if(cards!==card)
			cards.style.display = 'none';			
			//console.log(cards===card)
		});
		
		document.querySelector('.noneNav').style.display = 'flex';
		document.querySelector('.text').innerHTML = `<h3>${cardValue}</h3>`;

		document.querySelector('.noneNavH').addEventListener('click', () => {
			header.style.display = 'flex';
			section.classList.remove('sectionAround');
			//section.style.display = 'flex';
			document.querySelector('.noneNav').style.display = 'none';
			allTasks.forEach((cards)=>{			
			cards.style.display = 'block';	
		});
			//section.appendChild(card);
			//card.classList.remove('fixedPos');
		});

		document.querySelector('#addItem').addEventListener('click', () => {
			blurDiv.classList.add('blur');
			addNewList.style.display = 'flex';
			header.style.display = 'flex';
			//section.style.display = 'flex';
			document.querySelector('.noneNav').style.display = 'none';
			allTasks.forEach((cards)=>{			
			cards.style.display = 'block';	
		});
			//section.appendChild(card);
			//card.classList.remove('fixedPos');
		});
	});

	box.appendChild(boxLine);

	box.appendChild(boxDeleteButton);
	boxDeleteButton.classList.add('boxDeleteButton');
	boxDeleteButton.innerHTML = `<span class="material-symbols-outlined">
    delete
    </span>`;
	boxDeleteButton.addEventListener('click', () => {
		var cardDelete = boxDeleteButton.parentNode;
		cardDelete.remove();
		if(document.querySelectorAll('.box').length<1) document.querySelector('#none').style.display = 'block';
	});

	box.appendChild(boxAddButton);
	boxAddButton.classList.add('boxAddButton');
	boxAddButton.innerHTML = `+`;
	boxAddButton.addEventListener('click', () => {
		blurDiv.classList.add('blur');
		addNewItem.style.display = 'flex';
		addMiniCard = boxAddButton.parentNode;
	});
}

document.querySelector('.addItemButton').addEventListener('click', () => {
	rowCount++;
	blurDiv.classList.remove('blur');
	addNewItem.style.display = 'none';

	var row = document.createElement('div');
	var rowText = document.createElement('div');
	var rowButton = document.createElement('div');

	addMiniCard.appendChild(row);
	row.appendChild(rowText);
	row.appendChild(rowButton);

	row.setAttribute('id', `row${rowCount}`);
	row.classList.add('row');
	rowButton.classList.add('rowButton');

	rowText.innerHTML = `${addNewItemHead.value}`;
	rowButton.innerHTML = `<h6>Mark done</h6>`;
	rowButton.addEventListener('click', () => {
		var cardText = rowButton.parentNode;
		console.log(cardText);
		cardText.classList.add('strikeThrough');
		rowButton.style.display = 'none';
	});
});
