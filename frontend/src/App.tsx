import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleTaskAddedOrUpdated = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="container mt-5">
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={handleTaskAddedOrUpdated} />
      <TaskList refresh={refresh} onTaskUpdated={handleTaskAddedOrUpdated} />
    </div>
  );
};

export default App;
