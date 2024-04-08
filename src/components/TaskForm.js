import React, { useState } from 'react';

function Form({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    const newItem = { name, quantity, id: Date.now(), isChecked: false };
    console.log(newItem);
    setName('');
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div id="form">
      <form onSubmit={handleSubmit} className="form1 row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 30 }, (_, n) => n + 1).map((num) => (
            <option value={num} key={num}>{num}</option>
          ))}
        </select>

        <div className="col-12">
          <div className="form-outline">
            <input
              className="darker-input"
              type="text"
              placeholder="Enter Here!"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
