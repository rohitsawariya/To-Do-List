import React, { useState, useEffect } from 'react';
import Items from './Items';
import styles from './WelcomeMsg.module.css';

function ItemList() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        
        // console.log('Fetched tasks:', data);
  
        if (response.ok) {
          setTodoList(data); 
          console.log("----", todoList);
          
        } else {
          alert(data.error || 'Error fetching tasks');
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
        // alert('Error fetching tasks');
      }
    };
  
    fetchTasks();
  }, []);


  return (
    <div>
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <Items
            key={todo.id}
            todoId={todo.id}
            todoUserId={todo.userId}
            todoTitle={todo.title}
            todoStatus={todo.completed} 
          />
        ))
      ) : (
        <h1 className={styles.set}>No Task Available. Enjoy Your Day</h1>
      )}
    </div>
  );
}

export default ItemList;
