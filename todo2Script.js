const list = document.getElementById('taskList');                           // Задаём константу с id для списка заметок 
const input = document.getElementById('taskInput');                         // Задаём константу с id для запроса текста заметок
const button = document.getElementById('addTask');                          // Задаём контсанту с id для кнопки добавления новой заметки

async function loadTasks() {                                                // Добавляем асинхронность для всего кода, чтобы весь код мог работать, пока ждёт данных из API
    const response = await fetch('https://deploy-0jms.onrender.com/api/tasks');        // Задаём константу для запроса данных из API
    const tasks = await response.json();                                    // Задаём константу для получения данных с json

    list.innerHTML = '';                                                    // Очищаем список перед перерисовкой, чтобы не дублировать задачи
    tasks.forEach((task) => {                                               // Открывем тело массива с перебором каждого элемента
        const li = document.createElement('li');                            // Задаём константу для обозначения каждой заметки
        const btn = document.createElement('button');                       // Задаём константу для кнопки удаления        
        btn.textContent = task.text;                                        // Указываем данные каждой заметки как заданные пользователем данные
        btn.setAttribute('aria-label', `Удалить задачу: ${task.text}`);     // Устанавливаем кнопке текст
        btn.addEventListener('click', async () => {                         // Задаём кнопке функцию удаления
            await fetch(`https://deploy-0jms.onrender.com/api/tasks/${task.id}`, {     // Запрашиваем данные из API нужного элемента по id
                method: 'DELETE'                                            // Задаём метод взаимодействия с данными на удаление
            });
            loadTasks();                                                    // Перезапрашиваем список для после удаления нужных данных
        });

        li.appendChild(btn);                                               // Добавляем созданный элемент в список на странице
        list.appendChild(li);
    });
}

button.addEventListener('click', async () => {                              // Добавляем функцию на добавление новой заметку по нажатию кнопку "Добавить"
    const text = input.value.trim();                                        // Добавляем константу на считывание текста из поля "Input"
    if (text) {                                                             // Добавляем функцию if, зависящую от константы text
        await fetch('https://deploy-0jms.onrender.com/api/tasks', {                    // Запрашиваем данные из API для всех элементов
            method: 'POST',                                                 // Задаём метод взимодействия с данными
            headers: { 'Content-Type': 'application/json' },                // Указываем серверу, что тело запроса в формате JSON
            body: JSON.stringify({ text: text })                            // Меняем объект на строку JSON
        });
        input.value = '';                                                   // Пользователь вводит данные
        loadTasks();                                                        // Перезапрашиваем список для после добавления нужных данных на добавление
    }
});

loadTasks();                                                                // Перезапрашиваем список нужных данных