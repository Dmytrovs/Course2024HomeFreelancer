'use strict'


/* Задача №1
Що потрапить в консоль?

let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
} */

/*  Задача №2
  За допомогою циклу FOR виведіть в консоль 10 рядків:

  let items = 'Пункт №';
  for( let i = 1; i < 11; i++) {
    console.log(`${items}${i}`);
  } */


//     Задача №3
// Що потрапить в консоль ?
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
// 	console.log('000');
// }

    //Відповідь
// 0) перевод типу данних в буліан;
// 1) Виконається множення 2 * 20 буде 40, 30 /2 буде 15 
// так, як ці оператори мають у цьому коді найвищий пріорітет-12;

// 2) 40 <= 10 буде false, 15 < 5 буде false, 
// 10 <= "10" оператор <= переводить "10" у число буде tru, пріоритет-9;

// 3) 20 === "20" оператор порівнює строго і буде false, пріоритет-8;

// 4) 15 < 5 буде false && <= "10" оператор <= переводить "10" у число буде tru;

// 5) false || false || false;

// 6) результатом операції false в консоль нічого не виведеться так як умова false;
 

//  Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку 
/* 
function calcSum ( a,  b) {
  let sumNumber = a / b;
  if (sumNumber === Infinity) {
    return 'ділити на 0 не можна'
  } else if (typeof(sumNumber) === !Number) {
    return 'повертає NaN '
  }  else if (a === undefined || b === undefined) {
    return 'Ви не передали значення'
  } 
   else {
    return `Результат ділення: ${sumNumber}` 
  }
  
} 
console.log(calcSum(99, 'kkk')); //Результат ділення: NaN
console.log(calcSum(9, 0)); //ділити на 0 не можна
console.log(calcSum()); // Ви не передали значення */


// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль


/* let someArray = ['Дмитро', false, 'Жолоб', 10, 'Віталька'];
 someArray.forEach(element => {
      if (element === 10) {
        console.log('Відповідність числу 10');
      } 
}); */

