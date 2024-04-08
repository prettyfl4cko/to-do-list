import React, { useState } from 'react';

function Task({ item, index, onDeleteItem, updateStatus, onUpdateItem }) {
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [editedQuantity, setEditedQuantity] = useState(item.quantity);

  function handleFinish() {
    updateStatus(item.id);
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleSave() {
    onUpdateItem(item.id, editedName, editedQuantity);
    setEditMode(false);
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {editMode ? (
          <input
            type="number"
            value={editedQuantity}
            onChange={(e) => setEditedQuantity(e.target.value)}
          />
        ) : (
          <span>{item.quantity}</span>
        )}
      </td>
      <td>
        {editMode ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          <span>{item.name}</span>
        )}
      </td>
      <td>{item.status || 'In Progress'}</td>
      <td>
        {editMode ? (
          <button type="button" onClick={handleSave} className="btn btn-primary">Save</button>
        ) : (
          <>
            <button
              type="button"
              onClick={handleFinish}
              className={`btn btn-success ${item.status === 'Finished' ? 'disabled' : ''}`}
              disabled={item.status === 'Finished'}
              style={{ opacity: item.status === 'Finished' ? 0.5 : 1 }}
            >
              Finish
            </button>
            <button type="button" onClick={handleEdit} className="btn btn-info ms-1">Edit</button>
          </>
        )}
        <button type="button" onClick={() => onDeleteItem(item.id)} className="btn btn-danger ms-1">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Task;
