import { useState } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'September 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Haircut',
        day: 'September 15th at 1:30pm',
        reminder: true, 
    },
    {
        id: 3,
        text: 'Marathon',
        day: 'September 25th at 12:30pm',
        reminder: false,
    },
  ])

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id 
      ? { ...task, reminder: !task.reminder } 
      : task))
  }

  return (
    <div className="container">
     <Header 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
    />
     {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 
        ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ('No tasks')
      }
    </div>
  );
}

export default App;
