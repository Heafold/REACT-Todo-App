import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from './redux/tasksSlice';

function TodoList() {
  const [newTask, setNewTask] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const taskId = new Date().getTime();
    dispatch(addTask({ id: taskId, name: newTask }));
    setNewTask('');
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask({ id: taskId }));
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleAddTask}>Ajouter</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} <button onClick={() => handleRemoveTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
