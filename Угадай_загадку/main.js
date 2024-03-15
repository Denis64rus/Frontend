const riddle = {
    question: 'Висит груша, нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['Это не съедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(str) {
        // прописать логику проверки правильного ответа
        // alert для пользователя, console.log()
        if (this.tries < 1) {
            console.log('Игра окончена');
            return alert('Игра окончена'); // return - код ниже выполняться уже не будет
        }

        if (str.toLowerCase().includes(this.correctAnswer)){
            alert('Правильный ответ'); // для пользователя
            console.log('Правильный ответ'); // для разработчика
        } else {
            alert('Неправильный ответ'); // для пользователя
            console.log('Неправильный ответ'); // для разработчика
            this.tries--; // уменьшаем попытки в случае неверного ответа

            const hint = this.hints[this.tries === 2 ? 0 : 1]; // логика вызова подсказок  0 - true  1 - false

            if (this.tries) {
                alert('Подсказка: ' + hint);
            }
        }
    }
}

// window - встроенный объект
window.onload = function() {
    // document -встроенный объект для подключения/обращения к html-документу
    // getElementById('riddle') - подключиться к элементу html через id
    // .innerText - вставь текст откуда-то
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    const input = document.getElementsByTagName('input')[0];

    const guessedAnswer = input.value;

    if (guessedAnswer) {
        // вызвать функцию checkAnswer() у объекта загадки, передав туда ответ
        riddle.checkAnswer(guessedAnswer);
    }
}