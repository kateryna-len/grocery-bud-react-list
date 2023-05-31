import React from 'react';
import SingleItem from './SingleItem';

function Items({ items, removeItem }) {
  return (
    <div className="items">
      {items.map((item, index) => {
        return <SingleItem removeItem={removeItem} key={index} item={item} />;
      })}
    </div>
  );
}

export default Items;
