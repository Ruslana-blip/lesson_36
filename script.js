'use strict';

/* 1. Перевірка на парність числа. Напишіть функцію isEven, яка приймає число, яке вводить користувач, 
в якості аргументу і повертає проміс, яка поверне "Це парне число", якщо число парне (resolve), і "Помилка, число не парне",
 якщо число непарне (reject).  */

/* const isEven = number => {
	return new Promise((resolve, reject) => {
		number % 2 === 0 ? resolve('Це парне ') : reject('Помилка, число не парне');
	});
};

const number = +prompt('Введіть число');

isEven(number)
	.then(data => console.log(data))
	.catch(err => console.error(err))
	.finally(() => console.log('Виконано')); */

// 2. Випадкова затримка. Напишіть функцію, яка повертає проміс з випадковою затримкою від 1 до 5 секунд.
/* const setTimeoutPromise = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(ms), ms);
	});
};

const delay = Math.round(Math.random() * 4000 + 1000);
setTimeoutPromise(delay).then(ms => console.log('Виконання успішне', ms)); */

/* 3. Виконання промісу з ймовірністю успіху. Напишіть функцію, яка повертає проміс, яка має вказану ймовірність
 успішного виконання (наприклад, 70%). Успішне виконання повинно повертати "Успіх", а невдачу - "Помилка". */
/* 
const randomPromis = number => {
	return new Promise((resolve, reject) => {
		number < 0.7 ? resolve('Успіх') : reject('Помилка');
	});
};

randomPromis(Math.random())
	.then(item => console.log(item))
	.catch(err => console.log(err)); */

/* 	4.* Виконання послідовних операцій. Напишіть послідовність з чотирьох промісів, де перший повертає випадкове число від 1 до 100,
	 другий множить його на 10, третій перетворює результат в масив чисел, а четвертий сортує числа по зростанню.
	  87 -> 870 -> [8, 7, 0] -> [0, 7, 8]. Затримка кожного промісу має бути більше на 1с за затримку минулого і на кожному 
		етапі має виводитись в консоль проміжний результат. */

/* const promis = new Promise((resolve, reject) => {
	setTimeout(() => {
		const randomNumber = Math.floor(Math.random() * 100);
		console.log(`Випадкове число в діапазоні від 1 до 100: ${randomNumber}`);
		resolve(randomNumber);
	}, 1000);
})
	.then(
		num =>
			new Promise(resolve => {
				setTimeout(() => {
					const multiplateNum = num * 10;
					console.log(`Число збільшене на 10: ${multiplateNum}`);
					resolve(multiplateNum);
				}, 2000);
			})
	)
	.then(
		value =>
			new Promise(resolve => {
				setTimeout(() => {
					const array = value.toString().split('');
					console.log(`Масив чисел: ${array}`);
					resolve(array);
				}, 3000);
			})
	)
	.then(
		arr =>
			new Promise(resolve => {
				setTimeout(() => {
					const sortArray = arr.sort((a, b) => a - b);
					console.log(`Відсортований масив у порядку зростання: ${sortArray}`);
					resolve(sortArray);
				}, 4000);
			})
	); */

// завдання зі  статті
// 1. виконається resolve(1)

// 2.
/* function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('виконалось через 3 секунди')); */

// 3.
/* const button = document.querySelector('button');

const showCircle = () => {
	return new Promise(resolve => {
		const circle = document.querySelector('.circle');
		circle.classList.add('message-ball');
		circle.textContent = 'Привіт, світ!';
		resolve(circle);
	});
};

button.addEventListener('click', () => {
	showCircle().then(circle => {
		circle.style.display = 'block';
		const { width, height } = circle.getBoundingClientRect();
		circle.style.width = '200px';
		circle.style.height = '200px';
		return circle;
	});
}); */
