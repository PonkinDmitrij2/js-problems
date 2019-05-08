/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
  const stringsNum = [...number];

  const result = stringsNum.reduce((acc, item, i) => {
    item = Number(item);

    if (i < 3) {
      acc[0] ? acc[0] += item : acc[0] = item;
    }

    if (i >= 3) {
      acc[1] ? acc[1] += item : acc[1] = item;
    }

    return acc;
  }, []);

  return result[0] === result[1];
}

module.exports = checkTicket;
