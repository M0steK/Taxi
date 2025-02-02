import React, { useEffect, useState } from 'react';
import { fetchBackendMessage } from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Pobranie wiadomości z backendu przy pierwszym renderowaniu komponentu
    const getMessage = async () => {
      const data = await fetchBackendMessage();
      if (data) {
        setMessage(data);
      }
    };
    getMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wiadomość z backendu:</h1>
        <p>{message || 'Ładowanie...'}</p>
      </header>
    </div>
  );
}

export default App;
