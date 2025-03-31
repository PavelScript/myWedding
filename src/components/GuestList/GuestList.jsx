import React, { useState, useEffect } from 'react';
import styles from "./GuestList.module.css";

const GuestList = () => {
  // Состояние для хранения данных
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Выполняем GET-запрос при монтировании компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://45.153.189.160:5000/guests');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setGuests(data); // Сохраняем данные в состоянии
      } catch (err) {
        setError(err.message); // Сохраняем ошибку в состоянии
      } finally {
        setLoading(false); // Завершаем загрузку
      }
    };

    fetchData(); // Вызываем функцию для получения данных
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз

  // Если данные еще загружаются
  if (loading) {
    return <p>Loading...</p>;
  }

  // Если произошла ошибка
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Отображаем список гостей
  return (
    <div className={styles.container}>
      <h1>Guest List</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id}>
              <td>{guest.name}</td>
              <td>{guest.coming ? 'Coming' : 'Not Coming'}</td>
              <td>{guest.location || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestList;
