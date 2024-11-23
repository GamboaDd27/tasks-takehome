import React, { useState } from 'react';
import { NewTask } from '../types';

interface TaskFormProps {
  onTaskAdded: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Task name cannot be empty.');
      return;
    }

    const newTask: NewTask = { name, completed: false };

    fetch('http://127.0.0.1:8000/api/tasks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => Promise.reject(err));
        }
        return response.json();
      })
      .then(() => {
        setName('');
        setError('');
        onTaskAdded();
      })
      .catch((error) => {
        console.error('Error adding task:', error);
        setError('Failed to add task.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="taskName" className="form-label">
          Task Name
        </label>
        <input
          type="text"
          id="taskName"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <div className="text-danger mt-1">{error}</div>}
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
