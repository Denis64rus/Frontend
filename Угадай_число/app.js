const secretNum = Math.ceil(Math.random() * 10);
let tries = 0;

function guessNum(num) {
    // условие на проверку количества попыток
    if (tries >= 5) return alert('Игра окончена!');
    // условие для победы в игре
    if (num === secretNum) {
        alert('Вы угадали');
        // для завершения игры после победы
        tries = 5;
    } else if (num > secretNum) { // Подсказка 1
        alert('Загаданное число меньше');
        tries++; // счетчик попыток
    } else { // Подсказка 2
        alert('Загаданное число больше');
        tries++; // счетчик попыток
    }
}