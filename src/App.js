import './App.css';
import {useEffect, useState} from 'react';
import Reminder from './Reminder';

function App() {
  
  const [reminders, setReminders] = useState(() => {
      const savedReminders = localStorage.getItem('reminders');
      return savedReminders ? JSON.parse(savedReminders) : [];
  });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
      const savedReminders = localStorage.getItem('reminders');
      if (savedReminders) {
          setReminders(JSON.parse(savedReminders));
      }
    }, []);

  function handleSubmit(e) {
    const id = crypto.randomUUID();
    const update = [...reminders, {id, title, description}];
    setReminders(update);
    console.log(update);
    localStorage.setItem('reminders', JSON.stringify(update));
  }

  function handleDelete(index){
    const filtered = reminders.filter((_, i) => i !== index);
    setReminders(filtered);
    localStorage.setItem('reminders', JSON.stringify(filtered));
  }

   useEffect(() => {
        const savedReminders = localStorage.getItem('reminders');
        if (savedReminders) {
            setReminders(JSON.parse(savedReminders));
        }
    }, []);

  return (
    <div className="App">
      <h1>Reminders</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Title: </label>
          <input 
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='description'>Description: </label>
          <input 
            type='text'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type='submit'>Add</button>
      </form>

      <h2>Your Reminders</h2>
      {(reminders.length >= 0) && 
        reminders.map((remind, index) => (
          <Reminder 
            key={index} 
            title={remind.title} 
            description={remind.description} 
            onDelete = {() => handleDelete(index)}
          />))
      }
      {(reminders.length == 0) && <p>No reminders added</p>}
    </div>
  );
}

export default App;
