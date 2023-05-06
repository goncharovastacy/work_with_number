'use strict';

const button = document.getElementById('button');
const text = document.getElementById('text');

function workWithNumber () {
    const input = document.getElementById('input').value;
    //делим число на цифры, убираем лишние символы из отрицательных и дробных чисел, получаем массив
    const arr = input.replace(/[.-]/g, '').split('');
    //получаем цифры
    const numbers = arr.join(', ');
    //получаем количество цифр
    const numbersLength = arr.length;
    //вычисляем сумму цифр
    const sum = arr.reduce((acc, item) => Number(acc) + Number(item));
    //выводим цифры в обратном порядке
    const reverse = arr.reverse().join('');

    text.innerHTML = `Нам даны цифры: ${numbers} <br>
    Цифр в числе: ${numbersLength} <br>
    Сумма: ${sum} <br>
    Обратный порядок: ${reverse}`;

  }
  
  button.addEventListener('click', workWithNumber);
  