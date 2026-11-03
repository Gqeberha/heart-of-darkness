
// Сценарий 1. Изменение цвета фона
function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

// Сценарий 2. Вывод текущей даты
function showDate() {
    let today = new Date();

    let date = today.toLocaleDateString("ru-RU");

    alert("Сегодняшняя дата: " + date);
}

// Сценарий 3. Удаление слов длиннее 7 букв

function removeLongWords() {
    let text = document.getElementById("userText").value;

    let words = text.split(/\s+/);

    let result = words.filter(function(word) {
        let letters = word.match(/[А-Яа-яЁё]/g) || [];
        return letters.length <= 7;
    });

    document.getElementById("userText").value = result.join(" ");
}

