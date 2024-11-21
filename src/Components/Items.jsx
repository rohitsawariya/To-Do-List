import React from 'react';
import "./Items.css"

function Items({ todoName, todoDescription, onDelete }) {


  return (
    <div className={`set flex flex-row flex-wrap p-2`}>
      <div className="tasks w-full sm:w-1/5 
        m-2 mx-7 text-white px-0 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
        <span>{todoName}</span>
      </div>

      <div className="task2 w-full w-2/5 m-2 mx-5 mr-9 px-4 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600
      "
      >
        <span>{todoDescription}</span>

      </div>


      <div className='divv max-md:container '>

        <button
          type="button"
          onClick={onDelete}
          className="btns2 w-full sm:w-32 m-2  bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 duration-300
        max-mmd:w-32
        "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Items;
