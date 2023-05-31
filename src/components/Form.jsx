import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Form({ addItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    toast.success('create item');
    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          value={newItem}
          className="form-input"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
}

export default Form;
