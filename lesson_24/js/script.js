'use strict'

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

/* const itemElement = document.querySelectorAll('.item');

if (itemElement) {
itemElement.forEach(itemElement => {
  itemElement.addEventListener ("click", () => {
		itemElement.classList.toggle('active')
  })
})
}  */

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener("load", pageLoaded)
function pageLoaded(e) {
	document.documentElement.classList.add('loaded')
}


// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

        //========== Варіант 1 ========================
/* const headerElement = document.querySelector('.header');
const footerElement = document.querySelector('.footer');

headerElement.addEventListener ("mouseenter", () => {
		footerElement.style.backgroundColor = 'green';
  })

  headerElement.addEventListener ("mouseleave", () => {
      footerElement.style.backgroundColor = 'orange';
    }) */

    //========== Варіант 2 ========================   
/* const headerElement = document.querySelector('.header');
const footerElement = document.querySelector('.footer');

if (headerElement && footerElement) {
  headerElement.addEventListener("mouseenter", creepingCursorColor);
  headerElement.addEventListener("mouseleave", creepingCursorColor);
  function creepingCursorColor (e) {
    if (e.type === "mouseenter") {
      footerElement.classList.add('color-footer');
    } else if (e.type === "mouseleave") {
      footerElement.classList.remove('color-footer');
    }
  }
} */


// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

/* 
 const item = document.querySelector('.item');

function changeContentElement () {
  let counterItem = 0;
  let delay = parseInt(item.getAttribute('data-delay'));
  let max = parseInt(item.getAttribute('data-value'));
  let intervalItem =  setInterval ( ()=> {
      item.textContent = `item ${counterItem}`;
      counterItem++
      if (counterItem > max) {
        clearInterval(intervalItem)
      }
    }, delay)
}


function scrollItem (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      changeContentElement(entry.target);
      observer.unobserve(entry.target);
    }
  })
}

const observer = new IntersectionObserver(scrollItem)
observer.observe(item)  */