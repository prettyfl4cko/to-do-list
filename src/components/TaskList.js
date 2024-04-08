import React, { useState } from 'react';
import Task from './Task';

function TaskList({ items, onDeleteItem, updateStatus, onUpdateItem }) {
  const [sortType, setSortType] = useState('none');

  const sortedItems = [...items].sort((a, b) => {
    if (sortType === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'completed') {
      return (a.status === 'Finished' ? 1 : 0) - (b.status === 'Finished' ? 1 : 0);
    }
    return 0;
  });

  return (
    <div>
      <div className="sort-options">
        <label>
          Sort by:
          <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="none">None</option>
            <option value="name">Name</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
      <table className="table mb-4">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Quantity</th>
            <th scope="col">Tasks</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <Task key={item.id} item={item} index={index} onDeleteItem={onDeleteItem} updateStatus={updateStatus} onUpdateItem={onUpdateItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
