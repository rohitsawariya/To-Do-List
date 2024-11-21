import React, { useRef } from 'react';
import styles from './Form.module.css';

function Form() {
  const inputName = useRef();
  const inputDescription = useRef();

  const handleAddButton = async (event) => {
    event.preventDefault();
    const name = inputName.current.value;
    const description = inputDescription.current.value;

    if (!name || !description) {
      alert('Both Task Name and Description are required!');
      return;
    }

    inputName.current.value = '';
    inputDescription.current.value = '';

    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success");
        window.location.reload()
        
      } else {
        alert(data.error || 'Error adding task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error adding task');
    }
  };

  return (
    <form
      onSubmit={handleAddButton}
      className={`bg-red ${styles.set} flex p-5 rounded-lg ml-2 shadow-lg w-full`}
      style={{ padding: '0px 0px 0px 0px' }}
    >
      <label className={`${styles.closenes} lock text-white font-semibold mb-2`}>
        Task Name:
      </label>
      <input
        ref={inputName}
        type="text"
        className={`${styles.closeness} text-xl w-1/2 m-2 text-black px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
        placeholder="Enter your Task"
      />

      <label className={`${styles.closenes} block text-white font-semibold mb-2`}>
        Description:
      </label>
      <input
        ref={inputDescription}
        type="text"
        className={`${styles.closeness} text-xl w-1/2 m-2 px-1 py-1 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
        placeholder="Enter Description"
      />

      <button
        type="submit"
        className={`${styles.closenes} w-1/4 m-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300`}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
