//автоматически создает цифры подсчета строк в элементах, найденных по классам или тэгам
//добавьте *элемент-контейнер* для элемента, для которого вы хотите подсчитать строки, div или что-то еще
//Функция пытается получить `line-height` из установленных (вычисленных) стилей `getComputedStyle` , поэтому очень важно установить `body{ line-height: что-то }`, или указать первый аргумент функции

//automatically creates row count numbers in elements found by classes or tags
//element, for which you want count lines must be wrapped by other, for example div or everithing else
//Function tries to find `line-height` style attribute from the `getComputedStyle` , so it very important to set up `body{ line-height: something }`, or set first function argument

function autoLinesCount(lineHeight = null, byClass = false, lineElem = "div", classesOrTags = ["code"], div1Classes = ["row"], div2Classes = ["column","autoLineColumn"]) {
	let elemsToFind = classesOrTags || ["code"];
	let byWhat = byClass || false;
	let divRowClassList = div1Classes || ["row"];
	let divColumnClassList = div2Classes || ["column","autoLineColumn"];
	let defaultLineElem = lineElem || "div";

	/* console.log(`1) elemsToFind`, elemsToFind);
	console.log(`1) typeof(lineElem)`, typeof(lineElem)); */
	
	let lineHeightStr;
	const digitsRegEx = /\d*/gi;
	let lineHeightD = 20;
	
	if(!lineHeight || (typeof(lineHeight) !== Number)) {	//we will find out the calculated row height if the function argument is not specified
		lineHeightStr = document.defaultView.getComputedStyle(document.body, null).lineHeight;	//узнаем просчитанную высоту строки, если аргумент функции не задан
		lineHeightD = lineHeightStr.match(digitsRegEx)[0];
		lineHeightD = (typeof(lineHeightD) == String) || (lineHeightD == 0) ? 20 : lineHeightD;
	} else {
		lineHeightD = lineHeight;
	}

	
	/* console.log(`2) lineHeight - `, lineHeightD); */

	let ElemsBy = [];
	ElemsBy = getElemsBy();

	function getElemsBy() {	//получаем элементы по классам или тэгам / we get elements by classes or tags
		let elems = [];
		if(byWhat) {
			for(let el of elemsToFind) {
				elems = [...elems,...document.getElementsByClassName(el)];
			}
			return elems;
		}
		for(let el of elemsToFind) {
			/* console.log(`3) el`, el); */
			elems = [...elems,...document.getElementsByTagName(el)];
			/* console.log(`4) elems`, elems); */
		}
		return elems;
	}
	/* console.log(`createLinesCount() ElemsBy.length - `, ElemsBy); */
	if (ElemsBy.length == 0) {
		/* console.log(`ElemsBy.length==0`); */
		return;
	}

	for (let elem of ElemsBy) {
	
		let ElemHeight = elem.offsetHeight;	//узнаем высоту элемента / find out the height of the element

		let linesCount = ElemHeight / lineHeightD;	//узнаем количество чисел / find out the number of numbers
		linesCount = Math.ceil(linesCount);

		/* console.log(`ElemHeight`, ElemHeight);
		console.log(`linesCount`, linesCount); */

		let divRow = document.createElement("div");	//подготавливаем блоки / preparing the blocks
		let divColumn = document.createElement("div");	//блок-колонна для чисел / block column for numbers
		let oldElem = elem;
		/* console.log(`oldElem`, oldElem); */

		divRow.classList.add(...divRowClassList);	//добавляем необходимые классы / adding the necessary classes
		divColumn.classList.add(...divColumnClassList);
		elem.classList.add("autoLineCode");

		let parentElem = elem.parentNode;

		parentElem.removeChild(parentElem.lastChild);

		for (let x = 1; x <= linesCount+1; x++) {	//создаем числа и присоединяем в колонну / we create numbers and add them to the column
			let lineElem = document.createElement(defaultLineElem);
			lineElem.innerText = `${x}`;
			divColumn.appendChild(lineElem);
		}

		divRow.appendChild(divColumn);	//присоединяем колонну с числами / we attach a column with numbers
		/* console.log(`oldElem`, oldElem); */
		divRow.appendChild(oldElem);	//присоединяем элемент, с которым работали / we attach the element that we worked with

		parentElem.appendChild(divRow);	//присоединяем готовое обратно к родительскому элементу / attaching the finished product back to the parent element
	}
}