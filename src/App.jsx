import './App.css'
import React, { useState } from 'react';
import { Plus, Trash2, GripVertical, CheckCircle2, Circle, Clock, LayoutDashboard } from 'lucide-react';

  const COLUMNS = [
  { id: 'todo', title: 'To Do', icon: Circle, color: 'text-slate-500', bgColor: 'bg-slate-100', dotColor: 'bg-slate-400' },
  { id: 'in-progress', title: 'In Progress', icon: Clock, color: 'text-blue-500', bgColor: 'bg-blue-50', dotColor: 'bg-blue-500' },
  { id: 'review', title: 'Review', icon: LayoutDashboard, color: 'text-purple-500', bgColor: 'bg-purple-50', dotColor: 'bg-purple-500' },
  { id: 'done', title: 'Done', icon: CheckCircle2, color: 'text-green-500', bgColor: 'bg-green-50', dotColor: 'bg-green-500' }
];

const INITIAL_TASKS = [
  { id: '1', title: 'Design landing page mockup', status: 'todo' },
  { id: '2', title: 'Setup React project structure', status: 'in-progress' },
  { id: '3', title: 'Implement authentication flow', status: 'review' },
  { id: '4', title: 'Create database schema', status: 'done' },
  { id: '5', title: 'Write API documentation', status: 'todo' },
];


function App() {

  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [draggedTaskId, setDraggedTaskId] = useState(null);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleDragStart = (e, taskId) => {
    setDraggedTaskId(taskId);
    // Slight delay to allow the drag image to generate before adding opacity class
    setTimeout(() => {
      e.target.classList.add('opacity-50');
    }, 0);
  };

    const handleDragEnd = (e) => {
    e.target.classList.remove('opacity-50');
    setDraggedTaskId(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (e, targetStatus) => {
    e.preventDefault();
    if (!draggedTaskId) return;

    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === draggedTaskId ? { ...task, status: targetStatus } : task
      )
    );
    setDraggedTaskId(null);
  };

  // Task Operations
  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTaskTitle.trim(),
      status: 'todo'
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setIsAddingTask(false);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  return (
    <>
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-6 md:p-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            Project Board
          </h1>
          <p className="text-slate-500 mt-1">Manage your team's tasks and workflow.</p>
        </div>
        
        <button
          onClick={() => setIsAddingTask(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-sm"
        >
          <Plus size={18} />
          <span>New Task</span>
        </button>
      </div>

      {/* Kanban Board Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start pb-4 overflow-visible">
        {COLUMNS.map(column => (
          <div
            key={column.id}
            className={`flex-1 min-w-70 md:min-w-[320px] rounded-xl flex flex-col bg-slate-200/50 border border-slate-200/80 p-4 transition-colors ${draggedTaskId ? 'border-dashed border-slate-400' : ''}`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${column.dotColor}`} />
                <h2 className="font-semibold text-slate-700">{column.title}</h2>
              </div>
              <span className="bg-slate-200 text-slate-600 text-xs font-medium px-2 py-0.5 rounded-full">
                {tasks.filter(t => t.status === column.id).length}
              </span>
            </div>

            {/* Tasks List */}
            <div className="flex flex-col gap-3 min-h-[150px]">
              {/* Inline Add Task Form for 'To Do' column */}
              {column.id === 'todo' && isAddingTask && (
                <form onSubmit={addTask} className="bg-white p-3 rounded-lg shadow-sm border border-indigo-200 animate-in fade-in slide-in-from-top-2">
                  <input
                    type="text"
                    autoFocus
                    placeholder="What needs to be done?"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="w-full text-sm outline-none placeholder:text-slate-400 mb-3"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingTask(false)}
                      className="text-xs px-2 py-1 text-slate-500 hover:text-slate-700 font-medium transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!newTaskTitle.trim()}
                      className="text-xs px-3 py-1 bg-indigo-600 text-white rounded font-medium disabled:opacity-50 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </form>
              )}

              {/* Render Task Cards */}
              {tasks.filter(task => task.status === column.id).map(task => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  onDragEnd={handleDragEnd}
                  className="wrap-anywhere group relative bg-white p-4 rounded-lg shadow-sm hover:shadow-md border border-slate-200 cursor-grab active:cursor-grabbing transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-slate-400 cursor-grab">
                      <GripVertical size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-700 leading-snug">
                        {task.title}
                      </p>
                    </div>
                    
                    {/* Delete Button (Visible on hover) */}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-red-50"
                      title="Delete task"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}

              {/* Empty State / Drop Zone Indicator */}
              {tasks.filter(task => task.status === column.id).length === 0 && !isAddingTask && (
                <div className="h-24 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-sm font-medium">
                  Drop tasks here
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
