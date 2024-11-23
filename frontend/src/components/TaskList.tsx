import React, { useEffect, useState } from 'react';
import { Task } from '../types';

interface TaskListProps {
  refresh: boolean;
  onTaskUpdated: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ refresh, onTaskUpdated }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/tasks/')
      .then((response) => response.json())
      .then((data: Task[]) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, [refresh]);

  const handleCompleteTask = (id: number, completed: boolean) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      console.error('Task not found');
      return;
    }
  
    const updatedTask = { name: task.name, completed: !completed };
  
    console.log('Sending PUT request with payload:', updatedTask);
  
    fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => {
        if (!response.ok) {
          console.error('Failed to update task:', response.status, response.statusText);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        onTaskUpdated(); // Trigger refresh
      })
      .catch((error) => console.error('Error updating task:', error));
  };
  
  return (
    <div className="mt-4">
      <h3>Task List</h3>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {task.name} {task.completed ? '✔️' : '❌'}
            </span>
            <button
              className={`btn ${task.completed ? 'btn-success' : 'btn-secondary'} btn-sm`}
              onClick={() => handleCompleteTask(task.id, task.completed)}
            >
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
