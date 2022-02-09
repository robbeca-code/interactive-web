const btns = document.querySelector('.colors');
const background = document.body;
const moreBtn = document.querySelector('.profile__more');

function removeClass() {
	background.classList.remove('bg-red');
	background.classList.remove('bg-green');
	background.classList.remove('bg-blue');
	background.classList.remove('bg-yellow');
	moreBtn.classList.remove('profile__more');
	moreBtn.classList.remove('btn-red');
	moreBtn.classList.remove('btn-green');
	moreBtn.classList.remove('btn-blue');
	moreBtn.classList.remove('btn-yellow');
}

function onButtonClick(event) {
	let value = event.target.dataset.value;

	switch(value) {
		case 'red' :
			removeClass();
			background.classList.add(`bg-${value}`);
			moreBtn.classList.add(`btn-${value}`);
			moreBtn.classList.add('profile__more');
			break;
		case 'green' :
			removeClass();
			background.classList.add(`bg-${value}`);
			moreBtn.classList.add(`btn-${value}`);
			moreBtn.classList.add('profile__more');
			break;
		case 'blue' :
			removeClass();
			background.classList.add(`bg-${value}`);
			moreBtn.classList.add(`btn-${value}`);
			moreBtn.classList.add('profile__more');
			break;
		case 'yellow' :
			removeClass();
			background.classList.add(`bg-${value}`);
			moreBtn.classList.add(`btn-${value}`);
			moreBtn.classList.add('profile__more');
		default :
			return;
	}
}

btns.addEventListener('click', (event)=>onButtonClick(event));