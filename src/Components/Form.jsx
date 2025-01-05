import React, { useRef } from 'react';
import styles from './Form.module.css';

function Form() {
  const inputUserId = useRef();
  const inputTitle = useRef();

  const handleAddButton = async (event) => {
    event.preventDefault();
    const name = inputUserId.current.value;
    const description = inputTitle.current.value;

    if (!name || !description) {
      alert('Both Task Name and Description are required!');
      return;
    }

    inputUserId.current.value = '';
    inputTitle.current.value = '';

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
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
        console.log("---", data);
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
      className={`flex flex-col sm:flex-row sm:flex-wrap items-stretch gap-4 p-5 rounded-lg shadow-lg w-full `}
    >
      <div className="flex flex-col flex-2">
        <label className="text-white font-semibold mb-1">
          UserId:
        </label>
        <input
          ref={inputUserId}
          type="text"
          className="text-black sm:text-lg p-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Enter UserId"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label className="text-white font-semibold mb-1">
          Title:
        </label>
        <input
          ref={inputTitle}
          type="text"
          className="text-black sm:text-lg p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Enter Description"
        />
      </div>
      <button
        type="submit"
        className="self-start sm:self-center bg-blue-600 mt-6 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
