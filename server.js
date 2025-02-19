const mysql = require('mysql');

// Создаем соединение
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ItsPisha97',
    database: 'u179888_guests' // Добавьте имя вашей базы данных
});

// Проверяем подключение
connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к БД:', err);
        return;
    }
    console.log('Успешно подключено к БД');

    // Пробуем выполнить простой запрос
    connection.query('SHOW TABLES', (err, results) => {
        if (err) {
            console.error('Ошибка запроса:', err);
            return;
        }
        console.log('Таблицы в базе данных:', results);
        
        // Закрываем соединение
        connection.end((err) => {
            if (err) {
                console.error('Ошибка при закрытии соединения:', err);
                return;
            }
            console.log('Соединение закрыто');
        });
    });
});


// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Store responses (in a real app, this would be a database)
// let responses = [];

// // Endpoint to submit RSVP
// app.post('/api/rsvp', (req, res) => {
//   const { willAttend } = req.body;
  
//   if (willAttend === undefined) {
//     return res.status(400).json({ error: 'Missing willAttend field' });
//   }

//   // Store the response
//   responses.push({
//     willAttend,
//     timestamp: new Date()
//   });

//   res.status(200).json({ message: 'RSVP received successfully' });
// });

// // Endpoint to get all responses (for admin purposes)
// app.get('/api/rsvp', (req, res) => {
//   res.json(responses);
// });

// app.listen(port, () => console.log(`Server running on port ${port}`));