import React, { useState, useEffect } from 'react';
import Items from './Items';
import styles from './WelcomeMsg.module.css';

function ItemList() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tasks');
        const data = await response.json();
        
        console.log('Fetched tasks:', data);
  
        if (response.ok) {
          setTodoList(data.tasks); 
        } else {
          alert(data.error || 'Error fetching tasks');
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
        alert('Error fetching tasks');
      }
    };
  
    fetchTasks();
  }, []);


  const deleteTask = async (id) => {
    console.log(`Attempting to delete task with ID: ${id}`);
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Task deleted successfully:', id);
        setTodoList((prevList) => prevList.filter((task) => task._id !== id));
        alert('Task deleted successfully');
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        alert('Error deleting task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Error deleting task');
    }
  };
  

  return (
    <div>
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <Items
            key={todo._id}
            todoId={todo._id}
            todoName={todo.name}
            todoDescription={todo.description}
            onDelete={() => deleteTask(todo._id)} 
          />
        ))
      ) : (
        <h1 className={styles.set}>No Task Available. Enjoy Your Day</h1>
      )}
    </div>
  );
}

export default ItemList;
