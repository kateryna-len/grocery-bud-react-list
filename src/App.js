import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import Items from './components/Items';

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'));
//   } else {
//     list = [];
//   }
//   return list;
// };

const defaultList = JSON.parse(localStorage.getItem('list')) || [];

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

function App() {
  const [items, setItem] = useState(defaultList);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItem(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => itemId !== item.id);
    setItem(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center ">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
