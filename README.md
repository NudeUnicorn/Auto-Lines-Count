# Auto-Lines-Count 🔢
Automatically count lines for `code` tags, or elements with classes you chose

## How to use
look at [example](https://github.com/NudeUnicorn/Auto-Lines-Count/tree/main/Example)

> Function tries to find `line-height` style attribute from the `getComputedStyle` , so it very important to set up `body{ line-height: something }`, or set first function argument


- just link `autoLinesCount.js` and `autoLinesStyle.css` files

```html
<link rel="stylesheet" type="text/css" href="autoLinesStyle.css">

<script src="autoLinesCount.js"></script>
```

- add *element-container* for element you want to count lines, div or something else

- and give to that element a class, which you will put like argument of a function
(without any arguments function seek for `code` tag, so you can set second and 4th argument for selecting by class)

```html
<h1>Русская матрёшка ♥ Russian Matryoshka Doll</h1>
  <div> 
<!-- element, for which you want count lines must be wrapped by other, for example div or everithing else -->
    <p class="exampleForCount">A matryoshka doll is a wooden doll consisting of two separable parts, inside which there are dolls of the same shape, but smaller, inserted one into the other. The smallest of the dolls does not separate. The outer surface of each of the dolls is painted</p>
  </div>
  <div>
    <p  class="aBitDifferentClass">For the first time, the "Japanese" myth appeared in the book "Matryoshka" by authors E. Mozhaeva and A. Heifitz, published in 1969. He was eagerly picked up by Japanese researchers, despite the fact that no Fukuruma deity exists, Daruma and Kokeshi dolls are not detachable, and Elizaveta Mamontova has never been to Japan. The version about the "Seven Gods of Happiness" was taken from some Japanese Internet site and added without verification by Professor Meshcheryakov to his lecture on the history of cultural ties between Russia and Japan, from where it then got into Wikipedia </p>
      </div>

<script>

    autoLinesCount(null, true, "div", ["exampleForCount","aBitDifferentClass"]);
    
</script>
```

**And `enjoy`!🎉**

# Автосчетчик строк 🔢
Считает количество строк для тэгов `code` или элементов с классами, которые вы выбрали

## Как использовать
посмотрите на [пример](https://github.com/NudeUnicorn/Auto-Lines-Count/tree/main/Example)

> Функция пытается получить `line-height` из установленных (вычисленных) стилей `getComputedStyle` , поэтому очень важно установить `body{ line-height: что-то }`, или указать первый аргумент функции

- привяжите файлы `autoLinesCount.js` и `autoLinesStyle.css`

```html
<link rel="stylesheet" type="text/css" href="autoLinesStyle.css">

<script src="autoLinesCount.js"></script>
```

- добавьте *элемент-контейнер* для элемента, для которого вы хотите подсчитать строки, div или что-то еще

- присвойте этому элементу класс, который вы будете использовать как аргумент функции
(без каких-либо аргументов функция ищет тег `code`, поэтому вы можете задать второй и четвертый аргументы для выбора по классу)

```html
<h1>Русская матрёшка ♥ Russian Matryoshka Doll</h1>
  <div> 
<!-- element, for which you want count lines must be wrapped by other, for example div or everithing else -->
    <p class="exampleForCount">Матрешка — это деревянная кукла, состоящая из двух разъединяемых частей, внутри которой находятся куклы такой же формы, но меньшего размера, вставленные одна в другую. Самая маленькая из кукол не разъединяется. Внешняя поверхность каждой из кукол раскрашена</p>
  </div>
  <div>
    <p  class="aBitDifferentClass">Впервые «японский» миф появился в книге «Матрешка» авторов Е. Можаевой и А. Хейфица, изданной в 1969 году. Он был охотно подхвачен японскими исследователями, несмотря на то, что никакого божества Фукурумы не существует, куклы Дарума и Кокэси не являются разъемными, а Елизавета Мамонтова никогда не бывала в Японии. Версия про «Семь богов счастья» была взята с какого-то японского интернет-сайта и без проверки добавлена профессором Мещеряковым в свою лекцию об истории культурных связей между Россией и Японией, откуда затем попала в Википедию. </p>
      </div>

<script>

    autoLinesCount(null, true, "div", ["exampleForCount","aBitDifferentClass"]);
    
</script>
```

**И `возрадуйтесь`!🎉**


# Arguments of a function

```js
function autoLinesCount(lineHeight = null, byClass = false, lineElem = "div", classesOrTags = ["code"], div1Classes = ["row"], div2Classes = ["column","autoLineColumn"]) {...}
```
## You can:

|lineHeight|type line height of the lines|
| --- | ---- |
|byClass|choose, how elements wiil be collected, by tag or class|
| lineElem|choose which type of html tag will be created as line number|
| classesOrTags  | set classes or tags, where you want to count lines  |
| div1Classes  | set you classes for first conteiner |
| div2Classes  | and same for column with numbers | 


# Аргументы функции

```js
function autoLinesCount(lineHeight = null, byClass = false, lineElem = "div", classesOrTags = ["code"], div1Classes = ["row"], div2Classes = ["column","autoLineColumn"]) {...}
```
## Вы можете:

|lineHeight|установите высоту строк с цифрами|
| --- | ---- |
|byClass|выберите как собирать элементы, по тэгу или классу|
| lineElem|выберите, какой html элемент будет создан в качестве строки с числом|
| classesOrTags  | введите тэги или классы, в которых хотите подсчитать строки  |
| div1Classes  | установите классы для первого контейнера |
| div2Classes  | и так же для колонны с цифрами | 

