// Задание 1
// Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
// Math.round(x)
// Math.ceil(x)
// Math.floor(x)
// В комментариях к каждой строке напишите, как работают эти округления.

//Число 5.4
const num1 = Math.round(5.4); // Округляет число до ближайшего целого
console.log(num1);

const num2 = Math.ceil(5.4); // Округляет число в большую сторону до ближайшего целого
console.log(num2);

const num3 = Math.floor(5.4); // Округляет число в меньшую сторону до ближайшего целого
console.log(num3);

//Число 5.5
const num4 = Math.round(5.5); // Округляет число до ближайшего целого
console.log(num4);

const num5 = Math.ceil(5.5); // Округляет число в большую сторону до ближайшего целого
console.log(num5);

const num6 = Math.floor(5.5); // Округляет число в меньшую сторону до ближайшего целого
console.log(num6);

//Число 5.6
const num7 = Math.round(5.6); // Округляет число до ближайшего целого
console.log(num7);

const num8 = Math.ceil(5.6); // Округляет число в большую сторону до ближайшего целого
console.log(num8);

const num9 = Math.floor(5.6); // Округляет число в меньшую сторону до ближайшего целого
console.log(num9);

// Задание 2
// Выведите в консоль фразы в 2 строки:
// Сегодня 27 октября 2022 (здесь будет ваша дата) - используйте options для вывода месяца словом
// 19 часов 20 минут (здесь будет ваше время) - используйте шаблонную строку, в которую подставьте значения с помощью методов getHours() и getMinutes()

const currentDate = new Date(); // Создаем объект даты
const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
console.log(`Сегодня ${currentDate.toLocaleDateString("ru-RU", options)}`);
console.log(
  `${currentDate.getHours()} часов ${currentDate.getMinutes()} минут`
);
