import React, { useState } from "react";

function Items({ todoUserId, todoTitle, todoStatus: initialStatus }) {
  const [status, setStatus] = useState(initialStatus);


  const onEdit = async () => {
    try {
      const updatedStatus = !status;

      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoUserId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: updatedStatus }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Updated task:", data);

        setStatus(updatedStatus);
      } else {
        console.error("Failed to update task:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4 bg-gray-800 text-white rounded-lg">
      {/* User ID */}
      <div className="w-full sm:w-1/5 text-center p-2 bg-gray-700 rounded-lg">
        <span className="block text-sm font-medium">User ID</span>
        <span className="text-lg">{todoUserId}</span>
      </div>

      {/* Title */}
      <div className="w-full sm:w-2/5 text-center p-2 bg-gray-700 rounded-lg">
        <span className="block text-sm font-medium">Title</span>
        <span className="text-lg">{todoTitle}</span>
      </div>

      {/* Status */}
      <div className="w-full sm:w-1/5 text-center">
        <div
          className={`p-2 text-white rounded-lg ${
            status ? "bg-green-500" : "bg-orange-400"
          }`}
        >
          {status ? "Completed" : "Pending"}
        </div>
      </div>

      {/* Edit Button */}
      <div className="w-full sm:w-1/5 text-center">
        <button
          type="button"
          onClick={onEdit}
          className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {status ? "Mark as Pending" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
}

export default Items;
