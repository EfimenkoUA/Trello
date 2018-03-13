'use strict'
var arrPersDesk = [];
var arrSpisok = [];
var arrCart = [];
var arrChangeCart = [];
var arrSearch = [];

if (localStorage.getItem('cart')!=undefined) {
		arrCart = JSON.parse(localStorage.getItem('cart'));
};
if(localStorage.getItem('changeCart')!=undefined) {
		arrChangeCart = JSON.parse(localStorage.getItem('changeCart'));
};
if(localStorage.getItem('arrSearch')!=undefined) {
		arrSearch = JSON.parse(localStorage.getItem('arrSearch'));
};
let winLoad = () => {
	if (localStorage.getItem('persDesk')!=undefined) {
		arrPersDesk = JSON.parse(localStorage.getItem('persDesk'));
	};
	if (localStorage.getItem('spisok')!=undefined) {
		arrSpisok = JSON.parse(localStorage.getItem('spisok'));
	};
	if (localStorage.getItem('cart')!=undefined) {
		arrCart = JSON.parse(localStorage.getItem('cart'));
	};
	//если есть созданные персональные доски, то скрываем одни и показываем другие блоки
	let createNewDesk = document.querySelector('.createNewDesk');
	let persDeskName = document.querySelector('.persDeskName');
	if(arrPersDesk.length >= 1){
		createNewDesk.style.display = 'none';
		persDeskName.style.display = 'block';
	}
	outPersDesk();
	delCart();
}

window.addEventListener('load', winLoad);
//главная страница клик по полю поиск и его расширение

let sourchLong = () => {
	let sl = document.querySelector('#sourchText');
	let searchBlockHeader = document.querySelector('.searchBlockHeader');
	let slWidth = document.querySelector('#sourchText').offsetWidth;
	let mainSW = document.querySelector('#mainSourch').offsetWidth;
	let lup = document.querySelector('.headerLup');
	let cloth = document.querySelector('.sourchTextClothe');
	let mainWidth = (slWidth/mainSW)*100;
	mainWidth = Math.round(mainWidth) + '%';
	if(mainWidth == 36+'%' || mainWidth == 37 + '%'){
		cloth.style.display = 'block';
		searchBlockHeader.style.display = 'block';
		setTimeout(function() {
			sl.style.width = 60+'%';
			sl.style.transition = '.5s';
			lup.style.left = 25 + '%';
			lup.style.transition = '.5s';
			cloth.style.left = 24 + '%';
			cloth.style.transition = '.5s';
			searchBlockHeader.style.display = '.5s';
		}, 100)
	}
}

let sourchP = document.querySelector('#sourchText');
sourchP.addEventListener('click', sourchLong);

// клик по блоку + 
let cb1 = () => {
	// проверяем открыт ли блок inform, если да то закрываем его
	let inform = document.querySelector('.informText').style.display;
	let informBlock = document.querySelector('.informText');

	if(inform == 'block'){
		informBlock.style.display = 'none';
	}

	// проверяем открыт ли блок userBlock и если да то закрываем его
	let usbl = document.querySelector('.userBlock');
	let usblStyle = document.querySelector('.userBlock').style.display;

	if(usblStyle == 'block'){
		usbl.style.display = 'none';
	}

	let dis = document.querySelector('.plusTextMain').style.display;
	let disMain = document.querySelector('.plusTextMain');
	if(dis == 'block'){
		disMain.style.display = 'none';
	}else{
		disMain.style.display = 'block';
	}
}

let blp = document.querySelector('#plusButton');
blp.addEventListener('click', cb1);

let cb2 = () => {
	let dis = document.querySelector('.plusTextMain').style.display;
	let disMain = document.querySelector('.plusTextMain');
	if(dis == 'block'){
		disMain.style.display = 'none';
	}
}

let plusTextMainCloth = document.querySelector('#plusTextMainCloth');
plusTextMainCloth.addEventListener('click', cb2);

//клик по значку i
let cb3 = () => {
	// проверяем открыт ли блок plus, если да то закрываем его
	let dis = document.querySelector('.plusTextMain').style.display;
	let disMain = document.querySelector('.plusTextMain');
	if(dis == 'block'){
		disMain.style.display = 'none';
	}

	// проверяем открыт ли блок userBlock и если да то закрываем его
	let usbl = document.querySelector('.userBlock');
	let usblStyle = document.querySelector('.userBlock').style.display;

	if(usblStyle == 'block'){
		usbl.style.display = 'none';
	}

	// клик по кнопке i, открытие и закрытие блока
	let inform = document.querySelector('.informText').style.display;
	let informBlock = document.querySelector('.informText');

	if(inform == 'block'){
		informBlock.style.display = 'none';
	}else{
		informBlock.style.display = 'block';
	}
}

let informButton = document.querySelector('#informButton');
informButton.addEventListener('click', cb3);

//закрытие блока inform по клику на кнопку внутри блока
let cb4 = () => {
	let inform = document.querySelector('.informText').style.display;
	let informBlock = document.querySelector('.informText');

	if(inform == 'block'){
		informBlock.style.display = 'none';
	}
}

let ittb = document.querySelector('#ittb');
ittb.addEventListener('click', cb4);

// клик по круглой кнопке клик с инициалами пользователя
let cb5 = () => {
	// проверяем открыт ли блок inform, если да то закрываем его
	let inform = document.querySelector('.informText').style.display;
	let informBlock = document.querySelector('.informText');

	if(inform == 'block'){
		informBlock.style.display = 'none';
	}

	// проверяем открыт ли блок plus, если да то закрываем его
	let dis = document.querySelector('.plusTextMain').style.display;
	let disMain = document.querySelector('.plusTextMain');
	if(dis == 'block'){
		disMain.style.display = 'none';
	}

	let usbl = document.querySelector('.userBlock');
	let usblStyle = document.querySelector('.userBlock').style.display;

	if(usblStyle == 'block'){
		usbl.style.display = 'none';
	}else{
		usbl.style.display = 'block';
	}
}

let userButton = document.querySelector('#userButton');
userButton.addEventListener('click', cb5)

// клик по крестику внутри блока userBlock и его закрытие
let cb6 = () => {
	let usbl = document.querySelector('.userBlock');
	let usblStyle = document.querySelector('.userBlock').style.display;

	if(usblStyle == 'block'){
		usbl.style.display = 'none';
	}else{
		usbl.style.display = 'block';
	}

}

let clothUserBut = document.querySelector('#clothUserBut');
clothUserBut.addEventListener('click', cb6);

let cb7 = (e) => {
	//определяем элемент по которому был клик
	let res = e.target;
	// если тип элемента кнопка тогда делаем следующие
	let rBut = document.querySelector('.rBut');
	let rButStyle = document.querySelector('.rBut').style.display;
	let rButMin = document.querySelector('.rButMin');
	let rButMinStyle = document.querySelector('.rButMin').style.display;
	// кнопки персональные доски
	let pdBut = document.querySelector('.pdBut');
	let pdButStyle = document.querySelector('.pdBut').style.display;
	let pdButMin = document.querySelector('.pdButMin');
	let pdButMinStyle = document.querySelector('.pdButMin').style.display;
	if(res.type == 'submit'){
		let resName = res.getAttribute('id');
		// блок недавние
		if(resName == 'recentButton'){
			if(rButStyle == 'block'){
				rBut.style.display = 'none';
				rButMin.style.display = 'block';
			}else{
				rBut.style.display = 'none';
				rButMin.style.display = 'block';
			}
		}else if(resName == 'recentButtonMin'){
			if(rButMinStyle == 'block'){
				rButMin.style.display = 'none';
				rBut.style.display = 'block';
			}else{
				rButMin.style.display = 'block';
			}
		}
		// блок персональные доски
		if(resName == 'personalDeskButton'){
			if(pdButStyle == 'block'){
				pdBut.style.display = 'none';
				pdButMin.style.display = 'block';
			}else{
				pdBut.style.display = 'none';
				pdButMin.style.display = 'block';
			}
		}else if(resName == 'personalDeskButtonMin'){
			if(pdButMinStyle == 'block'){
				pdButMin.style.display = 'none';
				pdBut.style.display = 'block';
			}else{
				pdButMin.style.display = 'block';
			}
		}

	}
	 
}

let buttonDeskMain = document.querySelector('.buttonDeskMain');
buttonDeskMain.addEventListener('click', cb7);

// клик по кнопки доски и вывод меню 
let cb8 = () => {
	let buttonDeskMain = document.querySelector('.buttonDeskMain');
	let buttonDeskMainStyle = document.querySelector('.buttonDeskMain').style.display;

	if(buttonDeskMainStyle == 'block'){
		buttonDeskMain.style.display = 'none';
	}else{
		buttonDeskMain.style.display = 'block';
	}
}

let btnDesk = document.querySelector('#btnDesk');
btnDesk.addEventListener('click', cb8);

// событие создание новой доски по клику на "создать новую доску"
let cb9 = () => {
	let creatNDF = document.querySelector('.createNewDeskForm');
	let creatNDFstyle = document.querySelector('.createNewDeskForm').style.display;

	if(creatNDFstyle == 'block'){
		creatNDF.style.display = 'none';
	}else{
		creatNDF.style.display = 'block';
	}
}

let createNewDeskBut = document.querySelector('#createNewDeskBut');
createNewDeskBut.addEventListener('click', cb9);

// клик по крестику в форме создать новую доску
let cb10 = () => {
	let creatNDF = document.querySelector('.createNewDeskForm');
	let creatNDFstyle = document.querySelector('.createNewDeskForm').style.display;

	if(creatNDFstyle == 'none'){
		creatNDF.style.display = 'block';
	}else{
		creatNDF.style.display = 'none';
	}
}

let cndftb = document.querySelector('#cndftb');
cndftb.addEventListener('click', cb10);

//создание новой доски, добаление названия в массив досок и вывод ее на экран
let cb11 = () => {
	let res = document.querySelector('#inputNameDesk').value;
	let priv = document.querySelector('.priv').textContent;
	let res1 = document.querySelector('#inputNameDesk');
	let createNewDeskForm = document.querySelector('.createNewDeskForm');

	// создаем объект который будем добавлять в массив
	let temp = {};
	temp.name = res;
	temp.privat = priv;
	let i = arrPersDesk.length;
	arrPersDesk[i] = temp;
	localStorage.setItem('persDesk', JSON.stringify(arrPersDesk));
	res1.value = '';
	createNewDeskForm.style.display = 'none';
	//если есть созданные персональные доски, то скрываем одни и показываем другие блоки
	let createNewDesk = document.querySelector('.createNewDesk');
	let persDeskName = document.querySelector('.persDeskName');
	if(arrPersDesk.length >= 1){
		createNewDesk.style.display = 'none';
		persDeskName.style.display = 'block';
	}
	outPersDesk();

}

let mcb = document.querySelector('#mcb');
mcb.addEventListener('click', cb11);

function outPersDesk() {
	let spisokPersDesk = document.querySelector('.spisokPersDesk');
	let spisokPersDeskChild = document.querySelector('.spisokPersDesk').children;
	let createNewDesk = document.querySelector('.createNewDesk');
	let spisokPersDeskBlock = document.querySelector('.spisokPersDeskBlock1');
	let spisokPersDeskBlockStyle = document.querySelector('.spisokPersDeskBlock1').style.display;
	let end = spisokPersDeskChild.length;
	// удаление созданых блоков перед выводом новых
	//debugger
	if(arrPersDesk.length == 0){
		let s = 1;
		for(let i = 0; i < s; i++){
			for(let j = 0; j < spisokPersDeskChild.length; j++){
				let resCl = spisokPersDeskChild[j].getAttribute('class');
				if(resCl == 'spisokPersDeskBlock'){
					let res2 = spisokPersDeskChild[j];
					console.log(res2)
					res2.remove();
					j = j - 1;
				}
			}
		}
	}else{
		for(let i = 0; i < arrPersDesk.length; i++){
			for(let j = 0; j < spisokPersDeskChild.length; j++){
				let resCl = spisokPersDeskChild[j].getAttribute('class');
				if(resCl == 'spisokPersDeskBlock'){
					let res2 = spisokPersDeskChild[j];
					res2.remove();
					j = j - 1;
				}
			}
		}	
	}

	if(arrPersDesk.length > 0){
		spisokPersDeskBlock.style.display = 'block';
		createNewDesk.style.display = 'none';
	}else{
		spisokPersDeskBlock.style.display = 'none';
		createNewDesk.style.display = 'block';
	}
	// перебираем массив объектов и выводим доски на экран
	for(let key in arrPersDesk){	
		let div = document.createElement('div');
		div.setAttribute('class', 'spisokPersDeskBlock');
		spisokPersDesk.insertBefore(div, spisokPersDeskBlock);
		let button = document.createElement('button');
		button.setAttribute('id', arrPersDesk[key].name);
		button.setAttribute('class', 'buttonOpenDesk');
		button.innerHTML = arrPersDesk[key].name;
		div.appendChild(button);
	}
}

// открытия блока для добавления новой доски
let cb12 = () => {
	let createNewDeskForm = document.querySelector('.createNewDeskForm');
	createNewDeskForm.style.display = 'block';
}

let spdb = document.querySelector('#bod');
bod.addEventListener('click', cb12);

// обработчик на клик по доске, закрывает главный экран и открывает доску
let cb13 = (e) => {
	let res = e.target.getAttribute('id');
	
	if(res == 'bod'){
		let createNewDeskForm = document.querySelector('.createNewDeskForm');
		createNewDeskForm.style.display = 'block';
	}else if(res != null){	
		//закрываем один экран и открываем другой
		let mainBlock = document.querySelector('.mainBlock');
		let secondBlock = document.querySelector('.secondBlock');
		let mainSp = document.querySelector('.mainSp');
		let width = screen.width;
		let height = screen.height;
		mainBlock.style.display = 'none';
		secondBlock.style.display = 'block';
		// secondBlock.style.width = width+'px';
		secondBlock.style.height = height+'px';
		mainSp.style.minHeight = 10+'%';
	}

	// выводим название доски
	let secondBlockDeskNameButton = document.querySelector('.secondBlockDeskNameButton');
	let secondBlockPersNameButton = document.querySelector('.secondBlockPersNameButton');
	let secondBlockPrivNameButton = document.querySelector('.secondBlockPrivNameButton');
	let nameBlock = e.target.textContent;

	for(let key in arrPersDesk){
		if(arrPersDesk[key].name == nameBlock){
			secondBlockDeskNameButton.innerHTML = arrPersDesk[key].name;
			secondBlockPrivNameButton.innerHTML = arrPersDesk[key].privat;
		}
	} 
	outSpisok();
}

let bodd = document.querySelector('.spisokPersDesk');
bodd.addEventListener('click', cb13);


//форма для создания нового списока в доске
let cb14 = (e) => {
	let res = e.target.getAttribute('id');
	let formNewSp = document.querySelector('.formNewSp');
	let formNewSpBut = document.querySelector('.formNewSpBut');
	let inputNewSp = document.querySelector('#inputNewSp');
	if(res == 'inputNewSp'){
		formNewSp.style.background = '#'+'f7f4f4';
		formNewSpBut.style.display = 'block';
		inputNewSp.style.background = '#'+'e6e2e2';
		inputNewSp.style.borderWidth = 1 +'px';
		inputNewSp.style.borderStyle = 'solid';
		inputNewSp.style.borderColor = '#'+'a9a7a7';
		//событие закрытие формы для создания нового списка на доске
	}else if(res == 'closeCreatNewSp'){
		formNewSp.style.background = 'none';
		formNewSpBut.style.display = 'none';
		inputNewSp.style.background = '#'+'1389cc';
		inputNewSp.style.border = 'none';
	}
}

let inputNewSpClick = document.querySelector('.formNewSp');
inputNewSpClick.addEventListener('click', cb14);

//кликаем по логотипу трело и переходим на главную страницу
let cb15 = () => {
	let mainBlock = document.querySelector('.mainBlock');
	let secondBlock = document.querySelector('.secondBlock');

	mainBlock.style.display = 'block';
	secondBlock.style.display = 'none';

	//если при переходе на главную открыт блок меню доски закрываем его
	let displayStatus = document.querySelector('.menuDeskBlok');
	displayStatus.style.display = 'none'; 
}

let logoButtonClick = document.querySelector('#logoButton');
logoButtonClick.addEventListener('click', cb15);

//создание нового списка, добаление названия в массив списков и вывод ее на экран
let cb16 = () => {
	let res = document.querySelector('#inputNewSp').value;
	let res1 = document.querySelector('#inputNewSp');
	let formNewSpBut = document.querySelector('.formNewSpBut');
	let nameD = document.querySelector('.secondBlockDeskNameButton').textContent;
	let formNewSp = document.querySelector('.formNewSp');
	let inputNewSp = document.querySelector('#inputNewSp');

	//создаем объект который будем добавлять в массив
	if(res.length == 0){
		alert('Укажите название списка');
	}else{
		let temp = {};
		temp.nameDesk = nameD;
		temp.nameSpisok = res; 
		let i = arrSpisok.length;
		arrSpisok[i] = temp;
		localStorage.setItem('spisok', JSON.stringify(arrSpisok));
		//поле добавить список возвращаем в неактивное положение
		res1.value = '';
		formNewSp.style.background = 'none';
		formNewSpBut.style.display = 'none';
		inputNewSp.style.background = '#'+'1389cc';
		inputNewSp.style.border = 'none';
	}
	outSpisok();
}

let saveNewSpClick = document.querySelector('#saveNewSp');
saveNewSpClick.addEventListener('click', cb16);

function outSpisok(){
	let mainSp = document.querySelector('.mainSp');
	let formNewSp = document.querySelector('.formNewSp');
	let mainSpChild = document.querySelector('.mainSp').children;
	let desk = document.querySelector('.sbdnb').textContent;
	
	// даляем из dom дерева ранее созданые элементы
	if(arrSpisok.length == 0){
		for(let i = 0; i < 1; i++){
		for(let j = 0; j < mainSpChild.length; j++){
			let res = mainSpChild[j];
			
			let resAttr = res.getAttribute('class');
			if(resAttr != 'formNewSp'){
				res.remove();
				j = j - 1;
			}else{

			}
		}
	}
	}else{
		for(let i = 0; i < arrSpisok.length; i++){
			for(let j = 0; j < mainSpChild.length; j++){
				let res = mainSpChild[j];
			
				let resAttr = res.getAttribute('class');
				if(resAttr != 'formNewSp'){
					res.remove();
					j = j - 1;
				}else{

				}
			}
		}
	}
	
	//перебираем массив списков и выводим списки на экран

	for(let key in arrSpisok){
		if(arrSpisok[key].nameDesk === desk){
			//создаем главный блок списка
			let div = document.createElement('div');
			div.setAttribute('id', /*arrSpisok[key].nameDesk + */arrSpisok[key].nameSpisok);
			div.setAttribute('class', 'sp');
			mainSp.insertBefore(div, formNewSp);
			//создаем основные блоки списка
			let div2 = document.createElement('div');
			div2.setAttribute('class', 'topHeaderSp');
			div.appendChild(div2);
			//оздаем input с названием списка
			let inpHeaderSp = document.createElement('div');
			inpHeaderSp.setAttribute('class', 'inpHeaderSp');
			div2.appendChild(inpHeaderSp);
			let inpH = document.createElement('input');
			inpH.setAttribute('id', 'inp' + arrSpisok[key].nameSpisok);
			inpH.setAttribute('class', 'inp');
			inpH.value = arrSpisok[key].nameSpisok;
			inpHeaderSp.appendChild(inpH);
			//создаем кнопку инф в inpTopHead
			let div3 = document.createElement('div');
			div3.setAttribute('class', 'menuSpis');
			div2.appendChild(div3);
			let div3But = document.createElement('button');
			div3But.setAttribute('class', 'butMenuSpis');
			div3But.innerHTML = '...';
			div3.appendChild(div3But);
			//оздаем блок для вывода карточек
			let div10 = document.createElement('div');
			div10.setAttribute('id', arrSpisok[key].nameSpisok + 'Cart');
			let spisok = arrSpisok[key].nameSpisok;
			div.appendChild(div10);
			
			//блок вывода карточек на экран
			for(let key in arrCart){
				if(arrCart[key].nameSpisok == spisok){
					let div11 = document.createElement('div');
					div11.setAttribute('class', 'divCart');
					div10.appendChild(div11);
					let div11But = document.createElement('button');
					div11But.setAttribute('id', arrCart[key].nameCart);
					div11But.setAttribute('class', 'battonCart');
					div11But.innerHTML = arrCart[key].nameCart;
					div11.appendChild(div11But)
					//создаем еще одну кнопку коректировка карточки
					let divButHid = document.createElement('div');
					divButHid.setAttribute('class', 'settingCart');
					div11.appendChild(divButHid);
					let butHid = document.createElement('button');
					butHid.setAttribute('class', 'changeCart');
					butHid.innerHTML = 'i';
					divButHid.appendChild(butHid);
				}	
			}

			//создаем блок добавления карточки
			let div5 = document.createElement('div');
			div5.setAttribute('class', 'addNewCart');
			div5.setAttribute('id', 'addNewCart' + arrSpisok[key].nameSpisok)
			div.appendChild(div5);
			let div5input = document.createElement('textarea');
			div5input.setAttribute('id', 'nameNewcart');
			div5input.setAttribute('class', 'nNc');
			div5.appendChild(div5input);
			//создаем блок кнопок создать карточку и закрыть блок создания карточки
			let div6 = document.createElement('div');
			div6.setAttribute('class', 'addCartButtonBlock');
			div6.setAttribute('id', 'addCartButtonBlock' + arrSpisok[key].nameSpisok)
			div.appendChild(div6);
			let div6ButAdd = document.createElement('button');
			div6ButAdd.setAttribute('id', 'addNewCartBut');
			div6ButAdd.innerHTML = 'Добавить';
			div6.appendChild(div6ButAdd);
			let div6ButClose = document.createElement('button');
			div6ButClose.setAttribute('id', 'closeAddNewCartBlock');
			div6ButClose.innerHTML = 'X';
			div6.appendChild(div6ButClose);
			let div6menu = document.createElement('button');
			div6menu.setAttribute('id', 'addCartMenu');
			div6menu.innerHTML = '...';
			div6.appendChild(div6menu);
			//создаем кнопку добавить карточку
			let div4 = document.createElement('button');
			div4.setAttribute('id', 'add' + arrSpisok[key].nameSpisok);
			div4.setAttribute('class', 'addCartButton');
			div4.innerHTML = 'Добавить карточку...';
			div.appendChild(div4);
		}
	}
}

//ВНИМАНИЕ ГЛОБАЛЬНАЯ ПЕРЕМЕННАЯ НЕОБХОДИМА ДЛЯ ПЕРЕДАЧИ В БЛОК ИЗМЕНЕНИЯ КАРТЧКИ
var ncn;
//событие клика на список и в зависимости от кнопки срабатывают действия
//создаем переменную для хранения имени доски в которую необходимо перенести список
var des;
let cb17 = (e) => {

	let res = e.target.previousElementSibling;
	let resClass;
	try{
		resClass = res.getAttribute('class');
	}catch(e){
	}finally{
	}
	let resId = e.target.getAttribute('id');
	let resCl = e.target.getAttribute('class');
	// клик по кнопке добавить карточку
	let res2;
	try{
		res2 = res.previousElementSibling;
	}catch(e){
	}finally{
	}
	if(resClass == 'addCartButtonBlock'){
		res.style.display = 'block';
		res2.style.display = 'block';
	}else if(resId == 'closeAddNewCartBlock'){
		//клик по кнопке закрыть блок создания карточки
		e.target.parentNode.style.display = 'none';
		e.target.parentNode.previousElementSibling.style.display = 'none';	
	}else if(resId == 'addNewCartBut'){
		//клик добавить карточку создаем новый объект с именем карточки и добавляем его в массив
		let nameD = document.querySelector('.sbdnb').textContent;
		let nameS = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.firstChild.value;
		let nameC = e.target.parentNode.previousElementSibling.firstChild.value;
		
		let temp = {};
		temp.nameDesk = nameD;
		temp.nameSpisok = nameS;
		temp.nameCart = nameC;
		let i = arrCart.length;
		arrCart[i] = temp;
		localStorage.setItem('cart', JSON.stringify(arrCart));

		// очищаем поле значения карты и закрываем ввод карты
		nameC = '';
		e.target.parentNode.style.display = 'none';
		e.target.parentNode.previousElementSibling.style.display = 'none';
		outSpisok();	
	}else if(resCl == 'changeCart') {
		//клик по редактированию карточки и открытия блока редактирования карточки
		let openBlock = document.querySelector('.changeCartBlock');
		let nameCart = document.querySelector('#cartNameTextarea');
		ncn = e.target.parentNode.parentNode.firstChild.textContent;
		let width = screen.width;
		let height = screen.height;
		nameCart.value = ncn;
		//определяем стили у открывающегося блока
		openBlock.style.display = 'block';
		openBlock.style.display = 'flex';
		openBlock.style.height = height + 'px';
		//создаем и добавляем объект в массив для изменений в списке arrCart
		let nameD = document.querySelector('.sbdnb').textContent;
		let nameS = e.target.parentNode.parentNode.parentNode.previousElementSibling.firstChild.firstChild.value;
		
		let temp = {};
		temp.nameDesk = nameD;
		temp.nameSpisok = nameS;
		temp.nameCart = ncn;
		let i = arrChangeCart.length;
		arrChangeCart[i] = temp;
		localStorage.setItem('changeCart', JSON.stringify(arrChangeCart)); 
	}else if(resCl == 'butMenuSpis'){
		//создаем блок изменение списка
		let mainBlock = e.target.parentNode.parentNode.parentNode;
		let div = document.createElement('div');
		div.setAttribute('class', 'changeSpisok');
		mainBlock.appendChild(div);
		//создаем блок заголовок
		let div1 = document.createElement('div');
		div1.setAttribute('class', 'changeSpisocHeader');
		div.appendChild(div1);
		//создаем блоки в заголовке
		let divHeader = document.createElement('div');
		divHeader.setAttribute('class', 'changeSpisocHeaderText');
		divHeader.innerHTML = 'Действия со списком';
		div1.appendChild(divHeader);
		//кнопка закрытия изменения в списке
		let divBut = document.createElement('div');
		divBut.setAttribute('class', 'butBlockChangeSpisokClothe');
		div1.appendChild(divBut);
		let butClothe = document.createElement('button');
		butClothe.setAttribute('id', 'butCloherChSp');
		butClothe.innerHTML = 'X';
		div1.appendChild(butClothe);
		//создаем кнопку "Переместить список"
		let divPerem = document.createElement('div');
		divPerem.setAttribute('class', 'peremSp');
		div.appendChild(divPerem);
		let peremSpBut = document.createElement('button');
		peremSpBut.setAttribute('id', 'peremSpButton');
		peremSpBut.innerHTML = 'Переместить список...';
		divPerem.appendChild(peremSpBut);
		//создаем кнопку "Удалить список"
		let divDel = document.createElement('div');
		divDel.setAttribute('class', 'dSp');
		div.appendChild(divDel);
		let delSpBut = document.createElement('button');
		delSpBut.setAttribute('id', 'dSpButton');
		delSpBut.innerHTML = 'Удалить список...';
		divDel.appendChild(delSpBut);
	}else if(resId == 'butCloherChSp'){
		//закрываем блок "Изменить список"
		let changeSp = document.querySelector('.changeSpisok');
		changeSp.remove();
	}else if(resId == 'dSpButton'){
		//удаляем список из массива списков
		let resD = e.target.parentNode.parentNode.parentNode;
		let resDId = resD.getAttribute('id');
		console.log(resDId)
		
		//удаляем список из массива arrSpiskov
		for(let i = 0; i < arrSpisok.length; i++){
			for(let key in arrSpisok){
				let end = key;
				if(arrSpisok[key].nameSpisok == resDId){
					arrSpisok.splice(end, 1);
				}
			}
		}
		localStorage.setItem('spisok', JSON.stringify(arrSpisok));
	 	//удаляем карточки из массива arrCart у удаляемого списка
		for(let i = 0; i < arrCart.length; i++){
			for(let key in arrCart){
				let end = key;
				if(arrCart[key].nameSpisok == resDId){
					arrCart.splice(end, 1);
				}
			}
		}
		localStorage.setItem('cart', JSON.stringify(arrCart));
		
		//закрываем блок "Изменить список"
		let changeSp = document.querySelector('.changeSpisok');
		changeSp.remove();
		outSpisok();
	}else if (resId == 'peremSpButton'){
		//блок переместить список
		let chSpBlock = document.querySelector('.changeSpisok');
		chSpBlock.style.display = 'none';
		let mainBlock = e.target.parentNode.parentNode.parentNode;
		// создаем блок выбора доски в которую перемистить список
		let div = document.createElement('div');
		div.setAttribute('class', 'chooseDeskMain');
		mainBlock.appendChild(div);
		// создаем блок header блока изменения списка
		let divHeader = document.createElement('div');
		divHeader.setAttribute('class', 'chooseBlockHeader');
		div.appendChild(divHeader);
		//создаем блок со стрелочкой возврата в предыдущее меню
		let divButPrev = document.createElement('div');
		divButPrev.setAttribute('class', 'chooseBlockHeaderPrev');
		divHeader.appendChild(divButPrev);
		//создаем кнопку возврат в предыдущее меню с блока выбора блока для переноса
		let prevBut = document.createElement('button');
		prevBut.setAttribute('id', 'chooseBlockPrevBut');
		prevBut.innerHTML = '<';
		divButPrev.appendChild(prevBut);
		//создаем блок в котором указываем заголовок блока перемещения
		let headerText = document.createElement('div');
		headerText.setAttribute('class', 'headerTextChooseBlock');
		headerText.innerHTML = 'Перемещение списка';
		divHeader.appendChild(headerText);
		//создаем блок кнопки клик по которой закрывает блок перемещения 
		let chooseBlockClothe = document.createElement('div');
		chooseBlockClothe.setAttribute('class', 'chooseBlockClothe');
		divHeader.appendChild(chooseBlockClothe);
		//создаем кнопку закрытия блока перемещения 
		let chooseButClothe = document.createElement('button');
		chooseButClothe.setAttribute('id', 'chooseButClothe');
		chooseButClothe.innerHTML = 'X';
		chooseBlockClothe.appendChild(chooseButClothe);
		//создаем кнопку выборка доски для перемещения
		let chooseDeskBlock = document.createElement('div');
		chooseDeskBlock.setAttribute('class', 'chooseDeskBlock');
		div.appendChild(chooseDeskBlock);
		//создаем кнопку выбора доски
		let deskName = document.querySelector('.sbdnb').textContent;
		let chooseDeskButton = document.createElement('button');
		chooseDeskButton.setAttribute('id', 'chooseDeskButton');
		chooseDeskButton.innerHTML = 'Доска' + `<br>` + `<span>`+ deskName +`<span>`;
		chooseDeskBlock.appendChild(chooseDeskButton);
		//создаем кнопку 'применить'
		let choose = document.createElement('button');
		choose.setAttribute('id', 'chooseDesk');
		choose.innerHTML = 'Переместить';
		div.appendChild(choose);
	}else if(resId == 'chooseButClothe'){
		//закрываем блок переместить список и блок изменить список
		//закрываем блок "Изменить список"
		let changeSp = document.querySelector('.changeSpisok');
		changeSp.remove();
		//закрываем блок 'Переместить список'
		let chooseDesk = document.querySelector('.chooseDeskMain');
		chooseDesk.remove();
	}else if(resId == 'chooseBlockPrevBut'){
		//закрываем блок переместить список и возвращаемся в блок действия со списком
		let chooseDesk = document.querySelector('.chooseDeskMain');
		chooseDesk.remove();
	}else if(resId == 'chooseDeskButton'){
		let ss = document.querySelector('.selectBlock');
		if(ss != null){
			ss.remove();
		}else{
			//создаем блок выбора доски в которую переместить выбранный список
			let div = document.querySelector('.chooseDeskBlock');
			let divSelect = document.createElement('div');
			divSelect.setAttribute('class', 'selectBlock');
			div.appendChild(divSelect);
			//создаем имя заголовка
			let header = document.createElement('h5');
			header.innerHTML = 'Доски';
			divSelect.appendChild(header);
			//создаем список в котором будем выводить доски
			let ul = document.createElement('ul');
			header.appendChild(ul);
			//создаем li в который будем выводить список
			for(let key in arrPersDesk){
				let li = document.createElement('li');
				li.setAttribute('class', 'newNameDesk');
				li.innerHTML = arrPersDesk[key].name;
				ul.appendChild(li);
			}
		}
	}else if(resCl == 'newNameDesk'){
		des = e.target.textContent;
		let ss = document.querySelector('.selectBlock');
		ss.remove();
	}else if(resId == 'chooseDesk'){
		if(des == undefined){
			alert('Выбирете доску для перемещения')
		}
		let parentId = e.target.parentNode.parentNode.getAttribute('id');
		//перебираем массив arrSpisok и меняем название доски
		for(let key in arrSpisok){
			if(arrSpisok[key].nameSpisok == parentId && des != undefined){
				arrSpisok[key].nameDesk = des;
			}
		}
		localStorage.setItem('spisok', JSON.stringify(arrSpisok));

		//перебираем массив arrCart и меняем название доски
		for(let key in arrCart){
			if(arrCart[key].nameSpisok == parentId && des != undefined){
				arrCart[key].nameDesk = des;
			}
		}
		localStorage.setItem('cart', JSON.stringify(arrCart));
		outSpisok();
	}
}
let acb = document.querySelector('.mainSp');
acb.addEventListener('click', cb17);

//события в блоку изменить карточку
let cb18 = (e) => {
	let tag = e.target;
	let tagId = e.target.getAttribute('id');
	let openBlock = document.querySelector('.changeCartBlock');
	let name = document.querySelector('#cartNameTextarea').value;
	
	if(tagId == 'ccbc'){
		//закрытие блока изменения карточки
		openBlock.style.display = 'none';
		delCart();
	} else if(tagId == 'deleteCart'){
		//удаляем карточку и закрываем блок изменений
		for(let key in arrChangeCart){
			for(let keys in arrCart){
				let end = keys;
				if(arrCart[keys].nameDesk == arrChangeCart[key].nameDesk && arrChangeCart[key].nameSpisok == arrCart[keys].nameSpisok && arrChangeCart[key].nameCart == arrCart[keys].nameCart ){
					arrCart.splice(end, 1);
					localStorage.setItem('cart', JSON.stringify(arrCart));
					openBlock.style.display = 'none';
					arrChangeCart.splice(0, 1);
					outSpisok();
					break
				}
			}
		}
	} else if(tagId == 'saveNewNameCart'){
		// изменить имя карточки
		let newName = document.querySelector('#cartNameTextarea').value;
		for(let key in arrChangeCart){
			for(let keys in arrCart){
				if(arrCart[keys].nameDesk == arrChangeCart[key].nameDesk && arrChangeCart[key].nameSpisok == arrCart[keys].nameSpisok && arrChangeCart[key].nameCart == arrCart[keys].nameCart ){
					arrCart[keys].nameCart = newName;
					localStorage.setItem('cart', JSON.stringify(arrCart));
					openBlock.style.display = 'none';
					arrChangeCart.splice(0, 1);
					outSpisok();
					break
				}
			}
		}

	}
}
let changeCartBlock = document.querySelector('.changeCartBlock');
changeCartBlock.addEventListener('click', cb18);

// функция очистки массива arrChangeCart
function delCart () {
	for(let i = 0; i < arrCart.length; i++){
		arrChangeCart.splice(0, 1);
	}
	localStorage.setItem('changeCart', JSON.stringify(arrChangeCart));
}

// функция открытия меню Доски 
let cb19 = () => {
	let displayStatus = document.querySelector('.menuDeskBlok');
	let display = document.querySelector('.menuDeskBlok').style.display;
	if(display == 'block'){
		displayStatus.style.display = 'none';
	}else{
		displayStatus.style.display = 'block';
	}
}

let openDeskDelBl = document.querySelector('#menuDeskButt');
openDeskDelBl.addEventListener('click', cb19);

//блок событий в блоке menuDeskBlok
let cb20 = (e) => {
	let resId = e.target.getAttribute('id');

	//закрываем блок меню доски
	if(resId == 'clothDeskbutton'){
		let displayStatus = document.querySelector('.menuDeskBlok');
		displayStatus.style.display = 'none'; 
	}else if(resId == 'buttonDelDesk'){
		// удаляем выбранную доску
		let nameDesk = document.querySelector('.sbdnb').textContent;
		
		// удаляем доску из массива arrPersDesk
		for(let i = 0; i < arrPersDesk.length; i++){
			for(let key in arrPersDesk){
				let end = key;
				if(arrPersDesk[key].name == nameDesk){
					arrPersDesk.splice(end, 1);
				}
			}
		}
		localStorage.setItem('persDesk', JSON.stringify(arrPersDesk));
		
		if(arrPersDesk.length == 1){
			for(let i = 0; i < arrPersDesk.length; i++){
				for(let key in arrPersDesk){
					let end = key;
					if(arrPersDesk[key].name == nameDesk){
						arrSpisok.splice(end, 1);
						localStorage.setItem('persDesk', JSON.stringify(arrPersDesk));
					}
				}
			}
		}
		//удаляем список с название доски
		
		for(let i = 0; i < arrSpisok.length; i++){
			for(let key in arrSpisok){
				let end = key;
				if(arrSpisok[key].nameDesk == nameDesk){
					arrSpisok.splice(end, 1);
					localStorage.setItem('spisok', JSON.stringify(arrSpisok));
				}
			}
		}
		if(arrSpisok.length == 1){
			for(let i = 0; i < arrSpisok.length; i++){
				for(let key in arrSpisok){
					let end = key;
					if(arrSpisok[key].nameDesk == nameDesk){
						arrSpisok.splice(end, 1);
						localStorage.setItem('spisok', JSON.stringify(arrSpisok));
					}
					console.log(arrSpisok)
				}
			}
		}
		
		// удаляем карточки с названием доски
		for(let i = 0; i < arrCart.length; i++){
			for(let key in arrCart){
				let end = key;
				if(arrCart[key].nameDesk == nameDesk){
					arrCart.splice(end, 1);
				}
			}
		}
		if(arrCart.length == 1){
			for(let i = 0; i < arrCart.length; i++){
				for(let key in arrCart){
					let end = key;
					if(arrCart[key].nameDesk == nameDesk){
						arrCart.splice(end, 1);
					}
				}
			}
		}
		localStorage.setItem('cart', JSON.stringify(arrCart));
	}
	outPersDesk();
	//переходим на главную страницу с досками
	let mainBlock = document.querySelector('.mainBlock');
	let secondBlock = document.querySelector('.secondBlock');
	let menuDeskBlok = document.querySelector('.menuDeskBlok');
	let persDeskName = document.querySelector('.persDeskName');

	mainBlock.style.display = 'block';
	secondBlock.style.display = 'none';
	menuDeskBlok.style.display = 'none';

	if(arrPersDesk.length == 0){
		persDeskName.style.display = 'none';
	}

}

let menuDeskBlocksob = document.querySelector('.menuDeskBlok');
menuDeskBlocksob.addEventListener('click', cb20);

// фунция поиска доски или карточки и вывод их в блок с результатами поиска
let cb21 = () => {
	let rezBlock = document.querySelector('.rezSearch');
	let rezBlockChild = document.querySelector('.rezSearch').children;
	let vel = document.querySelector('#sourchText').value;
	let velLength = vel.length;
	

	//удаляем результаты предыдущего поиска из dom-дерева
	for(let i = 0; i < rezBlockChild.length; i++){
		rezBlockChild[i].remove();

	}
	for(let i = 0; i < rezBlockChild.length; i++){
		rezBlockChild[i].remove();

	}

	//блок удаления элементов из массива arrSearch
	for(let i = 0; i < arrSearch.length; i++){
		arrSearch.splice(0)
	}


	//блок поиска совпадений и добавление в массив arrSearch результатов
	// поиск в массиве rrPersDesk
	for(let i = 0; i < arrPersDesk.length; i++){
		let itog = arrPersDesk[i].name.substring(0,velLength);
		if(vel == itog && velLength > 0){
			//создаем объект и добавляем в массив arrSearch
			let temp = {};
			temp.name = arrPersDesk[i].name;
			temp.secondName = 'desk';
			let j = arrSearch.length;
			arrSearch[j] = temp;
			itog = '';
		}
	}
	

	// поиск в массиве arrSpisok
	for(let i = 0; i < arrSpisok.length; i++){
		let itog = arrSpisok[i].nameSpisok.substring(0,velLength);
		if(vel == itog && velLength > 0){
			//создаем объект и добавляем в массив arrSearch
			let temp = {};
			temp.name = arrSpisok[i].nameSpisok;
			temp.secondName = 'spisok';
			arrSearch.push(temp);
			itog='';
		}
	}

	//поиск в массиве arrCart
	for(let i = 0; i < arrCart.length; i++){
		let itog = arrCart[i].nameCart.substring(0,velLength);
		if(vel == itog && velLength > 0){
			//создаем объект и добавляем в массив arrSearch
			let temp = {};
			temp.name = arrCart[i].nameCart;
			temp.secondName = 'cart';
			arrSearch.push(temp);
			itog='';
		}
	}

	localStorage.setItem('search', JSON.stringify(arrSearch));
	// выводим результаты в HTML
	if(arrSearch.length > 0){
		//блок вывода результатов досок
		let div = document.createElement('div');
		div.setAttribute('class', 'desk');
		div.innerHTML = 'Доски';
		rezBlock.appendChild(div);
		let divBut = document.createElement('div');
		divBut.setAttribute('class', 'divPoisk');
		div.appendChild(divBut);
		for(let key in arrSearch){
			if(arrSearch[key].secondName == 'desk'){
				let but = document.createElement('button');
				but.setAttribute('class', 'rezBut');
				but.setAttribute('id', 'p'+ arrSearch[key].name);
				but.innerHTML = arrSearch[key].name;
				divBut.appendChild(but);
			}
		}
		//блок вывода результатов списков
		let divSpis = document.createElement('div');
		divSpis.setAttribute('class', 'spisok');
		divSpis.innerHTML = 'Списки';
		rezBlock.appendChild(divSpis);
		let divButSp = document.createElement('div');
		divButSp.setAttribute('class', 'divPoiskSp');
		divSpis.appendChild(divButSp);
		for(let key in arrSearch){
			if(arrSearch[key].secondName == 'spisok'){
				let but = document.createElement('button');
				but.setAttribute('class', 'rezBut');
				but.setAttribute('id', 'p'+ arrSearch[key].name);
				but.innerHTML = arrSearch[key].name;
				divButSp.appendChild(but);
			}
		}
		//блок вывода результатов списков
		let divCart = document.createElement('div');
		divCart.setAttribute('class', 'cart');
		divCart.innerHTML = 'Карточки';
		rezBlock.appendChild(divCart);
		let divButCart = document.createElement('div');
		divButCart.setAttribute('class', 'divPoiskCart');
		divCart.appendChild(divButCart);
		for(let key in arrSearch){
			if(arrSearch[key].secondName == 'cart'){
				let but = document.createElement('button');
				but.setAttribute('class', 'rezBut');
				but.setAttribute('id', 'p'+ arrSearch[key].name);
				but.innerHTML = arrSearch[key].name;
				divButCart.appendChild(but);
			}
		}
	}
}

let searchFun = document.querySelector('#sourchText');
searchFun.addEventListener('keyup', cb21);

//блок клика по результатам поиска и перехо в соответствующую доску
var nD;
let cb22 = (e) => {
	let res = e.target;
	if(res.type == 'submit'){
		let resText = res.textContent;
		// перебираем массив досок для поиска совпадения
		for(let key in arrPersDesk){
			if(arrPersDesk[key].name == resText){
				nD = resText;
				searchRezDesk(nD);
			}
		}
		//ищем совпадения в массиве arrSpisok
		for(let key in arrSpisok){
			if(arrSpisok[key].nameSpisok == resText){
				nD = arrSpisok[key].nameDesk;
				searchRezDesk(nD);
			}
		}
		//ищем совпадения в массиве arrCart
		for(let key in arrCart){
			if(arrCart[key].nameCart == resText){
				nD = arrCart[key].nameDesk;
				searchRezDesk(nD);
			}
		}
	}
}

let searchBlockH = document.querySelector('.searchBlockHeader');
searchBlockH.addEventListener('click', cb22);

function searchRezDesk(nd){
	let res = nd;
	
	if(res == 'bod'){
		let createNewDeskForm = document.querySelector('.createNewDeskForm');
		createNewDeskForm.style.display = 'block';
	}else if(res != null){	
		//закрываем один экран и открываем другой
		let mainBlock = document.querySelector('.mainBlock');
		let secondBlock = document.querySelector('.secondBlock');
		let mainSp = document.querySelector('.mainSp');
		let width = screen.width;
		let height = screen.height;
		mainBlock.style.display = 'none';
		secondBlock.style.display = 'block';
		// secondBlock.style.width = width+'px';
		secondBlock.style.height = height+'px';
		mainSp.style.minHeight = 10+'%';
	}

	// выводим название доски
	let secondBlockDeskNameButton = document.querySelector('.secondBlockDeskNameButton');
	let secondBlockPersNameButton = document.querySelector('.secondBlockPersNameButton');
	let secondBlockPrivNameButton = document.querySelector('.secondBlockPrivNameButton');
	let nameBlock = res;

	for(let key in arrPersDesk){
		if(arrPersDesk[key].name == nameBlock){
			secondBlockDeskNameButton.innerHTML = arrPersDesk[key].name;
			secondBlockPrivNameButton.innerHTML = arrPersDesk[key].privat;
		}
	} 
	outSpisok();
}

// если клик не по клавише то окно закрывается
let closeWindow = () => {
	//закрытие окна поиска на главной странице по клику на body
	let sl = document.querySelector('#sourchText');
	let searchBlockHeader = document.querySelector('.searchBlockHeader');
	let slWidth = document.querySelector('#sourchText').offsetWidth;
	let mainSW = document.querySelector('#mainSourch').offsetWidth;
	let cloth = document.querySelector('.sourchTextClothe');
	let mainWidth = (slWidth/mainSW)*100;
	mainWidth = Math.round(mainWidth) + '%';
	if(mainWidth == 61 + '%' || mainWidth == 60 + '%'){
		cloth.style.display = 'none';
		sl.value = '';
		searchBlockHeader.style.display = 'none';
		let lup = document.querySelector('.headerLup');
		sl.style.width = 36+'%';
		sl.style.transition = '.5s';
		lup.style.left = 17 + '%';
		lup.style.transition = '.5s';
		cloth.style.left = 16 + '%';
		cloth.style.transition = '.5s';
		searchBlockHeader.style.transition = '.5s';
	}
}

let body = document.body;
body.addEventListener('click', closeWindow);

