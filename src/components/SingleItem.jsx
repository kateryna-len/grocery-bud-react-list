import React, { useState } from 'react';

function SingleItem({ item, removeItem }) {
  const [check, setCheck] = useState(false);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={check}
        onChange={() => setCheck(!check)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: check ? 'line-through' : 'inherit',
        }}
      >
        {item.name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(item.id)}>
        remove
      </button>
    </div>
  );
}

export default SingleItem;
