import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [completedItems, setCompletedItems] = useState(0);

  function handleAddItem(item) {
    const newItem = { ...item, id: idCounter };
    setItems(items => [...items, newItem]);
    setIdCounter(idCounter + 1);
  }

  function handleDeleteItem(id) {
    setItems(items => {
      const updatedItems = items.filter(item => item.id !== id);
      updateCompletedCount(updatedItems);
      return updatedItems;
    });
  }

  function updateStatus(id) {
    setItems(items => {
      const updatedItems = items.map(item => {
        if (item.id === id) {
          return { ...item, status: item.status === 'Finished' ? 'In Progress' : 'Finished' };
        }
        return item;
      });
      updateCompletedCount(updatedItems);
      return updatedItems;
    });
  }

  function updateCompletedCount(updatedItems) {
    const completedCount = updatedItems.filter(item => item.status === 'Finished').length;
    setCompletedItems(completedCount);
  }

  function handleUpdateItem(id, updatedName, updatedQuantity) {
    setItems(items => {
      const updatedItems = items.map(item => {
        if (item.id === id) {
          return { ...item, name: updatedName, quantity: updatedQuantity };
        }
        return item;
      });
      return updatedItems;
    });
  }

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <>
                  <Header />
                  <Form onAddItem={handleAddItem} />
                  <TaskList items={items} onDeleteItem={handleDeleteItem} updateStatus={updateStatus} onUpdateItem={handleUpdateItem} />
                  <Footer itemCount={items.length} completedItems={completedItems} />
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
