'use strict'

// Задача №1
// Отримати в константу елемент <body>

/* const bodyElement = document.body;
console.log(bodyElement); */

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

/* function listToBody(numberOfItems = 5) {
    const ul = document.createElement('ul');
    for (let i = 0; i < numberOfItems; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i + 1}`;
        ul.append(li);
    }
    document.body.prepend(ul);
}

listToBody(); */



// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зелений.

//  document.body.classList.add('loader');
//     const title = document.createElement('h1');
//     const greenColor = document.querySelector('.loader');
//     if (document.body.classList.contains('loader')) {
//         greenColor.style.color = 'green';
//         title.textContent = `Зелений колір`;
//         document.body.prepend(title);
//     } else {
//         console.log('клас loaded у елемента <body> відсутній');
//     }
    
// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

/* const itemLi = document.querySelectorAll('.item');
console.log(itemLi);

itemLi.forEach((someItem, index) => {
	someItem.classList.add('.active');
    someItem.textContent = `Елемент № ${index + 1}`
}); */



// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

/* const button = document.querySelector('.button');
if (button) {
	button.scrollIntoView({
		block: 'nearest',
		inline: "nearest",
		behavior: "smooth"
	})
} */


// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Потім отримати значення атрибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

/* let  valueAtributeLink = document.querySelector('.link');

let velueArb = valueAtributeLink.getAttribute('data-velue');
velueArb = parseInt(velueArb);

if (velueArb < 200) {
    valueAtributeLink.style.color = 'red'
} else {
    valueAtributeLink.textContent = 'Буде зелений текст та великий шрифт'
    valueAtributeLink.style.cssText = `
        color: green;
        font-size: 70px;
    `
} */


